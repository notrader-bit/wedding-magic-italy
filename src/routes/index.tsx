import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tuscany.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";
import founderImg from "@/assets/founder.jpg";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
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

  return (
    <>
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Bride and groom at sunset on a Tuscan villa terrace" width={1920} height={1280} className="hero-blur h-full w-full object-cover scale-110 ken-burns" />
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
              <Link to="/contact" className="bg-[#f0c9a8] px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-ink shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform hover:translate-y-[-1px]">
                {h.cta1}
              </Link>
              <Link to="/portfolio" className="border border-white/80 bg-white/5 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm hover:bg-white/15">
                {h.cta2}
              </Link>
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
            <Link to="/portfolio" className="hidden border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta md:inline-block">
              {h.allWeddings}
            </Link>
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
            <Link to="/about" className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta">
              {h.meetStudio}
            </Link>
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

      <section className="bg-cream px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{h.limitedEyebrow}</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
            {h.limitedTitleA} <span className="display-italic text-terracotta">{h.limitedTitleB}</span> {h.limitedTitleC}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {h.limitedBody}
          </p>
          <Link to="/contact" className="mt-10 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta">
            {h.requestCta}
          </Link>
        </div>
      </section>
    </>
  );
}
