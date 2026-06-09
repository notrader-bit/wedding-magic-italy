import { createFileRoute } from "@tanstack/react-router";
import { lazyRoutePage } from "@/lib/lazy-route-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

const PortfolioPage = lazyRoutePage(() => import("@/pages/portfolio-page"));

export const Route = createFileRoute("/{-$lang}/portfolio")({
  head: ({ params }) =>
    buildLocalizedPageHead({
      metaKey: "portfolio",
      canonicalPath: "/portfolio",
      lang: resolveRouteLang(params.lang),
      ogImage: PAGE_OG_IMAGES.portfolio,
    }),
  component: PortfolioPage,
});
