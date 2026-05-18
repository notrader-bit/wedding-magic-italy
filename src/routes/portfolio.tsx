import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tuscany.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Wedding Magic Italy" },
      { name: "description", content: "A selected portfolio of luxury weddings across Italy — Tuscany, Lake Como, Amalfi, Puglia." },
      { property: "og:title", content: "Portfolio — Wedding Magic Italy" },
      { property: "og:description", content: "Selected luxury weddings across Italy." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const stories = [
  {
    img: heroImg,
    place: "Val d'Orcia, Tuscany",
    couple: "Eleonora & Tomás",
    year: "2024",
    desc: "A three-day celebration inside a private villa overlooking cypress hills. Long-table dinners, candlelit cloister, sunset ceremony at the edge of the world.",
    aspect: "aspect-[16/10]",
  },
  {
    img: comoImg,
    place: "Lake Como",
    couple: "Sara & Andrew",
    year: "2024",
    desc: "Lakeside arrival by wooden boat, white roses & olive branches across an antique villa terrace, midnight gelato on the steps.",
    aspect: "aspect-[3/4]",
  },
  {
    img: amalfiImg,
    place: "Ravello, Amalfi Coast",
    couple: "Claudia & Henri",
    year: "2023",
    desc: "A bride walking through lemon groves at dawn. Just twenty guests, a stone chapel, and the Mediterranean below.",
    aspect: "aspect-[3/4]",
  },
  {
    img: pugliaImg,
    place: "Masseria, Puglia",
    couple: "Sophie & Marcus",
    year: "2024",
    desc: "Whitewashed walls, ancient olive grove, an entire masseria taken over for four days of slow Italian summer.",
    aspect: "aspect-[16/10]",
  },
];

function PortfolioPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">Selected Stories</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Weddings, <span className="display-italic text-terracotta">slowly remembered.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1300px] space-y-28 md:space-y-40">
          {stories.map((s, i) => (
            <article key={s.couple} className={`grid gap-10 md:grid-cols-12 md:items-center ${i % 2 ? "" : ""}`}>
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className={`relative ${s.aspect} overflow-hidden`}>
                  <img src={s.img} alt={s.couple} width={1600} height={1200} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:pr-12" : "md:pl-12"}`}>
                <p className="eyebrow">{s.place} · {s.year}</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
                  {s.couple.split(" & ")[0]} <span className="display-italic text-terracotta">&</span> {s.couple.split(" & ")[1]}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <button className="mt-8 border-b border-ink pb-1 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-terracotta">
                  Read the story →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-background md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Yours could be <span className="display-italic text-[#f0c9a8]">next.</span>
          </h2>
          <Link to="/contact" className="mt-8 inline-block bg-[#f0c9a8] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-background">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
