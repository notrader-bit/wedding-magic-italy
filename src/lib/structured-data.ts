import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import { DEFAULT_OG_IMAGE } from "@/lib/og-images";

const BUSINESS = {
  name: "Wedding Magic Italy",
  email: "Italianweddingmagic@gmail.com",
  phone: "+393275628698",
  street: "Via dei Servi 12",
  city: "Firenze",
  postalCode: "50122",
  region: "FI",
  country: "IT",
  instagram: "https://www.instagram.com/italian.wedding.magic",
  facebook: "https://www.facebook.com/profile.php?id=100093991688862",
};

export function contactPageStructuredData(langPath: string) {
  const url = absoluteUrl(langPath);
  const image = absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url}#localbusiness`,
        name: BUSINESS.name,
        url,
        image,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.street,
          addressLocality: BUSINESS.city,
          postalCode: BUSINESS.postalCode,
          addressRegion: BUSINESS.region,
          addressCountry: BUSINESS.country,
        },
        areaServed: { "@type": "Country", name: "Italy" },
        sameAs: [BUSINESS.instagram, BUSINESS.facebook],
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${url}#weddingplanner`,
        name: BUSINESS.name,
        url,
        image,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        additionalType: "https://schema.org/WeddingPlanner",
        description:
          "Luxury destination wedding planning across Tuscany, Lake Como, the Amalfi Coast and Puglia.",
        areaServed: ["Tuscany", "Lake Como", "Amalfi Coast", "Puglia", "Italy"],
        parentOrganization: { "@id": `${url}#localbusiness` },
      },
    ],
  };
}

export function faqPageStructuredData(
  pageUrl: string,
  items: { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
    url: absoluteUrl(pageUrl),
  };
}

export function blogPostingStructuredData(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: opts.image.startsWith("http") ? opts.image : absoluteUrl(opts.image),
    datePublished: opts.datePublished,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: getSiteUrl(),
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: getSiteUrl(),
    },
    mainEntityOfPage: absoluteUrl(opts.path),
  };
}
