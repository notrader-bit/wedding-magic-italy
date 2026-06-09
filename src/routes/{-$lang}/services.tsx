import { createFileRoute } from "@tanstack/react-router";
import { lazyRoutePage } from "@/lib/lazy-route-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

const ServicesPage = lazyRoutePage(() => import("@/pages/services-page"));

export const Route = createFileRoute("/{-$lang}/services")({
  head: ({ params }) =>
    buildLocalizedPageHead({
      metaKey: "services",
      canonicalPath: "/services",
      lang: resolveRouteLang(params.lang),
      ogImage: PAGE_OG_IMAGES.services,
    }),
  component: ServicesPage,
});
