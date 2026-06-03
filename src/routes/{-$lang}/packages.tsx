import { createFileRoute } from "@tanstack/react-router";
import { LocaleLink } from "@/components/LocaleLink";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/{-$lang}/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Wedding Magic Italy" },
      { name: "description", content: "Three transparent ways to work with us — full planning, partial planning, and elopements in Italy." },
      { property: "og:title", content: "Packages & Pricing — Wedding Magic Italy" },
      { property: "og:description", content: "Honest starting prices for every couple — full planning, partial planning, elopements." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  usePageMeta("packages");
  const { t } = useLanguage();
  const p = t.packages;

  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {p.h1a}{" "}<span className="display-italic text-terracotta">{p.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{p.lede}</p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-3">
          {p.items.map((item) => {
            const isPopular = item.tag === "popular";
            return (
              <article
                key={item.name}
                className={`relative flex flex-col border ${
                  isPopular ? "border-terracotta bg-cream" : "border-border bg-background"
                } p-10 md:p-12`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-10 bg-terracotta px-4 py-1 text-[10px] uppercase tracking-[0.28em] text-background">
                    {p.popular}
                  </span>
                )}
                <p className="font-display text-3xl text-terracotta">{item.n}</p>
                <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{item.name}</h2>
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {p.startingFrom}
                  </p>
                  <p className="mt-2 font-display text-5xl text-ink">{item.price}</p>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {item.intro}
                </p>

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
                  <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
                    {item.ideal}
                  </p>
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
      </section>

      {/* Custom note */}
      <section className="bg-cream px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">{p.noteH}</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-2xl leading-[1.35] text-ink md:text-3xl">
              {p.noteBody}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 py-28 text-background md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            {p.ctaA} <span className="display-italic text-[#f0c9a8]">{p.ctaB}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/80">
            {p.ctaBody}
          </p>
          <LocaleLink
            to="/contact"
            className="mt-10 inline-block bg-[#f0c9a8] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-background"
          >
            {p.ctaBtn}
          </LocaleLink>
        </div>
      </section>
    </>
  );
}
