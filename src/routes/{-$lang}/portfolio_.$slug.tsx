import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ZoomableImage } from "@/components/ZoomableImage";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  STORY_SLUGS,
  STORY_IMAGES,
  STORY_DETAILS,
  STORY_UI,
  isStorySlug,
  type StorySlug,
} from "@/data/story-details";
import { buildSlugPageHead, resolveRouteLang } from "@/lib/page-meta-head";

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

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const COUPLE_NAMES: Record<StorySlug, string> = {
  "eleonora-tomas-tuscany": "Eleonora & Tomás",
  "sara-andrew-como": "Sara & Andrew",
  "claudia-henri-amalfi": "Claudia & Henri",
  "sophie-marcus-puglia": "Sophie & Marcus",
};

function StoryPage() {
  const { slug } = Route.useParams() as { slug: StorySlug };
  const { lang, t } = useLanguage();
  const ui = STORY_UI[lang];
  const detail = STORY_DETAILS[lang][slug];
  const imgs = STORY_IMAGES[slug];
  const couple = COUPLE_NAMES[slug];
  const [first, second] = couple.split(" & ");

  const idx = STORY_SLUGS.indexOf(slug);
  const nextSlug = STORY_SLUGS[(idx + 1) % STORY_SLUGS.length];
  const nextCouple = COUPLE_NAMES[nextSlug];

  // Page title fallback for client navigations
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = `${couple} — ${detail.venue} | Wedding Magic Italy`;
  }, [couple, detail.venue]);

  const langPrefix = lang === "en" ? "" : `/${lang}`;

  const storyGallery = [
    { src: imgs.hero, alt: couple },
    ...imgs.gallery.map((src, gi) => ({
      src,
      alt: `${couple} ${ui.galleryH} ${gi + 1}`,
    })),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={imgs.hero}
          alt={couple}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <div className="mx-auto w-full max-w-[1100px] text-background">
            <p className="eyebrow opacity-90">
              {detail.venue} · {detail.season}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
              {first}{" "}
              <span className="display-italic text-[#f0c9a8]">&</span> {second}
            </h1>
          </div>
        </div>
      </section>

      {/* Back link + facts */}
      <section className="px-6 pt-16 md:px-12 md:pt-24">
        <div className="mx-auto max-w-[1100px]">
          <Link
            to={"/{-$lang}/portfolio" as never}
            params={{ lang: lang === "en" ? undefined : lang } as never}
            className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-ink"
          >
            {ui.back}
          </Link>

          <div className="mt-12 grid gap-10 border-y border-ink/10 py-10 md:grid-cols-5">
            <Fact label={ui.venueL} value={detail.venue} />
            <Fact label={ui.seasonL} value={detail.season} />
            <Fact label={ui.guestsL} value={detail.guests} />
            <Fact label={ui.paletteL} value={detail.palette} />
            <Fact label={ui.photoL} value={detail.photography} />
          </div>
        </div>
      </section>

      {/* Story paragraphs */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[760px]">
          <p className="eyebrow">{ui.storyH}</p>
          <div className="mt-8 space-y-7 font-display text-2xl leading-[1.35] text-ink md:text-[28px]">
            {detail.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <p className="eyebrow">{ui.galleryH}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <div className="aspect-[16/10] overflow-hidden">
                <ZoomableImage
                  src={imgs.gallery[0]}
                  alt={`${couple} ${ui.galleryH} 1`}
                  gallery={storyGallery}
                  galleryIndex={1}
                  className="h-full"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="aspect-[3/4] h-full overflow-hidden">
                <ZoomableImage
                  src={imgs.gallery[1]}
                  alt={`${couple} ${ui.galleryH} 2`}
                  gallery={storyGallery}
                  galleryIndex={2}
                  className="h-full"
                />
              </div>
            </div>
            <div className="md:col-span-12">
              <div className="aspect-[16/7] overflow-hidden">
                <ZoomableImage
                  src={imgs.gallery[2]}
                  alt={`${couple} ${ui.galleryH} 3`}
                  gallery={storyGallery}
                  galleryIndex={3}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decor */}
      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">{ui.decorH}</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              <span className="display-italic text-terracotta">{detail.palette}</span>
            </h2>
          </div>
          <ul className="space-y-5 md:col-span-8">
            {detail.decor.map((d, i) => (
              <li
                key={i}
                className="flex gap-5 border-b border-ink/10 pb-5 text-base leading-relaxed text-ink"
              >
                <span className="mt-2 inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-terracotta" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next + CTA */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{ui.nextH}</p>
            <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {nextCouple.split(" & ")[0]}{" "}
              <span className="display-italic text-terracotta">&</span>{" "}
              {nextCouple.split(" & ")[1]}
            </h3>
          </div>
          <a
            href={`${langPrefix}/portfolio/${nextSlug}`}
            className="border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta"
          >
            {t.portfolio.readStory}
          </a>
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-background md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">{ui.ctaH}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/80">
            {ui.ctaBody}
          </p>
          <a
            href={`${langPrefix}/contact`}
            className="mt-10 inline-block bg-[#f0c9a8] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-background"
          >
            {ui.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-lg leading-snug text-ink">{value}</p>
    </div>
  );
}

function NotFoundStory() {
  const { lang } = useLanguage();
  const ui = STORY_UI[lang];
  const langPrefix = lang === "en" ? "" : `/${lang}`;
  return (
    <section className="px-6 pb-24 pt-44 md:px-12 md:pt-52">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          {ui.notFoundTitle}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {ui.notFoundBody}
        </p>
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
