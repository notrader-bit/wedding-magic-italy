import { createFileRoute } from "@tanstack/react-router";
import { lazyRoutePage } from "@/lib/lazy-route-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

const AboutPage = lazyRoutePage(() => import("@/pages/about-page"));

export const Route = createFileRoute("/{-$lang}/about")({
  head: ({ params }) =>
    buildLocalizedPageHead({
      metaKey: "about",
      canonicalPath: "/about",
      lang: resolveRouteLang(params.lang),
      ogImage: PAGE_OG_IMAGES.about,
    }),
  component: AboutPage,
});
