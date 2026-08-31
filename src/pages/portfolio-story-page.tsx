import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { ZoomableImage } from "@/components/ZoomableImage";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  STORY_SLUGS,
  STORY_IMAGES,
  STORY_DETAILS,
  STORY_UI,
  STORY_COUPLE_NAMES,
  STORY_GALLERY_SECTION_ORDER,
  type StorySlug,
} from "@/data/story-details";

export default function StoryPage() {
  const { slug } = useParams({ strict: false }) as { slug: StorySlug };
  const { lang, t } = useLanguage();
  const ui = STORY_UI[lang];
  const detail = STORY_DETAILS[lang][slug];
  const imgs = STORY_IMAGES[slug];
  const couple = STORY_COUPLE_NAMES[slug];
  const [first, second] = couple.split(" & ");

  const idx = STORY_SLUGS.indexOf(slug);
  const nextSlug = STORY_SLUGS[(idx + 1) % STORY_SLUGS.length];
  const nextCouple = STORY_COUPLE_NAMES[nextSlug];

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = `${couple} — ${detail.venue} | Wedding Magic Italy`;
  }, [couple, detail.venue]);

  const langPrefix = lang === "en" ? "" : `/${lang}`;

  const storyGallery = useMemo(() => {
    const hero = { src: imgs.hero, alt: couple };
    if (imgs.sections) {
      const rest = STORY_GALLERY_SECTION_ORDER.flatMap((sectionId, si) =>
        imgs.sections![sectionId].map((src, gi) => ({
          src,
          alt: `${couple} — ${ui.gallerySections[sectionId]} ${gi + 1}`,
        })),
      );
      return [hero, ...rest];
    }
    return [
      hero,
      ...imgs.gallery!.map((src, gi) => ({
        src,
        alt: `${couple} ${ui.galleryH} ${gi + 1}`,
      })),
    ];
  }, [couple, imgs, ui.galleryH, ui.gallerySections]);

  let galleryCursor = 1;

  return (
    <>
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={imgs.hero}
          alt={couple}
          className="absolute inset-0 h-full w-full object-cover"
          style={
            imgs.heroObjectPosition
              ? { objectPosition: imgs.heroObjectPosition }
              : undefined
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75" />
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <div className="mx-auto w-full max-w-[1100px] rounded-sm bg-black/25 p-6 backdrop-blur-[2px] md:p-10">
            <p
              className="eyebrow text-[#f0c9a8]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.65)" }}
            >
              {detail.venue} · {detail.season}
            </p>
            <h1
              className="mt-4 font-display text-5xl leading-[1.05] text-white md:text-7xl"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.45)" }}
            >
              {first}{" "}
              <span className="display-italic text-[#f0c9a8]">&</span> {second}
            </h1>
          </div>
        </div>
      </section>

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

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <p className="eyebrow">{ui.galleryH}</p>

          {imgs.sections ? (
            <div className="mt-10">
              <nav
                className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-6 md:gap-x-10"
                aria-label={ui.galleryH}
              >
                {STORY_GALLERY_SECTION_ORDER.map((sectionId) => (
                  <a
                    key={sectionId}
                    href={`#gallery-${sectionId}`}
                    className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-terracotta"
                  >
                    {ui.gallerySections[sectionId]}
                  </a>
                ))}
              </nav>

              <div className="mt-16 space-y-24 md:space-y-32">
                {STORY_GALLERY_SECTION_ORDER.map((sectionId) => {
                  const images = imgs.sections![sectionId];
                  return (
                    <div key={sectionId} id={`gallery-${sectionId}`} className="scroll-mt-32">
                      <h3 className="font-display text-2xl text-ink md:text-3xl">
                        {ui.gallerySections[sectionId]}
                      </h3>
                      <div className="mt-8 grid gap-4 md:grid-cols-12 md:gap-6">
                        {images.map((src, gi) => {
                          const galleryIndex = galleryCursor++;
                          const span =
                            gi % 3 === 0
                              ? "md:col-span-8"
                              : gi % 3 === 1
                                ? "md:col-span-4"
                                : "md:col-span-12";
                          const aspect =
                            gi % 3 === 0
                              ? "aspect-[16/10]"
                              : gi % 3 === 1
                                ? "aspect-[3/4]"
                                : "aspect-[16/7]";
                          return (
                            <div key={gi} className={span}>
                              <div className={`${aspect} overflow-hidden`}>
                                <ZoomableImage
                                  src={src}
                                  alt={`${couple} — ${ui.gallerySections[sectionId]} ${gi + 1}`}
                                  gallery={storyGallery}
                                  galleryIndex={galleryIndex}
                                  className="h-full"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-8">
                <div className="aspect-[16/10] overflow-hidden">
                  <ZoomableImage
                    src={imgs.gallery![0]}
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
                    src={imgs.gallery![1]}
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
                    src={imgs.gallery![2]}
                    alt={`${couple} ${ui.galleryH} 3`}
                    gallery={storyGallery}
                    galleryIndex={3}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

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

      <section className="relative overflow-hidden bg-ink px-6 py-28 md:px-12 md:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 15%, rgba(201,123,90,0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(240,201,168,0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-[920px] border border-white/12 bg-white/[0.04] px-8 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:px-16 md:py-20">
          <p className="eyebrow text-[#f0c9a8]">{ui.ctaEyebrow}</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.06] text-white md:text-6xl lg:text-7xl">
            {ui.ctaH1a}{" "}
            <span className="display-italic text-[#f0c9a8]">{ui.ctaH1b}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/92 md:text-lg">
            {ui.ctaBody}
          </p>
          <a
            href={`${langPrefix}/contact`}
            className="mt-12 inline-block bg-[#f0c9a8] px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-ink shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors hover:bg-white"
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
