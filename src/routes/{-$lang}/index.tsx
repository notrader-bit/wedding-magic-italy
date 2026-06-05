import { createFileRoute} from "@tanstack/react-router";
import { LocaleLink } from "@/components/LocaleLink";
import heroImg from "@/assets/hero/hero-1920.jpg";
import heroAvif640 from "@/assets/hero/hero-640.avif";
import heroAvif1024 from "@/assets/hero/hero-1024.avif";
import heroAvif1600 from "@/assets/hero/hero-1600.avif";
import heroAvif1920 from "@/assets/hero/hero-1920.avif";
import heroWebp640 from "@/assets/hero/hero-640.webp";
import heroWebp1024 from "@/assets/hero/hero-1024.webp";
import heroWebp1600 from "@/assets/hero/hero-1600.webp";
import heroWebp1920 from "@/assets/hero/hero-1920.webp";
import heroJpg640 from "@/assets/hero/hero-640.jpg";
import heroJpg1024 from "@/assets/hero/hero-1024.jpg";
import heroJpg1600 from "@/assets/hero/hero-1600.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";
import founderImg from "@/assets/founder.jpg";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/{-$lang}/")({
  head: () => ({
    meta: [
      { title: "Wedding Magic Italy — Luxury Destination Weddings in Italy" },
      { name: "description", content: "Cinematic, intimate destination weddings in Tuscany, Lake Como, Amalfi & Puglia. Crafted by Wedding Magic Italy." },
      { property: "og:title", content: "Wedding Magic Italy — Luxury Destination Weddings" },
      { property: "og:description", content: "Cinematic, intimate destination weddings across Italy." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  usePageMeta("home");
  const { t } = useLanguage();
  const h = t.home;
  const e = t.experience;
  const p = t.packages;
  const f = t.faq;


  return (
    <>
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/avif"
              sizes="100vw"
              srcSet={`${heroAvif640} 640w, ${heroAvif1024} 1024w, ${heroAvif1600} 1600w, ${heroAvif1920} 1920w`}
            />
            <source
              type="image/webp"
              sizes="100vw"
              srcSet={`${heroWebp640} 640w, ${heroWebp1024} 1024w, ${heroWebp1600} 1600w, ${heroWebp1920} 1920w`}
            />
            <img
              src={heroImg}
              srcSet={`${heroJpg640} 640w, ${heroJpg1024} 1024w, ${heroJpg1600} 1600w, ${heroImg} 1920w`}
              sizes="100vw"
              alt="Bride and groom at sunset on a Tuscan villa terrace"
              width={1920}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="hero-blur h-full w-full object-cover scale-110 ken-burns"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 md:from-black/60 md:via-black/35 md:to-black/80" />
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/70 to-transparent md:h-[60%] md:from-black/60" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
          <div className="fade-up max-w-3xl rounded-sm p-6 md:p-10">
            <p className="eyebrow text-[#f3e7d3]" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>{h.eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-white md:text-7xl lg:text-8xl" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.45)" }}>
              {h.h1a} <span className="display-italic text-[#f0c9a8]">{h.h1b}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/95 md:text-lg" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
              {h.lede}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <LocaleLink to="/contact" className="bg-[#f0c9a8] px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform hover:translate-y-[-1px]">
                {h.cta1}
              </LocaleLink>
              <LocaleLink to="/portfolio" className="border border-white/80 bg-white/5 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm hover:bg-white/15">
                {h.cta2}
              </LocaleLink>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/70">
          {h.scroll}
        </div>
      </section>

      <section className="bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow">{h.promiseEyebrow}</p>
          <div>
            <h2 className="font-display text-3xl leading-[1.18] text-ink md:text-5xl">
              {h.promiseH1a}<br />
              <span className="display-italic text-terracotta">{h.promiseH1b}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {h.promiseBody}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{h.destEyebrow}</p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-6xl">
                {h.destTitle} <span className="display-italic">{h.destItalic}</span>
              </h2>
            </div>
            <LocaleLink to="/portfolio" className="hidden border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta md:inline-block">
              {h.allWeddings}
            </LocaleLink>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: comoImg, place: h.como, note: h.comoNote },
              { img: amalfiImg, place: h.amalfi, note: h.amalfiNote },
              { img: pugliaImg, place: h.puglia, note: h.pugliaNote },
            ].map((d) => (
              <div key={d.place} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={d.img} alt={d.place} width={1080} height={1440} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl text-ink">{d.place}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={founderImg} alt="Founder portrait" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">{h.founderEyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.15] text-ink md:text-5xl">
              {h.founderQuoteA} <span className="display-italic text-terracotta">{h.founderQuoteB}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {h.founderBody}
            </p>
            <LocaleLink to="/about" className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta">
              {h.meetStudio}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-background md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[#f0c9a8]">{h.kindWords}</p>
          <blockquote className="mt-8 font-display text-3xl italic leading-[1.3] text-background md:text-5xl">
            {h.testimonial}
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.32em] text-background/60">
            {h.testimonialAttr}
          </p>
        </div>
      </section>

      {/* Experience — five-step process */}
      <section id="experience" className="bg-background px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <p className="eyebrow">{e.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.1] text-ink md:text-6xl">
              {e.h1a} <span className="display-italic text-terracotta">{e.h1b}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{e.lede}</p>
          </div>

          <div className="mt-16">
            {e.steps.map((s) => (
              <div key={s.n} className="grid gap-6 border-t border-border py-10 md:grid-cols-[100px_1fr_2fr] md:items-start md:py-12">
                <p className="font-display text-4xl text-terracotta">{s.n}</p>
                <div>
                  <h3 className="font-display text-2xl text-ink md:text-3xl">{s.t}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.when}</p>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {e.cards.map((c) => (
              <div key={c.t}>
                <h3 className="font-display text-2xl text-ink">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section id="packages" className="bg-cream px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1300px]">
          <div className="max-w-3xl">
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.1] text-ink md:text-6xl">
              {p.h1a} <span className="display-italic text-terracotta">{p.h1b}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.lede}</p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {p.items.map((item) => {
              const isPopular = item.tag === "popular";
              return (
                <article
                  key={item.name}
                  className={`relative flex flex-col border ${
                    isPopular ? "border-terracotta bg-background" : "border-border bg-background"
                  } p-10 md:p-12`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-10 bg-terracotta px-4 py-1 text-[10px] uppercase tracking-[0.28em] text-background">
                      {p.popular}
                    </span>
                  )}
                  <p className="font-display text-3xl text-terracotta">{item.n}</p>
                  <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">{item.name}</h3>
                  <div className="mt-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{p.startingFrom}</p>
                    <p className="mt-2 font-display text-5xl text-ink">{item.price}</p>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{item.intro}</p>

                  <div className="mt-8 border-t border-ink/10 pt-6">
                    <p className="eyebrow">{p.includesH}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground">
                      {item.includes.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-[10px] inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-terracotta" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-ink/10 pt-6">
                    <p className="eyebrow">{p.idealH}</p>
                    <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">{item.ideal}</p>
                  </div>

                  <LocaleLink
                    to="/contact"
                    className={`mt-10 inline-block w-full text-center px-7 py-4 text-[11px] uppercase tracking-[0.28em] transition-colors ${
                      isPopular
                        ? "bg-terracotta text-background hover:bg-ink"
                        : "border border-ink text-ink hover:bg-ink hover:text-background"
                    }`}
                  >
                    {p.ctaBtn}
                  </LocaleLink>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">{p.noteH}</p>
            </div>
            <div className="md:col-span-8">
              <p className="font-display text-xl leading-[1.4] text-ink md:text-2xl">{p.noteBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-28 md:px-12 md:py-36">

        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{h.limitedEyebrow}</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
            {h.limitedTitleA} <span className="display-italic text-terracotta">{h.limitedTitleB}</span> {h.limitedTitleC}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {h.limitedBody}
          </p>
          <LocaleLink to="/contact" className="mt-10 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta">
            {h.requestCta}
          </LocaleLink>
        </div>
      </section>
    </>
  );
}
