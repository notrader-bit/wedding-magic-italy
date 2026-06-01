import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/{-$lang}/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Wedding Magic Italy" },
      { name: "description", content: "How we work — a transparent five-step process." },
      { property: "og:title", content: "The Experience — Wedding Magic Italy" },
      { property: "og:description", content: "Our five-step planning experience." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  usePageMeta("experience");
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{e.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {e.h1a}<br />{" "}<span className="display-italic text-terracotta">{e.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{e.lede}</p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          {e.steps.map((s) => (
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
          {e.cards.map((c) => (
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
            {e.ctaA} <span className="display-italic text-terracotta">{e.ctaB}</span>
          </h2>
          <Link to="/contact" className="mt-8 inline-block bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta">
            {e.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
