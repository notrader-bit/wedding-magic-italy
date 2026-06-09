import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string };

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  className?: string;
  imgClassName?: string;
  zoomLabel?: string;
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
  gallery,
  galleryIndex,
}: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: GalleryImage[] =
    gallery && gallery.length > 0 ? gallery : [{ src, alt }];

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

  const current = slides[activeIndex] ?? slides[0];
  const hasMultiple = slides.length > 1;

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className={cn("group/zoom block w-full cursor-zoom-in text-left", className)}
        aria-label={zoomLabel}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[96vh] max-w-[min(96vw,1400px)] border-none bg-black/95 p-2 shadow-2xl sm:p-4"
          onTouchStart={(e) => {
            const touch = e.changedTouches[0];
            (e.currentTarget as HTMLElement).dataset.touchX = String(touch.clientX);
          }}
          onTouchEnd={(e) => {
            if (!hasMultiple) return;
            const startX = Number((e.currentTarget as HTMLElement).dataset.touchX);
            const endX = e.changedTouches[0].clientX;
            const delta = endX - startX;
            if (Math.abs(delta) < 48) return;
            if (delta > 0) goPrev();
            else goNext();
          }}
        >
          <div className="relative flex items-center justify-center">
            {hasMultiple && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:left-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="mx-auto max-h-[88vh] w-full object-contain px-10 sm:px-14"
            />

            {hasMultiple && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 z-10 flex h-12 w-12 items-center justify-center text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-2"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}
          </div>

          {hasMultiple && (
            <p className="mt-2 text-center text-xs uppercase tracking-[0.28em] text-white/60">
              {activeIndex + 1} / {slides.length}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
