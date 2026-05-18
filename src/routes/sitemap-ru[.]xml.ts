import { createFileRoute } from "@tanstack/react-router";
import { buildLangSitemap } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap-ru.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => buildLangSitemap(request, "ru"),
    },
  },
});
