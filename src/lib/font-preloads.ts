import interLatinWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";
import cormorantLatinWoff2 from "@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-normal.woff2?url";
import cormorantLatinItalicWoff2 from "@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-italic.woff2?url";

export const FONT_PRELOAD_LINKS = [
  {
    rel: "preload" as const,
    href: interLatinWoff2,
    as: "font" as const,
    type: "font/woff2",
    crossOrigin: "anonymous" as const,
  },
  {
    rel: "preload" as const,
    href: cormorantLatinWoff2,
    as: "font" as const,
    type: "font/woff2",
    crossOrigin: "anonymous" as const,
  },
  {
    rel: "preload" as const,
    href: cormorantLatinItalicWoff2,
    as: "font" as const,
    type: "font/woff2",
    crossOrigin: "anonymous" as const,
  },
];
