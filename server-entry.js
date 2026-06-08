/**
 * server-entry.js
 *
 * Wraps the TanStack Start / Cloudflare Workers-style fetch handler
 * (dist/server/server.js) in a plain Node.js HTTP server so Railway
 * can run it with `node server-entry.js`.
 *
 * The built handler exports a `{ fetch(request, env, ctx) }` object that
 * speaks the Fetch API — this file bridges Node.js IncomingMessage /
 * ServerResponse to that interface.
 */

import http from "node:http";
import { Readable } from "node:stream";

const PORT = parseInt(process.env.PORT ?? "8080", 10);

// Dynamically import the built server bundle.
const { default: handler } = await import("./dist/server/server.js");

/**
 * Convert a Node.js IncomingMessage into a Fetch API Request.
 */
async function toFetchRequest(req) {
  const protocol = req.socket?.encrypted ? "https" : "http";
  const host = req.headers["host"] ?? `localhost:${PORT}`;
  const url = `${protocol}://${host}${req.url}`;

  const method = req.method ?? "GET";
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }

  // Only attach a body for methods that can carry one.
  const hasBody = !["GET", "HEAD", "OPTIONS"].includes(method.toUpperCase());
  let body = undefined;
  if (hasBody) {
    body = Readable.toWeb(req);
  }

  return new Request(url, {
    method,
    headers,
    body,
    // Required when body is a ReadableStream so the request isn't buffered.
    ...(body ? { duplex: "half" } : {}),
  });
}

/**
 * Write a Fetch API Response back to a Node.js ServerResponse.
 */
async function fromFetchResponse(fetchRes, res) {
  res.statusCode = fetchRes.status;
  for (const [key, value] of fetchRes.headers.entries()) {
    res.setHeader(key, value);
  }

  if (fetchRes.body) {
    // Stream the response body rather than buffering it.
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
  try {
    const fetchReq = await toFetchRequest(req);
    const fetchRes = await handler.fetch(fetchReq, {}, {});
    await fromFetchResponse(fetchRes, res);
  } catch (err) {
    console.error("Unhandled server error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "content-type": "text/plain" });
    }
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
