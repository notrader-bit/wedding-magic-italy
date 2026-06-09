import type { Lang } from "@/i18n/dict-types";
import interLatin300 from "@fontsource/inter/files/inter-latin-300-normal.woff2?url";
import cormorantLatin300 from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff2?url";
import cormorantLatin300Italic from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-italic.woff2?url";
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

const LATIN_PRELOADS: PreloadLink[] = [
  fontPreload(interLatin300),
  fontPreload(cormorantLatin300),
  fontPreload(cormorantLatin300Italic),
];

const CYRILLIC_PRELOADS: PreloadLink[] = [
  fontPreload(interCyrillic300),
  fontPreload(interCyrillicExt300),
  fontPreload(cormorantCyrillic300),
  fontPreload(cormorantCyrillicExt300),
];

const CYRILLIC_LANGS = new Set<Lang>(["uk", "ru"]);

/** Preload the script subset needed for the active locale (unicode-range handles the rest). */
export function getFontPreloadLinks(lang: Lang): PreloadLink[] {
  if (CYRILLIC_LANGS.has(lang)) {
    return [...CYRILLIC_PRELOADS, fontPreload(interLatin300)];
  }
  return LATIN_PRELOADS;
}
