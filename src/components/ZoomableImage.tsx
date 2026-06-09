import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ZoomableImageLightbox = lazy(() =>
  import("@/components/ZoomableImageLightbox").then((m) => ({ default: m.ZoomableImageLightbox })),
);
import { srcSetFromMap, type ResponsiveImageSet } from "@/lib/responsive-image";

export type GalleryImage = { src: string; alt: string; lightboxSrc?: string };

type Props = {
  /** Full-size URL for lightbox (defaults to `src`). */
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  className?: string;
  imgClassName?: string;
  zoomLabel?: string;
  responsive?: ResponsiveImageSet;
  /** When set, lightbox allows prev/next through all images in the group. */
  gallery?: GalleryImage[];
  galleryIndex?: number;
};

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  className,
  imgClassName,
  zoomLabel = "View larger image",
  responsive,
  gallery,
  galleryIndex,
}: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: GalleryImage[] =
    gallery && gallery.length > 0 ? gallery : [{ src, alt, lightboxSrc: src }];

  const resolveStartIndex = useCallback(() => {
    if (galleryIndex !== undefined && galleryIndex >= 0 && galleryIndex < slides.length) {
      return galleryIndex;
    }
    const bySrc = slides.findIndex((item) => item.src === src);
    return bySrc >= 0 ? bySrc : 0;
  }, [galleryIndex, slides, src]);

  const openLightbox = () => {
    setActiveIndex(resolveStartIndex());
    setOpen(true);
  };

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!open || slides.length <= 1) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, slides.length, goPrev, goNext]);

  const imgWidth = responsive?.width ?? width;
  const imgHeight = responsive?.height ?? height;

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className={cn("group/zoom block w-full cursor-zoom-in text-left", className)}
        aria-label={zoomLabel}
      >
        {responsive ? (
          <picture>
            <source type="image/avif" sizes={responsive.sizes} srcSet={srcSetFromMap(responsive.avif)} />
            <source type="image/webp" sizes={responsive.sizes} srcSet={srcSetFromMap(responsive.webp)} />
            <img
              src={responsive.defaultSrc}
              srcSet={srcSetFromMap(responsive.webp)}
              sizes={responsive.sizes}
              alt={alt}
              width={imgWidth}
              height={imgHeight}
              loading={loading}
              decoding="async"
              className={cn("h-full w-full object-cover", imgClassName)}
            />
          </picture>
        ) : (
          <img
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            loading={loading}
            className={cn("h-full w-full object-cover", imgClassName)}
          />
        )}
      </button>

      {open ? (
        <Suspense fallback={null}>
          <ZoomableImageLightbox
            open={open}
            onOpenChange={setOpen}
            slides={slides}
            activeIndex={activeIndex}
            onPrev={goPrev}
            onNext={goNext}
          />
        </Suspense>
      ) : null}
    </>
  );
}
