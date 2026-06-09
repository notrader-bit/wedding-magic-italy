import { DEFAULT_LANG } from "@/i18n/LanguageProvider";
import { LANG_HTML, LANGS, TRANSLATIONS, type Dict, type Lang } from "@/i18n/translations";
import { PAGE_OG_IMAGES, ogImageMetaTags } from "@/lib/og-images";
import { absoluteUrl } from "@/lib/site-url";

export function resolveRouteLang(langParam: string | undefined): Lang {
  if (langParam && (LANGS as readonly string[]).includes(langParam)) {
    return langParam as Lang;
  }
  return DEFAULT_LANG;
}

function localizedPath(canonicalPath: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return canonicalPath;
  if (canonicalPath === "/") return `/${lang}`;
  return `/${lang}${canonicalPath}`;
}

export function buildLocalizedPageHead(opts: {
  metaKey: keyof Dict["meta"];
  canonicalPath: string;
  lang?: Lang;
  ogImage?: string;
  ogType?: string;
  extraLinks?: { rel: string; href: string; as?: string; type?: string; imageSrcSet?: string; imageSizes?: string }[];
}) {
  const lang = opts.lang ?? DEFAULT_LANG;
  const { title, description } = TRANSLATIONS[lang].meta[opts.metaKey];
  const image = opts.ogImage ?? PAGE_OG_IMAGES[opts.metaKey];
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const canonical = absoluteUrl(localizedPath(opts.canonicalPath, lang));

  const links: {
    rel: string;
    href: string;
    hrefLang?: string;
    as?: string;
    type?: string;
    imageSrcSet?: string;
    imageSizes?: string;
  }[] = [{ rel: "canonical", href: canonical }];

  LANGS.forEach((l) => {
    links.push({
      rel: "alternate",
      href: absoluteUrl(localizedPath(opts.canonicalPath, l)),
      hrefLang: LANG_HTML[l],
    });
  });
  links.push({
    rel: "alternate",
    href: absoluteUrl(localizedPath(opts.canonicalPath, DEFAULT_LANG)),
    hrefLang: "x-default",
  });

  if (opts.extraLinks?.length) {
    links.push(...opts.extraLinks);
  }

  return headFromMeta({ title, description, canonical, lang, imageUrl, ogType: opts.ogType, links });
}

export function buildSlugPageHead(opts: {
  title: string;
  description: string;
  canonicalPath: string;
  lang?: Lang;
  ogImage?: string;
  ogType?: string;
}) {
  const lang = opts.lang ?? DEFAULT_LANG;
  const image = opts.ogImage;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : absoluteUrl(PAGE_OG_IMAGES.home);
  const canonical = absoluteUrl(localizedPath(opts.canonicalPath, lang));

  const links: {
    rel: string;
    href: string;
    hrefLang?: string;
  }[] = [{ rel: "canonical", href: canonical }];

  LANGS.forEach((l) => {
    links.push({
      rel: "alternate",
      href: absoluteUrl(localizedPath(opts.canonicalPath, l)),
      hrefLang: LANG_HTML[l],
    });
  });
  links.push({
    rel: "alternate",
    href: absoluteUrl(localizedPath(opts.canonicalPath, DEFAULT_LANG)),
    hrefLang: "x-default",
  });

  return headFromMeta({
    title: opts.title,
    description: opts.description,
    canonical,
    lang,
    imageUrl,
    ogType: opts.ogType,
    links,
  });
}

function headFromMeta(opts: {
  title: string;
  description: string;
  canonical: string;
  lang: Lang;
  imageUrl: string;
  ogType?: string;
  links: {
    rel: string;
    href: string;
    hrefLang?: string;
    as?: string;
    type?: string;
    imageSrcSet?: string;
    imageSizes?: string;
  }[];
}) {
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: opts.canonical },
      { property: "og:locale", content: LANG_HTML[opts.lang] },
      { property: "og:type", content: opts.ogType ?? "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...ogImageMetaTags(opts.imageUrl),
    ],
    links: opts.links,
  };
}
