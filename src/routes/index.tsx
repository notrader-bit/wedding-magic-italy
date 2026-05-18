import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tuscany.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wedding Magic Italy — Luxury Destination Weddings in Italy" },
      {
        name: "description",
        content:
          "Cinematic, intimate destination weddings in Tuscany, Lake Como, Amalfi & Puglia. Crafted by Wedding Magic Italy.",
      },
      { property: "og:title", content: "Wedding Magic Italy — Luxury Destination Weddings" },
      {
        property: "og:description",
        content: "Cinematic, intimate destination weddings across Italy.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bride and groom at sunset on a Tuscan villa terrace"
            width={1920}
            height={1280}
            className="h-full w-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
          <div className="fade-up max-w-3xl">
            <p className="eyebrow text-[#f3e7d3]">Bespoke Destination Weddings · Italia</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-white md:text-7xl lg:text-8xl">
              Una storia d'amore <span className="display-italic text-[#f0c9a8]">scritta in Italia.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg">
              We design unhurried, cinematic weddings between cypress hills, lakeside villas
              and ancient stone arches — for couples who want nothing less than enchantment.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-[#f0c9a8] px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-ink transition-transform hover:translate-y-[-1px]"
              >
                Begin your story
              </Link>
              <Link
                to="/portfolio"
                className="border border-white/60 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-white hover:bg-white/10"
              >
                View weddings
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-white/70">
          Scroll
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow">Our Promise</p>
          <div>
            <h2 className="font-display text-3xl leading-[1.18] text-ink md:text-5xl">
              We don't plan weddings.<br />
              <span className="display-italic text-terracotta">We compose days you'll remember frame by frame.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From the first whisper of an idea to the last toast under the stars,
              every detail is chosen with intention — a private villa, a hand-pressed
              menu, a string quartet inside a centuries-old cloister. Quietly luxurious.
              Unmistakably yours.
            </p>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected Destinations</p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-6xl">
                Italy, <span className="display-italic">curated.</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta md:inline-block"
            >
              All weddings →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: comoImg, place: "Lake Como", note: "Villa estates · lakeside dinners" },
              { img: amalfiImg, place: "Amalfi Coast", note: "Cliffside ceremonies · lemon groves" },
              { img: pugliaImg, place: "Puglia", note: "Masserie · olive grove receptions" },
            ].map((d) => (
              <div key={d.place} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.place}
                    width={1080}
                    height={1440}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
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

      {/* FOUNDER PREVIEW */}
      <section className="bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={founderImg}
              alt="Founder portrait"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">A word from</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.15] text-ink md:text-5xl">
              "Italy isn't a backdrop. <span className="display-italic text-terracotta">It's a co-author."</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I've spent a decade weaving relationships with the country's most discreet
              villas, florists, chefs and artisans — the people who turn a wedding day
              into a story you can almost taste.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta"
            >
              Meet the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-ink px-6 py-28 text-background md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[#f0c9a8]">Kind Words</p>
          <blockquote className="mt-8 font-display text-3xl italic leading-[1.3] text-background md:text-5xl">
            "They turned three days in Puglia into the most beautiful chapter of our lives.
            Not one moment felt rushed. Not one detail felt borrowed."
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.32em] text-background/60">
            Sophie & Marcus · Masseria, 2024
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Reservations Limited</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
            We accept only <span className="display-italic text-terracotta">twelve weddings</span> a year.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Each one designed without compromise. Tell us about yours — we'll respond
            within 48 hours with a private consultation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta"
          >
            Request consultation
          </Link>
        </div>
      </section>
    </>
  );
}
