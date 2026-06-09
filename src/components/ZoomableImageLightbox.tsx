import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GalleryImage } from "@/components/ZoomableImage";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  slides: GalleryImage[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

export function ZoomableImageLightbox({
  open,
  onOpenChange,
  slides,
  activeIndex,
  onPrev,
  onNext,
}: Props) {
  const current = slides[activeIndex] ?? slides[0];
  const lightboxSrc = current.lightboxSrc ?? current.src;
  const hasMultiple = slides.length > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
          if (delta > 0) onPrev();
          else onNext();
        }}
      >
        <div className="relative flex items-center justify-center">
          {hasMultiple && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:left-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          <img
            key={lightboxSrc}
            src={lightboxSrc}
            alt={current.alt}
            className="mx-auto max-h-[88vh] w-full object-contain px-10 sm:px-14"
          />

          {hasMultiple && (
            <button
              type="button"
              onClick={onNext}
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
  );
}
