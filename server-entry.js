/**
 * Railway Node.js entry point for the TanStack Start / Cloudflare Workers build.
 *
 * The Vite build (via @cloudflare/vite-plugin) produces dist/server/server.js
 * as a Cloudflare Workers module that exports:
 *   { default: { fetch(request: Request, env, ctx): Promise<Response> } }
 *
 * This file wraps that handler in a plain Node.js HTTP server so it can run
 * on Railway without wrangler or workerd.
 */

import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT ?? "3000", 10);
const DIST_SERVER = path.join(__dirname, "dist", "server", "server.js");
const DIST_CLIENT = path.join(__dirname, "dist", "client");

// Validate the build artifact exists before starting.
if (!existsSync(DIST_SERVER)) {
  console.error(
    `[server-entry] ERROR: Build artifact not found at ${DIST_SERVER}\n` +
      `Run "bun run build" before starting the server.`,
  );
  process.exit(1);
}

// Lazily loaded handler — imported once on first request.
let workerHandler = null;

async function getHandler() {
  if (workerHandler) return workerHandler;
  const mod = await import(DIST_SERVER);
  // Cloudflare Workers module format: default export is { fetch }
  workerHandler = mod.default ?? mod;
  if (typeof workerHandler.fetch !== "function") {
    throw new Error(
      `[server-entry] dist/server/server.js does not export a { fetch } handler. ` +
        `Got: ${JSON.stringify(Object.keys(workerHandler))}`,
    );
  }
  return workerHandler;
}

// MIME type map for static assets (Node has no built-in mime lookup).
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] ?? "application/octet-stream";
}

/**
 * Try to serve a file from dist/client (static assets).
 * Returns true if the file was served, false otherwise.
 */
function tryServeStatic(req, res) {
  if (!existsSync(DIST_CLIENT)) return false;

  const urlPath = req.url.split("?")[0]; // strip query string
  const filePath = path.join(DIST_CLIENT, urlPath);

  // Security: ensure the resolved path is inside DIST_CLIENT.
  if (!filePath.startsWith(DIST_CLIENT + path.sep) && filePath !== DIST_CLIENT) {
    return false;
  }

  if (!existsSync(filePath)) return false;

  let stat;
  try {
    stat = statSync(filePath);
  } catch {
    return false;
  }

  if (!stat.isFile()) return false;

  const mimeType = getMimeType(filePath);
  // Hashed assets (/_assets/ or filenames with content hash) can be cached forever.
  const isImmutable =
    urlPath.startsWith("/_assets/") ||
    urlPath.startsWith("/assets/") ||
    /\.[a-f0-9]{8,}\.\w+$/.test(urlPath);

  res.writeHead(200, {
    "Content-Type": mimeType,
    "Content-Length": stat.size,
    "Cache-Control": isImmutable ? "public, max-age=31536000, immutable" : "public, max-age=3600",
  });
  createReadStream(filePath).pipe(res);
  return true;
}

/**
 * Convert a Node.js IncomingMessage to a Fetch API Request.
 */
async function nodeRequestToFetch(req) {
  const protocol = req.headers["x-forwarded-proto"] ?? "http";
  const host = req.headers["x-forwarded-host"] ?? req.headers.host ?? `localhost:${PORT}`;
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }

  const method = req.method ?? "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  let body = null;
  if (hasBody) {
    body = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on("data", (chunk) => chunks.push(chunk));
      req.on("end", () => resolve(Buffer.concat(chunks)));
      req.on("error", reject);
    });
  }

  return new Request(url, {
    method,
    headers,
    body: hasBody && body?.length ? body : null,
    // @ts-ignore — duplex is required for streaming bodies in some environments
    duplex: hasBody ? "half" : undefined,
  });
}

/**
 * Write a Fetch API Response back to the Node.js ServerResponse.
 */
async function writeFetchResponse(fetchRes, res) {
  const headers = {};
  fetchRes.headers.forEach((value, key) => {
    headers[key] = value;
  });
  res.writeHead(fetchRes.status, headers);

  if (fetchRes.body) {
    const reader = fetchRes.body.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    } finally {
      reader.releaseLock();
    }
  }
  res.end();
}

const server = http.createServer(async (req, res) => {
  // Serve static client assets directly from dist/client.
  if (req.method === "GET" || req.method === "HEAD") {
    if (tryServeStatic(req, res)) return;
  }

  try {
    const handler = await getHandler();
    const fetchReq = await nodeRequestToFetch(req);

    // Minimal env/ctx shims — the Workers handler may read env vars from `env`.
    const env = { ...process.env };
    const ctx = {
      waitUntil: (_promise) => {},
      passThroughOnException: () => {},
    };

    const fetchRes = await handler.fetch(fetchReq, env, ctx);
    await writeFetchResponse(fetchRes, res);
  } catch (err) {
    console.error("[server-entry] Unhandled error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain" });
    }
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`[server-entry] Listening on http://0.0.0.0:${PORT}`);
});

server.on("error", (err) => {
  console.error("[server-entry] Server error:", err);
  process.exit(1);
});
