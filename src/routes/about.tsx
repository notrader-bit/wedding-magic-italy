import { createFileRoute, Link } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Wedding Magic Italy" },
      {
        name: "description",
        content:
          "Meet the studio behind Wedding Magic Italy — a decade of crafting intimate, cinematic Italian weddings.",
      },
      { property: "og:title", content: "About — Wedding Magic Italy" },
      { property: "og:description", content: "Meet the studio behind Wedding Magic Italy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">The Studio</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            A small studio<br /> with a <span className="display-italic text-terracotta">long memory</span> of Italy.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={founderImg} alt="Founder" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Founder · Creative Director</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Giulia Moretti</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Born in Firenze, raised between Como and Lecce — Italy is not a portfolio for me, it is
              a private map. After ten years inside the country's most exclusive villas and venues,
              I founded Wedding Magic Italy to design weddings the way I would design my own:
              slowly, honestly, with rooms for stillness.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We are a tiny team on purpose. Two planners, one designer, one production lead —
              so every couple receives the same hands from first email to last dance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <p className="eyebrow">Philosophy</p>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Slow design",
                d: "We move at the pace of meaning. No template, no formula — only what fits this couple, this place, this season.",
              },
              {
                n: "02",
                t: "Local roots",
                d: "Our vendors are family. The same nonna who pressed our pasta last summer can prepare a tasting menu for forty guests in October.",
              },
              {
                n: "03",
                t: "Intimate scale",
                d: "Twelve weddings a year, never more. Your day deserves our full attention from start to finish.",
              },
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
            Shall we begin <span className="display-italic text-terracotta">with a conversation?</span>
          </h2>
          <Link to="/contact" className="mt-8 inline-block border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-ink hover:text-background">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
