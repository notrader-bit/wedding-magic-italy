import { LANGS, type Lang } from "./dict-types";

const DEFAULT_LANG: Lang = "en";

export function parseLangFromPath(pathname: string): Lang {
  const m = pathname.match(/^\/([a-z]{2})(\/|$)/i);
  if (m && (LANGS as readonly string[]).includes(m[1].toLowerCase())) {
    return m[1].toLowerCase() as Lang;
  }
  return DEFAULT_LANG;
}
