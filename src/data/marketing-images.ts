import type { ResponsiveImageSet } from "@/lib/responsive-image";
import comoFull from "@/assets/portfolio-como.jpg";
import amalfiFull from "@/assets/portfolio-amalfi.jpg";
import pugliaFull from "@/assets/portfolio-puglia.jpg";
import founderFull from "@/assets/founder.jpg";

import como400Avif from "@/assets/responsive/portfolio-como-400.avif";
import como640Avif from "@/assets/responsive/portfolio-como-640.avif";
import como800Avif from "@/assets/responsive/portfolio-como-800.avif";
import como1080Avif from "@/assets/responsive/portfolio-como-1080.avif";
import como400Webp from "@/assets/responsive/portfolio-como-400.webp";
import como640Webp from "@/assets/responsive/portfolio-como-640.webp";
import como800Webp from "@/assets/responsive/portfolio-como-800.webp";
import como1080Webp from "@/assets/responsive/portfolio-como-1080.webp";

import amalfi400Avif from "@/assets/responsive/portfolio-amalfi-400.avif";
import amalfi640Avif from "@/assets/responsive/portfolio-amalfi-640.avif";
import amalfi800Avif from "@/assets/responsive/portfolio-amalfi-800.avif";
import amalfi1080Avif from "@/assets/responsive/portfolio-amalfi-1080.avif";
import amalfi400Webp from "@/assets/responsive/portfolio-amalfi-400.webp";
import amalfi640Webp from "@/assets/responsive/portfolio-amalfi-640.webp";
import amalfi800Webp from "@/assets/responsive/portfolio-amalfi-800.webp";
import amalfi1080Webp from "@/assets/responsive/portfolio-amalfi-1080.webp";

import puglia400Avif from "@/assets/responsive/portfolio-puglia-400.avif";
import puglia640Avif from "@/assets/responsive/portfolio-puglia-640.avif";
import puglia800Avif from "@/assets/responsive/portfolio-puglia-800.avif";
import puglia1080Avif from "@/assets/responsive/portfolio-puglia-1080.avif";
import puglia400Webp from "@/assets/responsive/portfolio-puglia-400.webp";
import puglia640Webp from "@/assets/responsive/portfolio-puglia-640.webp";
import puglia800Webp from "@/assets/responsive/portfolio-puglia-800.webp";
import puglia1080Webp from "@/assets/responsive/portfolio-puglia-1080.webp";

import founder400Avif from "@/assets/responsive/founder-400.avif";
import founder640Avif from "@/assets/responsive/founder-640.avif";
import founder800Avif from "@/assets/responsive/founder-800.avif";
import founder1024Avif from "@/assets/responsive/founder-1024.avif";
import founder400Webp from "@/assets/responsive/founder-400.webp";
import founder640Webp from "@/assets/responsive/founder-640.webp";
import founder800Webp from "@/assets/responsive/founder-800.webp";
import founder1024Webp from "@/assets/responsive/founder-1024.webp";

/** ~3-column destination cards on home / similar grids. */
export const PORTFOLIO_CARD_SIZES = "(min-width: 1024px) 400px, (min-width: 768px) 33vw, 90vw";

/** Founder / half-width editorial portraits. */
export const FOUNDER_PORTRAIT_SIZES = "(min-width: 768px) min(50vw, 600px), 90vw";

const portfolioDims = { width: 1080, height: 1440 } as const;

export const PORTFOLIO_COMO_IMAGE: ResponsiveImageSet & { fullSrc: string } = {
  ...portfolioDims,
  sizes: PORTFOLIO_CARD_SIZES,
  avif: { 400: como400Avif, 640: como640Avif, 800: como800Avif, 1080: como1080Avif },
  webp: { 400: como400Webp, 640: como640Webp, 800: como800Webp, 1080: como1080Webp },
  fallback: { 1080: comoFull },
  defaultSrc: como640Webp,
  fullSrc: comoFull,
};

export const PORTFOLIO_AMALFI_IMAGE: ResponsiveImageSet & { fullSrc: string } = {
  ...portfolioDims,
  sizes: PORTFOLIO_CARD_SIZES,
  avif: { 400: amalfi400Avif, 640: amalfi640Avif, 800: amalfi800Avif, 1080: amalfi1080Avif },
  webp: { 400: amalfi400Webp, 640: amalfi640Webp, 800: amalfi800Webp, 1080: amalfi1080Webp },
  fallback: { 1080: amalfiFull },
  defaultSrc: amalfi640Webp,
  fullSrc: amalfiFull,
};

export const PORTFOLIO_PUGLIA_IMAGE: ResponsiveImageSet & { fullSrc: string } = {
  ...portfolioDims,
  sizes: PORTFOLIO_CARD_SIZES,
  avif: { 400: puglia400Avif, 640: puglia640Avif, 800: puglia800Avif, 1080: puglia1080Avif },
  webp: { 400: puglia400Webp, 640: puglia640Webp, 800: puglia800Webp, 1080: puglia1080Webp },
  fallback: { 1080: pugliaFull },
  defaultSrc: puglia640Webp,
  fullSrc: pugliaFull,
};

export const FOUNDER_PORTRAIT_IMAGE: ResponsiveImageSet & { fullSrc: string } = {
  width: 1024,
  height: 1280,
  sizes: FOUNDER_PORTRAIT_SIZES,
  avif: { 400: founder400Avif, 640: founder640Avif, 800: founder800Avif, 1024: founder1024Avif },
  webp: { 400: founder400Webp, 640: founder640Webp, 800: founder800Webp, 1024: founder1024Webp },
  fallback: { 1024: founderFull },
  defaultSrc: founder640Webp,
  fullSrc: founderFull,
};
