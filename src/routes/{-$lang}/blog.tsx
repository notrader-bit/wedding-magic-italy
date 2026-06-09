import { createFileRoute } from "@tanstack/react-router";
import { lazyRoutePage } from "@/lib/lazy-route-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

const BlogIndexPage = lazyRoutePage(() => import("@/pages/blog-index-page"));

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
