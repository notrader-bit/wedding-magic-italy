import { createFileRoute } from "@tanstack/react-router";
import BlogIndexPage from "@/pages/blog-index-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

export const Route = createFileRoute("/{-$lang}/blog")({
  head: ({ params }) =>
    buildLocalizedPageHead({
      metaKey: "blog",
      canonicalPath: "/blog",
      lang: resolveRouteLang(params.lang),
      ogImage: PAGE_OG_IMAGES.blog,
    }),
  component: BlogIndexPage,
});
