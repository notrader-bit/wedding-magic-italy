import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/experience", label: t.nav.experience },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md hairline" : "bg-background/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link
          to="/"
          className="font-display text-xl tracking-[0.18em] text-ink md:text-[22px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          WEDDING MAGIC <span className="display-italic text-terracotta">Italy</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[12px] uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-terracotta"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="border border-ink/70 px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            {t.nav.planCta}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-7 bg-ink" />
              <span className="block h-px w-7 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.22em] text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
