import { createFileRoute } from "@tanstack/react-router";
import { lazyRoutePage } from "@/lib/lazy-route-page";
import { buildLocalizedPageHead, resolveRouteLang } from "@/lib/page-meta-head";
import { PAGE_OG_IMAGES } from "@/lib/og-images";

const ContactPage = lazyRoutePage(() => import("@/pages/contact-page"));

export const Route = createFileRoute("/{-$lang}/contact")({
  head: ({ params }) =>
    buildLocalizedPageHead({
      metaKey: "contact",
      canonicalPath: "/contact",
      lang: resolveRouteLang(params.lang),
      ogImage: PAGE_OG_IMAGES.contact,
    }),
  component: ContactPage,
});
