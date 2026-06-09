import { LocaleLink } from "@/components/LocaleLink";
import { listBlogPosts, BLOG_IMAGES } from "@/data/blog-posts";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export default function BlogIndexPage() {
  usePageMeta("blog");
  const { t, lang } = useLanguage();
  const b = t.blog;
  const posts = listBlogPosts(lang);

  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{b.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {b.h1a} <span className="display-italic text-terracotta">{b.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{b.lede}</p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
          {posts.map(({ slug, post }) => (
            <article key={slug} className="group flex flex-col border border-border bg-background">
              <LocaleLink to="/blog" params={{ slug }} className="block overflow-hidden">
                <img
                  src={BLOG_IMAGES[slug]}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </LocaleLink>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {b.published} {post.datePublished} · {post.readMinutes} {b.minRead}
                </p>
                <h2 className="mt-4 font-display text-2xl leading-snug text-ink md:text-3xl">
                  <LocaleLink to="/blog" params={{ slug }} className="hover:text-terracotta">
                    {post.title}
                  </LocaleLink>
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <LocaleLink
                  to="/blog"
                  params={{ slug }}
                  className="mt-8 text-[11px] uppercase tracking-[0.28em] text-ink hover:text-terracotta"
                >
                  {b.readArticle} →
                </LocaleLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
