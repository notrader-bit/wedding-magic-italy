import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Wedding Magic Italy" },
      { name: "description", content: "How we work — a transparent five-step process from first call to last dance." },
      { property: "og:title", content: "The Experience — Wedding Magic Italy" },
      { property: "og:description", content: "Our five-step planning experience." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const steps = [
  {
    n: "I.",
    t: "Discovery",
    when: "Week 0 — 2",
    d: "A private video call (or aperitivo in Florence). We listen for the things you don't yet have words for — the season, the texture, the people you want in the room.",
  },
  {
    n: "II.",
    t: "Concept & Venue",
    when: "Month 1 — 3",
    d: "We propose three curated destinations with private villa visits. A bespoke design concept is presented: palette, mood, florals, stationery, light.",
  },
  {
    n: "III.",
    t: "Design & Production",
    when: "Month 3 — 9",
    d: "Vendor curation, menu tastings, paper proofs, music sourcing. You receive a single editorial planning document — no spreadsheets, no chaos.",
  },
  {
    n: "IV.",
    t: "The Final Month",
    when: "Month 10 — 12",
    d: "Guest concierge opens. Welcome boxes are crafted, timelines finalised, every supplier rehearsed. You arrive in Italy with nothing on your mind but each other.",
  },
  {
    n: "V.",
    t: "The Day(s)",
    when: "Wedding week",
    d: "Our entire team on the ground. You wake up, walk down the aisle, dance under the stars. We disappear into the background, where good production belongs.",
  },
];

function ExperiencePage() {
  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">The Experience</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            From first call<br />to <span className="display-italic text-terracotta">last dance.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Luxury is not opulence — it is the absence of friction. Here is exactly how
            we'll spend the year together.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          {steps.map((s) => (
            <div key={s.n} className="grid gap-6 border-t border-border py-14 md:grid-cols-[120px_1fr_2fr] md:items-start">
              <p className="font-display text-4xl text-terracotta">{s.n}</p>
              <div>
                <h3 className="font-display text-3xl text-ink">{s.t}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.when}</p>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1100px] grid gap-12 md:grid-cols-3">
          {[
            { t: "Communication", d: "One dedicated planner. WhatsApp + email. Replies inside 24 hours, always." },
            { t: "Transparency", d: "Single shared budget tracker. No hidden mark-ups, ever." },
            { t: "Guest experience", d: "Welcome boxes, private transfers, custom itineraries — your guests feel hosted, not herded." },
          ].map((c) => (
            <div key={c.t}>
              <h3 className="font-display text-2xl text-ink">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ink md:text-5xl">
            Ready to <span className="display-italic text-terracotta">begin?</span>
          </h2>
          <Link to="/contact" className="mt-8 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
