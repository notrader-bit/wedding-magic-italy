import { LocaleLink } from "@/components/LocaleLink";
import designImg from "@/assets/services-design.jpg";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export default function ServicesPage() {
  usePageMeta("services");
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{s.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {s.h1a}<br />{" "}<span className="display-italic text-terracotta">{s.h1b}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">{s.lede}</p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1200px] divide-y divide-border border-t border-border">
          {s.items.map((item) => (
            <div key={item.title} className="grid gap-8 py-14 md:grid-cols-[100px_1fr_1.2fr]">
              <p className="font-display text-3xl text-terracotta">{item.n}</p>
              <h3 className="font-display text-3xl text-ink md:text-4xl">{item.title}</h3>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                <ul className="mt-6 grid gap-2 text-sm">
                  {item.bullets.map((b) => (
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
            <p className="eyebrow">{s.investEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              {s.investTitleA} <span className="display-italic text-terracotta">{s.investTitleB}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.investBody}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.investNote}</p>
            <LocaleLink to="/contact" className="mt-10 inline-block bg-ink px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background hover:bg-terracotta">
              {s.investCta}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
