import { createFileRoute, Link } from "@tanstack/react-router";
import designImg from "@/assets/services-design.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Wedding Magic Italy" },
      {
        name: "description",
        content:
          "Full planning, destination weddings, elopements and creative direction across Italy.",
      },
      { property: "og:title", content: "Services — Wedding Magic Italy" },
      { property: "og:description", content: "Full planning, destination weddings & elopements in Italy." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Full Planning",
    n: "I.",
    desc: "Twelve to eighteen months of fully bespoke planning. Venue, design, production, guest logistics, on-the-day direction — every detail held in one pair of hands.",
    bullets: ["Venue sourcing across Italy", "Creative direction & design", "Vendor curation", "Multi-day events"],
  },
  {
    title: "Destination Wedding",
    n: "II.",
    desc: "You bring the vision and the guest list — we deliver Italy. Ideal for international couples planning entirely from abroad.",
    bullets: ["Concierge for couple & guests", "Travel & accommodation", "Legal documentation", "On-site coordination"],
  },
  {
    title: "Elopement & Intimate",
    n: "III.",
    desc: "Two to twenty guests, one breathtaking location. Cliffside ceremonies, private chapels, secret vineyards — quietly cinematic.",
    bullets: ["Symbolic & civil ceremonies", "Hidden locations", "Private chef dinners", "Photo & film"],
  },
  {
    title: "Creative Direction",
    n: "IV.",
    desc: "For couples with a planner who need an Italian eye. We art-direct the design language: palette, florals, stationery, lighting, mise-en-scène.",
    bullets: ["Mood & visual concept", "Florals & tablescape", "Stationery & signage", "Lighting design"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Four ways<br />we <span className="display-italic text-terracotta">design together.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every couple comes to us at a different point in their story. Choose a starting
            place; the path is always tailored.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1200px] divide-y divide-border border-t border-border">
          {services.map((s) => (
            <div key={s.title} className="grid gap-8 py-14 md:grid-cols-[100px_1fr_1.2fr]">
              <p className="font-display text-3xl text-terracotta">{s.n}</p>
              <h3 className="font-display text-3xl text-ink md:text-4xl">{s.title}</h3>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 grid gap-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-foreground">
                      <span className="h-px w-6 bg-terracotta" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/5]">
            <img src={designImg} alt="Wedding stationery flatlay" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Investment</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              Honest about <span className="display-italic text-terracotta">what it costs.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Full-service planning begins at <span className="text-ink">€18,000</span> in
              professional fees. Elopements from <span className="text-ink">€6,500</span>.
              Total wedding budgets typically range from €80,000 to €500,000+ depending on
              scale, season and venue.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Following your inquiry we send a detailed brochure with sample budgets,
              timelines and case studies — so you know exactly what you're saying yes to.
            </p>
            <Link to="/contact" className="mt-10 inline-block bg-ink px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta">
              Request the brochure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
