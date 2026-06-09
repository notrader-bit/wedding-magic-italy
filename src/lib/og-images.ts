import heroOg from "@/assets/hero/hero-1920.jpg";
import heroTuscany from "@/assets/hero-tuscany.jpg";
import founderImg from "@/assets/founder.jpg";
import servicesDesign from "@/assets/services-design.jpg";
import portfolioComo from "@/assets/portfolio-como.jpg";
import portfolioAmalfi from "@/assets/portfolio-amalfi.jpg";
import portfolioPuglia from "@/assets/portfolio-puglia.jpg";
import type { Dict } from "@/i18n/translations";

export const DEFAULT_OG_IMAGE = heroOg;

/** Per-page Open Graph images (unique where possible). */
export const PAGE_OG_IMAGES: Record<keyof Dict["meta"], string> = {
  home: heroOg,
  about: founderImg,
  services: servicesDesign,
  portfolio: portfolioComo,
  packages: heroTuscany,
  experience: portfolioAmalfi,
  contact: founderImg,
  blog: portfolioPuglia,
};

export function ogImageMetaTags(imageUrl: string) {
  return [
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "800" },
    { name: "twitter:image", content: imageUrl },
  ];
}

export function buildPageHead(opts: {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: string;
}) {
  const image = opts.ogImage ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: opts.canonicalPath },
      { property: "og:type", content: opts.ogType ?? "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...ogImageMetaTags(image),
    ],
    links: [{ rel: "canonical", href: opts.canonicalPath }],
  };
}
