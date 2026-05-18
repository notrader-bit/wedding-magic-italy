import { createFileRoute } from "@tanstack/react-router";
import { buildLangSitemap } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap-it.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => buildLangSitemap(request, "it"),
    },
  },
});
