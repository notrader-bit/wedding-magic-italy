import { createFileRoute, notFound } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageProvider";
import { STORY_DETAILS, STORY_IMAGES, STORY_UI, isStorySlug, type StorySlug } from "@/data/story-details";
import { buildSlugPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { lazyRoutePage } from "@/lib/lazy-route-page";

const StoryPage = lazyRoutePage(() => import("@/pages/portfolio-story-page"));

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/{-$lang}/portfolio_/$slug")({
  beforeLoad: ({ params }) => {
    if (!isStorySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const slug = params.slug as StorySlug;
    const lang = resolveRouteLang(params.lang);
    const detail = STORY_DETAILS[lang][slug] ?? STORY_DETAILS.en[slug];
    if (!detail) return { meta: [{ title: "Story — Wedding Magic Italy" }] };
    const title = `${slug.split("-").slice(0, 2).map(cap).join(" & ")} — ${detail.venue}`;
    const description = detail.paragraphs[0];
    const image = STORY_IMAGES[slug].hero;
    return buildSlugPageHead({
      title: `${title} | Wedding Magic Italy`,
      description,
      canonicalPath: `/portfolio/${slug}`,
      lang,
      ogImage: image,
      ogType: "article",
    });
  },
  component: StoryPage,
  notFoundComponent: NotFoundStory,
});

function NotFoundStory() {
  const { lang } = useLanguage();
  const ui = STORY_UI[lang];
  const langPrefix = lang === "en" ? "" : `/${lang}`;
  return (
    <section className="px-6 pb-24 pt-44 md:px-12 md:pt-52">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-4xl text-ink md:text-5xl">{ui.notFoundTitle}</h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{ui.notFoundBody}</p>
        <a
          href={`${langPrefix}/portfolio`}
          className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta"
        >
          {ui.notFoundBtn}
        </a>
      </div>
    </section>
  );
}
