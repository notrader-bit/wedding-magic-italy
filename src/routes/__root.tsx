import { lazy, Suspense } from "react";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { Dict, Lang } from "@/i18n/dict-types";
import { loadDictionary } from "@/i18n/load-dictionary";
import { parseLangFromPath } from "@/i18n/parse-lang";


import appCss from "../styles.css?url";
import fontsCss from "../fonts.css?url";
import { getFontPreloadLinks } from "@/lib/font-preloads";
import { DEFAULT_OG_IMAGE, ogImageMetaTags } from "@/lib/og-images";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-ink">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off into the Italian countryside.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center border border-ink px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-ink px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const BackToTop = lazy(() => import("@/components/BackToTop").then((m) => ({ default: m.BackToTop })));
const WhatsAppButton = lazy(() =>
  import("@/components/WhatsAppButton").then((m) => ({ default: m.WhatsAppButton })),
);

export const Route = createRootRouteWithContext<{
  dictionary: Dict;
  lang: Lang;
}>()({
  beforeLoad: async ({ location }) => {
    const lang: Lang = location.pathname.includes("sitemap") ? "en" : parseLangFromPath(location.pathname);
    const dictionary = await loadDictionary(lang);
    return { dictionary, lang };
  },
  head: (ctx) => {
    const loaderLang = (ctx.loaderData as { lang?: Lang } | undefined)?.lang;
    const pathname = ctx.matches.at(-1)?.pathname ?? "/";
    const lang = loaderLang ?? parseLangFromPath(pathname);

    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wedding Magic Italy — Luxury Destination Weddings" },
      {
        name: "description",
        content:
          "Bespoke luxury destination weddings across Tuscany, Lake Como, Amalfi & Puglia. Cinematic planning, intimate atmosphere, unforgettable Italian experiences.",
      },
      { name: "author", content: "Wedding Magic Italy" },
      { property: "og:title", content: "Wedding Magic Italy — Luxury Destination Weddings" },
      {
        property: "og:description",
        content: "Bespoke luxury destination weddings across Tuscany, Lake Como, Amalfi & Puglia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Wedding Magic Italy" },
      { name: "twitter:card", content: "summary_large_image" },
      ...ogImageMetaTags(DEFAULT_OG_IMAGE),
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      ...getFontPreloadLinks(lang),
      { rel: "preload", href: appCss, as: "style" },
      { rel: "stylesheet", href: fontsCss },
      { rel: "stylesheet", href: appCss },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { dictionary, lang } = Route.useRouteContext();
  useRevealOnScroll();

  return (
    <LanguageProvider dictionary={dictionary} lang={lang}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <Suspense fallback={null}>
        <BackToTop />
        <WhatsAppButton />
      </Suspense>
    </LanguageProvider>
  );
}
