import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGS, LANG_HTML, TRANSLATIONS, type Dict, type Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "wmi-lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && (LANGS as readonly string[]).includes(stored)) return stored;
  const nav = window.navigator.language.slice(0, 2).toLowerCase();
  const map: Record<string, Lang> = { uk: "uk", ru: "ru", it: "it", es: "es", de: "de", en: "en" };
  return map[nav] ?? "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_HTML[lang];
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

/** Apply per-page <title> and <meta description> based on current language. */
export function usePageMeta(key: keyof Dict["meta"]) {
  const { t, lang } = useLanguage();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const { title, description } = t.meta[key];
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [name, val] = selector.replace("meta[", "").replace("]", "").split("=");
        el.setAttribute(name, val.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
  }, [t, key, lang]);
}
