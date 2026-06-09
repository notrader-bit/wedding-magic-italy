import { createContext, useContext, useEffect, useMemo } from "react";
import { useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import { PAGE_OG_IMAGES } from "@/lib/og-images";
import { absoluteUrl } from "@/lib/site-url";
import { LANGS, LANG_HTML, TRANSLATIONS, type Dict, type Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

export const DEFAULT_LANG: Lang = "en";

function isLang(v: string | null | undefined): v is Lang {
  return !!v && (LANGS as readonly string[]).includes(v);
}

/** Strip a leading "/xx" lang segment from a pathname, return the rest. */
function stripLangFromPath(pathname: string): string {
  const m = pathname.match(/^\/([a-z]{2})(\/.*)?$/i);
  if (m && isLang(m[1].toLowerCase())) {
    return m[2] || "/";
  }
  return pathname || "/";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const params = useParams({ strict: false }) as { lang?: string };
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const lang: Lang = isLang(params.lang) ? params.lang : DEFAULT_LANG;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_HTML[lang];
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    const rest = stripLangFromPath(pathname);
    const nextPath = l === DEFAULT_LANG ? rest : `/${l}${rest === "/" ? "" : rest}`;
    navigate({ to: nextPath, replace: false });
  };

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang, pathname]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

function buildLangUrl(path: string, l: Lang): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const rest = stripLangFromPath(path);
  const localized = l === DEFAULT_LANG ? rest : `/${l}${rest === "/" ? "" : rest}`;
  return origin ? `${origin}${localized}` : localized;
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

    upsertMeta('meta[property="og:url"]', { property: "og:url", content: buildLangUrl(path, lang) });

    const ogImage = PAGE_OG_IMAGES[key];
    const ogImageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImageUrl });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImageUrl });
  }, [t, key, lang]);
}
