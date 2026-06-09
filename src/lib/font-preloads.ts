import type { Lang } from "@/i18n/dict-types";
import interLatin300 from "@fontsource/inter/files/inter-latin-300-normal.woff2?url";
import cormorantLatin300 from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff2?url";
import interCyrillic300 from "@fontsource/inter/files/inter-cyrillic-300-normal.woff2?url";
import interCyrillicExt300 from "@fontsource/inter/files/inter-cyrillic-ext-300-normal.woff2?url";
import cormorantCyrillic300 from "@fontsource/cormorant-garamond/files/cormorant-garamond-cyrillic-300-normal.woff2?url";
import cormorantCyrillicExt300 from "@fontsource/cormorant-garamond/files/cormorant-garamond-cyrillic-ext-300-normal.woff2?url";

type PreloadLink = {
  rel: "preload";
  href: string;
  as: "font";
  type: "font/woff2";
  crossOrigin: "anonymous";
};

function fontPreload(href: string): PreloadLink {
  return { rel: "preload", href, as: "font", type: "font/woff2", crossOrigin: "anonymous" };
}

const CYRILLIC_LANGS = new Set<Lang>(["uk", "ru"]);

/**
 * Only preload primary body + display faces for the active script.
 * Other weights/styles load on demand via unicode-range in the main CSS.
 */
export function getFontPreloadLinks(lang: Lang): PreloadLink[] {
  if (CYRILLIC_LANGS.has(lang)) {
    return lang === "uk"
      ? [fontPreload(interCyrillicExt300), fontPreload(cormorantCyrillicExt300)]
      : [fontPreload(interCyrillic300), fontPreload(cormorantCyrillic300)];
  }
  return [fontPreload(interLatin300), fontPreload(cormorantLatin300)];
}
