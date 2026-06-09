import { srcSetFromMap, type ResponsiveImageSet } from "@/lib/responsive-image";
import { cn } from "@/lib/utils";

type Props = {
  image: ResponsiveImageSet;
  alt: string;
  loading?: "lazy" | "eager";
  className?: string;
  imgClassName?: string;
};

/** Responsive AVIF/WebP display without lightbox. */
export function ResponsivePhoto({ image, alt, loading = "lazy", className, imgClassName }: Props) {
  return (
    <picture className={cn("block h-full w-full", className)}>
      <source type="image/avif" sizes={image.sizes} srcSet={srcSetFromMap(image.avif)} />
      <source type="image/webp" sizes={image.sizes} srcSet={srcSetFromMap(image.webp)} />
      <img
        src={image.defaultSrc}
        srcSet={srcSetFromMap(image.webp)}
        sizes={image.sizes}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={loading}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </picture>
  );
}
