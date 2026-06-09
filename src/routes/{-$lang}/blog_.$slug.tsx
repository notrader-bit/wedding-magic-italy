import { createFileRoute, notFound } from "@tanstack/react-router";
import { BLOG_IMAGES, getBlogPost, isBlogSlug, type BlogSlug } from "@/data/blog-posts";
import { buildSlugPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { lazyRoutePage } from "@/lib/lazy-route-page";

const BlogPostPage = lazyRoutePage(() => import("@/pages/blog-post-page"));

export const Route = createFileRoute("/{-$lang}/blog_/$slug")({
  beforeLoad: ({ params }) => {
    if (!isBlogSlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.slug as BlogSlug;
    const lang = resolveRouteLang(params.lang);
    const post = getBlogPost(lang, slug);
    const image = BLOG_IMAGES[slug];
    return buildSlugPageHead({
      title: `${post.title} — Wedding Magic Italy`,
      description: post.excerpt,
      canonicalPath: `/blog/${slug}`,
      lang,
      ogImage: image,
      ogType: "article",
    });
  },
  component: BlogPostPage,
});
