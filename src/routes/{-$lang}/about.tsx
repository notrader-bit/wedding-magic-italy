import { createFileRoute} from "@tanstack/react-router";
import { LocaleLink } from "@/components/LocaleLink";
import founderImg from "@/assets/founder.jpg";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";
import { buildPageHead, PAGE_OG_IMAGES } from "@/lib/og-images";

export const Route = createFileRoute("/{-$lang}/about")({
  head: () =>
    buildPageHead({
      title: "About — Wedding Magic Italy",
      description: "Meet the studio behind Wedding Magic Italy.",
      canonicalPath: "/about",
      ogImage: PAGE_OG_IMAGES.about,
    }),
  component: AboutPage,
});

function AboutPage() {
  usePageMeta("about");
  const { t } = useLanguage();
  const a = t.about;
  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{a.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {a.h1a}<br /> <span className="display-italic text-terracotta">{a.h1b}</span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={founderImg} alt={a.founderName} width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{a.founderEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{a.founderName}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{a.founderBio1}</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{a.founderBio2}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <p className="eyebrow">{a.philosophy}</p>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {[
              { n: "01", t: a.p1t, d: a.p1d },
              { n: "02", t: a.p2t, d: a.p2d },
              { n: "03", t: a.p3t, d: a.p3d },
            ].map((p) => (
              <div key={p.n}>
                <p className="font-display text-3xl text-terracotta">{p.n}</p>
                <h3 className="mt-4 font-display text-2xl text-ink">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ink md:text-5xl">
            {a.ctaA} <span className="display-italic text-terracotta">{a.ctaB}</span>
          </h2>
          <LocaleLink to="/contact" className="mt-8 inline-block border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-ink hover:text-background">
            {a.ctaBtn}
          </LocaleLink>
        </div>
      </section>
    </>
  );
}
