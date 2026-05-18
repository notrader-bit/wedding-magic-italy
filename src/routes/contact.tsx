import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wedding Magic Italy" },
      { name: "description", content: "Begin your Italian wedding. Tell us about your day and we'll reply within 48 hours." },
      { property: "og:title", content: "Contact — Wedding Magic Italy" },
      { property: "og:description", content: "Begin your Italian wedding." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 pb-12 pt-40 md:px-12 md:pb-16 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">Inquiries</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Tell us about<br /><span className="display-italic text-terracotta">your day.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            We respond personally within 48 hours with a brochure and the first available
            consultation slot. No automated replies — only Giulia or Sofia at the other end.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8"
          >
            {sent ? (
              <div className="border border-terracotta bg-cream p-10 text-center">
                <p className="eyebrow">Grazie mille</p>
                <h2 className="mt-3 font-display text-3xl text-ink">Your message is on its way.</h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  We'll reply within 48 hours. In the meantime, pour yourself an espresso —
                  the best stories begin slowly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Partner's name" name="partner" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="WhatsApp / Phone" name="phone" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Estimated date" name="date" placeholder="e.g. June 2026" />
                  <Field label="Guest count" name="guests" placeholder="e.g. 60" />
                </div>
                <Field label="Dream location in Italy" name="location" placeholder="Tuscany, Como, Amalfi, Puglia…" />
                <div>
                  <label className="eyebrow block">Tell us your vision</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-3 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-terracotta"
                    placeholder="The atmosphere, the season, the people you want around you…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-terracotta"
                >
                  Send inquiry
                </button>
              </>
            )}
          </form>

          {/* Aside */}
          <aside className="space-y-10 md:border-l md:border-border md:pl-12">
            <div>
              <p className="eyebrow">Direct</p>
              <p className="mt-3 font-display text-2xl text-ink">hello@weddingmagicitaly.com</p>
              <p className="mt-2 text-sm text-muted-foreground">Replies within 48 hours, Mon–Fri.</p>
            </div>
            <div>
              <p className="eyebrow">By Phone</p>
              <p className="mt-3 font-display text-2xl text-ink">+39 055 000 0000</p>
              <p className="mt-2 text-sm text-muted-foreground">WhatsApp preferred for international couples.</p>
            </div>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                Via dei Servi 12<br />50122 Firenze, Italia
              </p>
              <p className="mt-2 text-sm text-muted-foreground">By appointment only.</p>
            </div>
            <div>
              <p className="eyebrow">Follow</p>
              <div className="mt-3 flex gap-5 text-sm">
                <a href="#" className="hover:text-terracotta">Instagram</a>
                <a href="#" className="hover:text-terracotta">Pinterest</a>
                <a href="#" className="hover:text-terracotta">Vimeo</a>
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
