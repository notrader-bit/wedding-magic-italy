import { createFileRoute, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/JsonLd";
import { LocaleLink } from "@/components/LocaleLink";
import {
  BLOG_IMAGES,
  getBlogPost,
  isBlogSlug,
  listOtherBlogPosts,
  type BlogSlug,
} from "@/data/blog-posts";
import { useLanguage } from "@/i18n/LanguageProvider";
import { buildSlugPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { blogPostingStructuredData } from "@/lib/structured-data";

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

function BlogPostPage() {
  const { slug } = Route.useParams() as { slug: BlogSlug };
  const { lang, t } = useLanguage();
  const post = getBlogPost(lang, slug);
  const b = t.blog;
  const image = BLOG_IMAGES[slug];

  const jsonLd = blogPostingStructuredData({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image,
    datePublished: post.datePublished,
  });

  const morePosts = listOtherBlogPosts(lang, slug);

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <section className="px-6 pb-12 pt-40 md:px-12 md:pb-16 md:pt-48">
          <div className="mx-auto max-w-[800px]">
            <LocaleLink to="/blog" className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-terracotta">
              ← {b.back}
            </LocaleLink>
            <p className="eyebrow mt-8">
              {b.published} {post.datePublished} · {post.readMinutes} {b.minRead}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ink md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
        </section>

        <div className="mx-auto max-w-[1000px] px-6 pb-32 md:px-12">
          <img src={image} alt="" className="aspect-[16/9] w-full object-cover" />
          <div className="prose-spacing mx-auto mt-12 max-w-[720px] space-y-6 text-base leading-relaxed text-foreground">
            {post.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {morePosts.length > 0 && (
        <section className="border-t border-border bg-cream px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1200px]">
            <p className="eyebrow">{b.recommendedEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">{b.recommendedTitle}</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {morePosts.map(({ slug: otherSlug, post: other }) => (
                <article key={otherSlug} className="group flex flex-col border border-border bg-background">
                  <LocaleLink to="/blog" params={{ slug: otherSlug }} className="block overflow-hidden">
                    <img
                      src={BLOG_IMAGES[otherSlug]}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </LocaleLink>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {b.published} {other.datePublished} · {other.readMinutes} {b.minRead}
                    </p>
                    <h3 className="mt-4 font-display text-2xl leading-snug text-ink">
                      <LocaleLink to="/blog" params={{ slug: otherSlug }} className="hover:text-terracotta">
                        {other.title}
                      </LocaleLink>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{other.excerpt}</p>
                    <LocaleLink
                      to="/blog"
                      params={{ slug: otherSlug }}
                      className="mt-6 text-[11px] uppercase tracking-[0.28em] text-ink hover:text-terracotta"
                    >
                      {b.readArticle} →
                    </LocaleLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
