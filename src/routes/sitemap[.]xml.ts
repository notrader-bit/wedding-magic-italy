import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";
const LANGS = ["en", "uk", "ru", "it", "es", "de"] as const;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = BASE_URL || new URL(request.url).origin;
        const today = new Date().toISOString().slice(0, 10);

        const sitemaps = LANGS.map((l) =>
          [
            `  <sitemap>`,
            `    <loc>${origin}/sitemap-${l}.xml</loc>`,
            `    <lastmod>${today}</lastmod>`,
            `  </sitemap>`,
          ].join("\n"),
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
