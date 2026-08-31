export const LANGS = ["en", "uk", "ru", "it", "es", "de"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  uk: "UA",
  ru: "RU",
  it: "IT",
  es: "ES",
  de: "DE",
};

export const LANG_HTML: Record<Lang, string> = {
  en: "en",
  uk: "uk",
  ru: "ru",
  it: "it",
  es: "es",
  de: "de",
};

export type Dict = {
  nav: { home: string; about: string; services: string; portfolio: string; blog: string; packages: string; experience: string; contact: string; planCta: string };
  footer: { tagline: string; explore: string; contact: string; follow: string; crafted: string; locations: string };
  meta: Record<"home" | "about" | "services" | "portfolio" | "packages" | "experience" | "contact" | "blog", { title: string; description: string }>;
  home: {
    eyebrow: string; h1a: string; h1b: string; lede: string; cta1: string; cta2: string; scroll: string;
    promiseEyebrow: string; promiseH1a: string; promiseH1b: string; promiseBody: string;
    destEyebrow: string; destTitle: string; destItalic: string; allWeddings: string;
    como: string; comoNote: string; amalfi: string; amalfiNote: string; puglia: string; pugliaNote: string;
    founderEyebrow: string; founderQuoteA: string; founderQuoteB: string; founderBody: string; meetStudio: string;
    kindWords: string; testimonials: { quote: string; couple: string; location: string; date: string }[]; testimonialsTitle: string;
    limitedEyebrow: string; limitedTitleA: string; limitedTitleB: string; limitedTitleC: string; limitedBody: string; requestCta: string;
    instagramEyebrow: string; instagramTitle: string; instagramFollow: string;
  };
  about: {
    eyebrow: string; h1a: string; h1b: string;
    founderEyebrow: string; founderName: string; founderBio1: string; founderBio2: string; founderBio3: string; founderBio4: string;
    philosophy: string;
    p1t: string; p1d: string; p2t: string; p2d: string; p3t: string; p3d: string;
    ctaA: string; ctaB: string; ctaBtn: string;
  };
  services: {
    eyebrow: string; h1a: string; h1b: string; lede: string;
    items: { title: string; n: string; desc: string; bullets: string[] }[];
    investEyebrow: string; investTitleA: string; investTitleB: string; investBody: string; investNote: string; investCta: string;
  };
  portfolio: {
    eyebrow: string; h1a: string; h1b: string;
    stories: { place: string; couple: string; year: string; desc: string }[];
    readStory: string; ctaA: string; ctaB: string; ctaBtn: string;
  };
  packages: {
    eyebrow: string; h1a: string; h1b: string; lede: string;
    startingFrom: string; includesH: string; idealH: string; popular: string;
    items: { name: string; n: string; tag?: string; price: string; intro: string; includes: string[]; ideal: string }[];
    noteH: string; noteBody: string;
    ctaA: string; ctaB: string; ctaBody: string; ctaBtn: string;
  };
  experience: {
    eyebrow: string; h1a: string; h1b: string; lede: string;
    steps: { n: string; t: string; when: string; d: string }[];
    cards: { t: string; d: string }[];
    ctaA: string; ctaB: string; ctaBtn: string;
  };
  contact: {
    eyebrow: string; h1a: string; h1b: string; lede: string;
    sent: string; sentTitle: string; sentBody: string;
    yourName: string; partnerName: string; email: string; phone: string;
    estDate: string; estDatePh: string; guestCount: string; guestPh: string;
    location: string; locationPh: string; vision: string; visionPh: string;
    send: string;
    direct: string; replyNote: string;
    byPhone: string; whatsappNote: string;
    studio: string; studioBy: string;
    follow: string;
  };
  faq: { eyebrow: string; h1a: string; h1b: string; lede: string; items: { q: string; a: string }[] };
  blog: {
    eyebrow: string; h1a: string; h1b: string; lede: string;
    readArticle: string; back: string; published: string; minRead: string;
    recommendedEyebrow: string; recommendedTitle: string;
  };
};

