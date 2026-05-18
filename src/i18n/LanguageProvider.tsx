import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGS, LANG_HTML, TRANSLATIONS, type Dict, type Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "wmi-lang";
const DEFAULT_LANG: Lang = "en";

function isLang(v: string | null | undefined): v is Lang {
  return !!v && (LANGS as readonly string[]).includes(v);
}

function detectInitial(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const url = new URL(window.location.href);
  const q = url.searchParams.get("lang");
  if (isLang(q)) return q;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) return stored;
  const nav = window.navigator.language.slice(0, 2).toLowerCase();
  return isLang(nav) ? nav : DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_HTML[lang];
    }
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const current = url.searchParams.get("lang");
      const next = lang === DEFAULT_LANG ? null : lang;
      if (current !== next) {
        if (next) url.searchParams.set("lang", next);
        else url.searchParams.delete("lang");
        window.history.replaceState({}, "", url.toString());
      }
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

/** Build an absolute URL for a given path + lang (default lang has no ?lang param). */
function buildLangUrl(path: string, l: Lang): string {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const url = new URL(path, origin || "http://localhost");
  if (l !== DEFAULT_LANG) url.searchParams.set("lang", l);
  else url.searchParams.delete("lang");
  return origin ? url.toString() : `${path}${l !== DEFAULT_LANG ? `?lang=${l}` : ""}`;
}

/**
 * Apply per-page <title>, <meta description>, canonical and hreflang
 * alternates based on the current language and route.
 */
export function usePageMeta(key: keyof Dict["meta"]) {
  const { t, lang } = useLanguage();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const { title, description } = t.meta[key];
    document.title = title;

    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => {
          if (k !== "content") el!.setAttribute(k, v);
        });
        document.head.appendChild(el);
      }
      if (attrs.content !== undefined) el.setAttribute("content", attrs.content);
    };

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: LANG_HTML[lang] });

    const path = window.location.pathname;

    // Remove previously injected hreflang/canonical we manage
    document.head
      .querySelectorAll('link[data-i18n="1"]')
      .forEach((n) => n.parentNode?.removeChild(n));

    const addLink = (rel: string, href: string, hreflang?: string) => {
      const link = document.createElement("link");
      link.setAttribute("rel", rel);
      link.setAttribute("href", href);
      if (hreflang) link.setAttribute("hreflang", hreflang);
      link.setAttribute("data-i18n", "1");
      document.head.appendChild(link);
    };

    addLink("canonical", buildLangUrl(path, lang));
    LANGS.forEach((l) => addLink("alternate", buildLangUrl(path, l), LANG_HTML[l]));
    addLink("alternate", buildLangUrl(path, DEFAULT_LANG), "x-default");

    // og:url should match canonical
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: buildLangUrl(path, lang) });
  }, [t, key, lang]);
}
