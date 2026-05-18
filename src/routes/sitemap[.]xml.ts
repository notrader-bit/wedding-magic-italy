import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";
const LANGS = ["en", "uk", "ru", "it", "es", "de"] as const;
const DEFAULT_LANG = "en";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = BASE_URL || new URL(request.url).origin;
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.9" },
          { path: "/portfolio", priority: "0.9" },
          { path: "/experience", priority: "0.8" },
          { path: "/contact", priority: "0.9" },
        ];

        const buildUrl = (path: string, lang: string) =>
          lang === DEFAULT_LANG ? `${origin}${path}` : `${origin}${path}?lang=${lang}`;

        const urls = entries
          .flatMap((e) =>
            LANGS.map((lang) => {
              const alternates = LANGS.map(
                (l) =>
                  `    <xhtml:link rel="alternate" hreflang="${l}" href="${buildUrl(e.path, l)}" />`,
              ).join("\n");
              return [
                `  <url>`,
                `    <loc>${buildUrl(e.path, lang)}</loc>`,
                `    <changefreq>weekly</changefreq>`,
                `    <priority>${e.priority}</priority>`,
                alternates,
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${buildUrl(e.path, DEFAULT_LANG)}" />`,
                `  </url>`,
              ].join("\n");
            }),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`;
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
