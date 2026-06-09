import heroTuscany from "@/assets/hero-tuscany.jpg";
import portfolioComo from "@/assets/portfolio-como.jpg";
import servicesDesign from "@/assets/services-design.jpg";
import type { Lang } from "@/i18n/translations";

export const BLOG_SLUGS = [
  "best-tuscan-villas-wedding",
  "lake-como-wedding-guide",
  "wedding-budget-italy",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export function isBlogSlug(v: string | undefined): v is BlogSlug {
  return !!v && (BLOG_SLUGS as readonly string[]).includes(v);
}

export type BlogPost = {
  title: string;
  excerpt: string;
  datePublished: string;
  readMinutes: number;
  paragraphs: string[];
};

export const BLOG_IMAGES: Record<BlogSlug, string> = {
  "best-tuscan-villas-wedding": heroTuscany,
  "lake-como-wedding-guide": portfolioComo,
  "wedding-budget-italy": servicesDesign,
};

const en: Record<BlogSlug, BlogPost> = {
  "best-tuscan-villas-wedding": {
    title: "10 Best Tuscan Villas for a Destination Wedding",
    excerpt:
      "From Val d'Orcia farmhouses to Renaissance villas near Florence — how to choose a Tuscan venue that feels cinematic, private and unmistakably Italian.",
    datePublished: "2026-03-15",
    readMinutes: 8,
    paragraphs: [
      "Tuscany rewards couples who think in chapters, not checklists. The right villa becomes your welcome dinner, your ceremony lawn and your last dance — without guests ever needing a shuttle across town.",
      "Start with guest count and season. A 40-guest June wedding needs shade, parking and a Plan B for heat; a 120-guest September celebration can stretch across a borro with multiple terraces.",
      "Our shortlist always balances three things: privacy (can you buy out the estate?), light (golden hour on cypress-lined drives), and logistics (Florence or Pisa within 90 minutes for international arrivals).",
      "Villa La Foce and surrounding Val d'Orcia estates offer painterly landscapes. Chianti castelli deliver wine-country intimacy. Near Lucca, restored villas hide behind olive groves with room for multi-day celebrations.",
      "Ask about sound curfews, catering kitchens and accommodation on site. The prettiest pool on Instagram means little if half your guests are an hour away at midnight.",
      "We scout with you — privately — and negotiate only with venues that match your pacing: unhurried lunches, long tables, and a ceremony timed for the light you imagined on the first call.",
    ],
  },
  "lake-como-wedding-guide": {
    title: "How to Plan a Wedding on Lake Como",
    excerpt:
      "Boats, bell towers, villa terraces and guest logistics — a practical guide to celebrating on Italy's most romantic lake without losing the calm.",
    datePublished: "2026-04-02",
    readMinutes: 7,
    paragraphs: [
      "Lake Como compresses drama into a single view: mountains, water and Belle Époque villas. The challenge is not finding beauty — it is pacing a weekend so guests feel hosted, not herded.",
      "Ceremonies often split: a symbolic blessing in a lakeside garden, then a seated dinner on a terrace with boats arriving at sunset. Civil legalities are usually handled separately; we coordinate both tracks early.",
      "Transport is part of the design. Water taxis for a grand entrance, dedicated coaches from Milan Malpensa or Linate, and clear messaging for narrow village streets.",
      "Villas such as Balbiano, del Balbianello (where permitted) and private estates on the western shore each have distinct personalities — formal, botanical, or quietly modern.",
      "Build in a welcome aperitivo in Bellagio or Varenna so guests explore before the wedding day. Como rewards slow tourism: coffee in a piazza beats another bus ride.",
      "Budget realistically for exclusivity: lakefront buyouts, florals that survive humidity, and production that respects noise rules in historic centers.",
    ],
  },
  "wedding-budget-italy": {
    title: "Wedding Budget in Italy: What Couples Actually Spend",
    excerpt:
      "Transparent ranges for Tuscany, Como and the Amalfi Coast — venue, catering, design and the line items that surprise international couples.",
    datePublished: "2026-05-10",
    readMinutes: 9,
    paragraphs: [
      "Italian destination weddings are not a single price tag. Region, guest count, buyout nights and production level move the total more than any one vendor.",
      "For 60–80 guests in Tuscany, couples working with a full-service studio often invest from €35,000 in venue and catering alone, before design, music and guest experiences — many comprehensive plans land between €80,000 and €150,000 all in.",
      "Lake Como adds transport and exclusivity premiums; the Amalfi Coast adds terrain and seasonal access. Elopements and micro-weddings (under 20 guests) can be beautifully executed from €15,000–€40,000 depending on venue and photo/film.",
      "Line items that surprise: VAT and service on F&B, mandatory insurance at historic sites, boat transfers, late-night staffing, and currency timing for contracts in euros.",
      "We build budgets in phases — must-haves, nice-to-haves, and guest comfort — so you see trade-offs before signing. That is how you protect the atmosphere you are flying everyone to Italy for.",
      "Starting packages on our site reflect planning fees; your venue and catering remain the largest variables. A consultation maps a realistic range for your guest list and region in under an hour.",
    ],
  },
};

const uk: Record<BlogSlug, BlogPost> = {
  "best-tuscan-villas-wedding": {
    title: "10 найкращих вілл Тоскани для весілля",
    excerpt:
      "Від сільських маєтків Валь д'Орча до ренесансних вілл біля Флоренції — як обрати локацію, яка виглядає кінематографічно й залишається по-справжньому італійською.",
    datePublished: "2026-03-15",
    readMinutes: 8,
    paragraphs: [
      "Тоскана винагороджує пари, які думають розділами історії, а не чеклістами. Правильна вілла вміщує welcome-вечерю, церемонію й останній танець — без шатлів між локаціями.",
      "Почніть із кількості гостей і сезону. Весілля на 40 гостей у червні потребує тіні, паркінгу та плану Б від спеки; святкування на 120 у вересні може розгорнутися на кількох терасах борго.",
      "У нашому шортлисті завжди три критерії: приватність (чи можна викупити маєток), світло (золота година серед кипарисів) і логістика (Флоренція чи Піза до 90 хвилин для гостей з аеропортів).",
      "Маєтки Val d'Orcia дають «живописні» пейзажі. Замки Кіанті — винну інтимність. Біля Лукки відновлені вілли ховаються за оливковими гаями для багатоденних свят.",
      "Запитуйте про обмеження шуму, кухні для кейтерингу та проживання на місці. Найкрасивіший басейн в Instagram мало що значить, якщо о півночі половина гостей їде годину додому.",
      "Ми разом з вами проводимо приватні огляди й домовляємось лише з майданчиками під ваш ритм: довгі обіди, довгі столи й церемонія під світло, про яке ви мріяли з першого дзвінка.",
    ],
  },
  "lake-como-wedding-guide": {
    title: "Як організувати весілля на озері Комо",
    excerpt:
      "Човни, дзвіниці, тераси вілл і логістика гостей — практичний гід, щоб святкування на найромантичнішому озері Італії залишилось спокійним.",
    datePublished: "2026-04-02",
    readMinutes: 7,
    paragraphs: [
      "Комо збирає драму в одному кадрі: гори, вода й вілли belle époque. Завдання — не знайти красу, а витримати темп вікенду, щоб гості відчували турботу, а не поспіх.",
      "Часто церемонії ділять: символичне благословення в саду біля води, потім вечеря на терасі з прибуттям човнів на заході сонця. Юридичні нюанси координуємо окремо й наперед.",
      "Транспорт — частина дизайну: водне таксі для входу, автобуси з Мілана, чіткі інструкції для вузьких вуличок сіл.",
      "Вілли західного берега мають різний характер — формальний, ботанічний чи стримано сучасний.",
      "Закладіть welcome-аперитив у Белладжо чи Варенні, щоб гості дослідили озеро до дня весілля.",
      "Бюджетуйте реалістично: викуп вілли, флористика в вологості, продакшн з урахуванням правил шуму в історичних центрах.",
    ],
  },
  "wedding-budget-italy": {
    title: "Весільний бюджет в Італії: скільки реально витрачають пари",
    excerpt:
      "Прозорі діапазони для Тоскани, Комо та Амальфі — майданчик, кейтеринг, дизайн і статті, які дивують міжнародних пар.",
    datePublished: "2026-05-10",
    readMinutes: 9,
    paragraphs: [
      "Destination-весілля в Італії не мають однієї ціни. Регіон, гості, ночі викупу й рівень продакшну рухають суму сильніше за одного підрядника.",
      "Для 60–80 гостей у Тоскані лише майданчик і кейтеринг часто стартують від €35 000; повні проєкти нерідко €80 000–€150 000 разом із дизайном і музикою.",
      "Комо додає премію за транспорт і ексклюзивність; Амальфі — за рельєф і сезон. Елопменти (до 20 гостей) можуть бути від €15 000–€40 000.",
      "Дивують ПДВ і сервіс на F&B, страховки на історичних локаціях, човни, нічний персонал і курсові коливання в договорах у євро.",
      "Ми будуємо бюджет поетапно — must-have, nice-to-have, комфорт гостей — щоб ви бачили компроміси до підписів.",
      "Пакети на сайті відображають гонорари планувальників; майданчик і кейтеринг лишаються найбільшими змінними. Консультація за годину дає реалістичний діапазон під ваші цифри.",
    ],
  },
};

export const BLOG_POSTS: Partial<Record<Lang, Record<BlogSlug, BlogPost>>> = {
  en,
  uk,
};

export function getBlogPost(lang: Lang, slug: BlogSlug): BlogPost {
  return BLOG_POSTS[lang]?.[slug] ?? BLOG_POSTS.en![slug];
}

export function listBlogPosts(lang: Lang): { slug: BlogSlug; post: BlogPost }[] {
  return BLOG_SLUGS.map((slug) => ({ slug, post: getBlogPost(lang, slug) }));
}

export function listOtherBlogPosts(lang: Lang, current: BlogSlug) {
  return listBlogPosts(lang).filter((entry) => entry.slug !== current);
}
