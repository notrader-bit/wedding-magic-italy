import heroAvif640 from "@/assets/hero/hero-640.avif";
import heroAvif1024 from "@/assets/hero/hero-1024.avif";
import heroAvif1600 from "@/assets/hero/hero-1600.avif";
import heroAvif1920 from "@/assets/hero/hero-1920.avif";

/** Preload hints for the home hero LCP image (mobile-first AVIF). */
export const HOME_HERO_LCP_PRELOAD_LINKS = [
  {
    rel: "preload" as const,
    as: "image" as const,
    href: heroAvif640,
    type: "image/avif",
    imageSrcSet: `${heroAvif640} 640w, ${heroAvif1024} 1024w, ${heroAvif1600} 1600w, ${heroAvif1920} 1920w`,
    imageSizes: "100vw",
  },
];
