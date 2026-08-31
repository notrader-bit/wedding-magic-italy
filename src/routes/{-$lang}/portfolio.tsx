import { createFileRoute } from "@tanstack/react-router";
import PortfolioPage from "@/pages/portfolio-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

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
