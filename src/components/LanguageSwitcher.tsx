import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGS, LANG_LABELS, type Lang } from "@/i18n/translations";

export function LanguageSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const color = tone === "light" ? "text-white/90" : "text-ink";
  const border = tone === "light" ? "border-white/40" : "border-ink/30";

  return (
    <div ref={ref} className="relative">
      <button
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 border-b ${border} pb-0.5 text-[11px] uppercase tracking-[0.24em] ${color} hover:text-terracotta`}
      >
        {LANG_LABELS[lang]}
        <span aria-hidden className="text-[8px]">▾</span>
      </button>
      {open && (
        <ul className="absolute right-0 top-full z-50 mt-3 min-w-[80px] border border-border bg-background py-2 shadow-lg">
          {LANGS.map((l: Lang) => (
            <li key={l}>
              <button
                onClick={() => { setLang(l); setOpen(false); }}
                className={`block w-full px-4 py-2 text-left text-[11px] uppercase tracking-[0.24em] hover:bg-cream ${l === lang ? "text-terracotta" : "text-ink"}`}
              >
                {LANG_LABELS[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
