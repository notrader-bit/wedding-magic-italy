import type { Dict, Lang } from "./dict-types";

export async function loadDictionary(lang: Lang): Promise<Dict> {
  switch (lang) {
    case "en":
      return (await import("./locales/en")).dictionary;
    case "uk":
      return (await import("./locales/uk")).dictionary;
    case "ru":
      return (await import("./locales/ru")).dictionary;
    case "it":
      return (await import("./locales/it")).dictionary;
    case "es":
      return (await import("./locales/es")).dictionary;
    case "de":
      return (await import("./locales/de")).dictionary;
  }
}
