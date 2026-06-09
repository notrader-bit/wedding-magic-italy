export type ResponsiveWidthMap = Record<number, string>;

export type ResponsiveImageSet = {
  /** Intrinsic width of the largest variant (for width/height attrs). */
  width: number;
  height: number;
  sizes: string;
  avif: ResponsiveWidthMap;
  webp: ResponsiveWidthMap;
  /** JPEG/PNG fallback chain for <img> and lightbox. */
  fallback: ResponsiveWidthMap;
  /** Default src (typically mid-size JPG from originals). */
  defaultSrc: string;
};

export function srcSetFromMap(map: ResponsiveWidthMap): string {
  return Object.entries(map)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([w, url]) => `${url} ${w}w`)
    .join(", ");
}

export function largestSrc(map: ResponsiveWidthMap, fallback: string): string {
  const entries = Object.entries(map).sort(([a], [b]) => Number(b) - Number(a));
  return entries[0]?.[1] ?? fallback;
}
