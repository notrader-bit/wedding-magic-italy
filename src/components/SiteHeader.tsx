import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = menuPanelRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("aria-hidden") && el.offsetParent !== null);

    const focusables = getFocusable();
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      toggleBtnRef.current?.focus();
    };
  }, [open]);

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
            ref={toggleBtnRef}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm p-1.5 transition-colors hover:bg-ink/10"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-7 bg-ink" />
              <span className="block h-px w-7 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[49] bg-ink/30 backdrop-blur-lg transition-opacity duration-500 md:hidden motion-reduce:transition-none motion-reduce:backdrop-blur-none ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        ref={menuPanelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`relative z-50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden motion-reduce:transition-none ${
          open
            ? "max-h-[500px] opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="border-b border-border bg-background/95 shadow-xl backdrop-blur-md">
          <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-block border border-ink/70 px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-ink transition-colors hover:bg-ink hover:text-background"
              >
                {t.nav.planCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
