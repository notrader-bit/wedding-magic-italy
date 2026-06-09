import { createFileRoute } from "@tanstack/react-router";
import { LocaleLink } from "@/components/LocaleLink";
import { ZoomableImage } from "@/components/ZoomableImage";
import heroImg from "@/assets/hero-tuscany.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";
import { STORY_SLUGS } from "@/data/story-details";
import { buildPageHead, PAGE_OG_IMAGES } from "@/lib/og-images";

export const Route = createFileRoute("/{-$lang}/portfolio")({
  head: () =>
    buildPageHead({
      title: "Portfolio — Wedding Magic Italy",
      description: "A selected portfolio of luxury weddings across Italy.",
      canonicalPath: "/portfolio",
      ogImage: PAGE_OG_IMAGES.portfolio,
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  usePageMeta("portfolio");
  const { t, lang } = useLanguage();
  const p = t.portfolio;
  const langPrefix = lang === "en" ? "" : `/${lang}`;
  const images = [heroImg, comoImg, amalfiImg, pugliaImg];
  const aspects = ["aspect-[16/10]", "aspect-[3/4]", "aspect-[3/4]", "aspect-[16/10]"];
  const portfolioGallery = p.stories.map((s, i) => ({ src: images[i], alt: s.couple }));

  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {p.h1a} <span className="display-italic text-terracotta">{p.h1b}</span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1300px] space-y-28 md:space-y-40">
          {p.stories.map((s, i) => {
            const [first, second] = s.couple.split(" & ");
            const slug = STORY_SLUGS[i];
            const href = `${langPrefix}/portfolio/${slug}`;
            return (
              <article key={s.couple} className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <div className={`relative ${aspects[i]} overflow-hidden`}>
                    <ZoomableImage
                      src={images[i]}
                      alt={s.couple}
                      width={1600}
                      height={1200}
                      gallery={portfolioGallery}
                      galleryIndex={i}
                      className="h-full"
                      imgClassName="transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className={`md:col-span-5 ${i % 2 ? "md:pr-12" : "md:pl-12"}`}>
                  <p className="eyebrow">{s.place} · {s.year}</p>
                  <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
                    <a href={href} className="hover:text-terracotta">
                      {first} <span className="display-italic text-terracotta">&</span> {second}
                    </a>
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                  <a href={href} className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta">
                    {p.readStory}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-background md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            {p.ctaA} <span className="display-italic text-[#f0c9a8]">{p.ctaB}</span>
          </h2>
          <LocaleLink to="/contact" className="mt-8 inline-block bg-[#f0c9a8] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-background">
            {p.ctaBtn}
          </LocaleLink>
        </div>
      </section>
    </>
  );
}
