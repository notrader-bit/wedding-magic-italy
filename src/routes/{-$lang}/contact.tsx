import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage, usePageMeta } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/{-$lang}/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wedding Magic Italy" },
      { name: "description", content: "Begin your Italian wedding. Tell us about your day." },
      { property: "og:title", content: "Contact — Wedding Magic Italy" },
      { property: "og:description", content: "Begin your Italian wedding." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  usePageMeta("contact");
  const { t } = useLanguage();
  const c = t.contact;
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {c.h1a}<br /><span className="display-italic text-terracotta">{c.h1b}</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">{c.lede}</p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-[1.4fr_1fr]">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
            {sent ? (
              <div className="border border-terracotta bg-cream p-10 text-center">
                <p className="eyebrow">{c.sent}</p>
                <h2 className="mt-3 font-display text-3xl text-ink">{c.sentTitle}</h2>
                <p className="mt-4 text-sm text-muted-foreground">{c.sentBody}</p>
              </div>
            ) : (
              <>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label={c.yourName} name="name" required />
                  <Field label={c.partnerName} name="partner" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label={c.email} name="email" type="email" required />
                  <Field label={c.phone} name="phone" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label={c.estDate} name="date" placeholder={c.estDatePh} />
                  <Field label={c.guestCount} name="guests" placeholder={c.guestPh} />
                </div>
                <Field label={c.location} name="location" placeholder={c.locationPh} />
                <div>
                  <label className="eyebrow block">{c.vision}</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-terracotta"
                    placeholder={c.visionPh}
                  />
                </div>
                <button type="submit" className="mt-4 bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-terracotta">
                  {c.send}
                </button>
              </>
            )}
          </form>

          <aside className="space-y-10 md:border-l md:border-border md:pl-12">
            <div>
              <p className="eyebrow">{c.direct}</p>
              <p className="mt-3 font-display text-2xl text-ink">Italianweddingmagic@gmail.com</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.replyNote}</p>
            </div>
            <div>
              <p className="eyebrow">{c.byPhone}</p>
              <p className="mt-3 font-display text-2xl text-ink">+393275628698</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.whatsappNote}</p>
            </div>
            <div>
              <p className="eyebrow">{c.studio}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                Via dei Servi 12<br />50122 Firenze, Italia
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{c.studioBy}</p>
            </div>
            <div>
              <p className="eyebrow">{c.follow}</p>
              <div className="mt-3 flex gap-5 text-sm">
                <a href="https://www.instagram.com/italian.wedding.magic" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100093991688862" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Facebook</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}{required && <span className="text-terracotta"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-terracotta"
      />
    </div>
  );
}
