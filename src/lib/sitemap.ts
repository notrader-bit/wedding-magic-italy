import type {} from "@tanstack/react-start";
import { BLOG_SLUGS } from "@/data/blog-posts";

const BASE_URL = "";
export const LANGS = ["en", "uk", "ru", "it", "es", "de"] as const;
export const DEFAULT_LANG = "en";
export type SitemapLang = (typeof LANGS)[number];

const ENTRIES = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/services", priority: "0.9" },
  { path: "/portfolio", priority: "0.9" },
  { path: "/blog", priority: "0.85" },
  ...BLOG_SLUGS.map((slug) => ({ path: `/blog/${slug}`, priority: "0.8" })),
  { path: "/contact", priority: "0.9" },
];

export function buildLangSitemap(request: Request, lang: SitemapLang): Response {
  const origin = BASE_URL || new URL(request.url).origin;
  const url = (path: string, l: SitemapLang) =>
    l === DEFAULT_LANG ? `${origin}${path}` : `${origin}${path}?lang=${l}`;

  const urls = ENTRIES.map((e) => {
    const alternates = LANGS.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(e.path, l)}" />`,
    ).join("\n");
    return [
      `  <url>`,
      `    <loc>${url(e.path, lang)}</loc>`,
      `    <changefreq>weekly</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      alternates,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(e.path, DEFAULT_LANG)}" />`,
      `  </url>`,
    ].join("\n");
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
