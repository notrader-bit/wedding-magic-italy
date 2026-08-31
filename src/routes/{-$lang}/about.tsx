import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/about-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

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
