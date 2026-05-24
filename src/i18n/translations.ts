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

type Dict = {
  nav: { home: string; about: string; services: string; portfolio: string; experience: string; contact: string; planCta: string };
  footer: { tagline: string; explore: string; contact: string; follow: string; crafted: string; locations: string };
  meta: Record<"home" | "about" | "services" | "portfolio" | "experience" | "contact", { title: string; description: string }>;
  home: {
    eyebrow: string; h1a: string; h1b: string; lede: string; cta1: string; cta2: string; scroll: string;
    promiseEyebrow: string; promiseH1a: string; promiseH1b: string; promiseBody: string;
    destEyebrow: string; destTitle: string; destItalic: string; allWeddings: string;
    como: string; comoNote: string; amalfi: string; amalfiNote: string; puglia: string; pugliaNote: string;
    founderEyebrow: string; founderQuoteA: string; founderQuoteB: string; founderBody: string; meetStudio: string;
    kindWords: string; testimonial: string; testimonialAttr: string;
    limitedEyebrow: string; limitedTitleA: string; limitedTitleB: string; limitedTitleC: string; limitedBody: string; requestCta: string;
  };
  about: {
    eyebrow: string; h1a: string; h1b: string;
    founderEyebrow: string; founderName: string; founderBio1: string; founderBio2: string;
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
};

const en: Dict = {
  nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", experience: "Experience", contact: "Contact", planCta: "Plan your day" },
  footer: { tagline: "Bespoke destination weddings across Tuscany, Lake Como, Amalfi & Puglia. Cinematic, intimate, unforgettable.", explore: "Explore", contact: "Contact", follow: "Follow", crafted: "Crafted in Italia · Con amore", locations: "Firenze · Como · Amalfi" },
  meta: {
    home: { title: "Wedding Magic Italy — Luxury Destination Weddings in Italy", description: "Cinematic, intimate destination weddings in Tuscany, Lake Como, Amalfi & Puglia. Crafted by Wedding Magic Italy." },
    about: { title: "About — Wedding Magic Italy", description: "Meet the studio behind Wedding Magic Italy — a decade of crafting intimate, cinematic Italian weddings." },
    services: { title: "Services — Wedding Magic Italy", description: "Full planning, destination weddings, elopements and creative direction across Italy." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "A selected portfolio of luxury weddings across Italy — Tuscany, Lake Como, Amalfi, Puglia." },
    experience: { title: "The Experience — Wedding Magic Italy", description: "How we work — a transparent five-step process from first call to last dance." },
    contact: { title: "Contact — Wedding Magic Italy", description: "Begin your Italian wedding. Tell us about your day and we'll reply within 48 hours." },
  },
  home: {
    eyebrow: "Bespoke Destination Weddings · Italia", h1a: "A love story", h1b: "written in Italy.",
    lede: "We design unhurried, cinematic weddings between cypress hills, lakeside villas and ancient stone arches — for couples who want nothing less than enchantment.",
    cta1: "Begin your story", cta2: "View weddings", scroll: "Scroll",
    promiseEyebrow: "Our Promise", promiseH1a: "We don't plan weddings.", promiseH1b: "We compose days you'll remember frame by frame.",
    promiseBody: "From the first whisper of an idea to the last toast under the stars, every detail is chosen with intention — a private villa, a hand-pressed menu, a string quartet inside a centuries-old cloister. Quietly luxurious. Unmistakably yours.",
    destEyebrow: "Selected Destinations", destTitle: "Italy,", destItalic: "curated.", allWeddings: "All weddings →",
    como: "Lake Como", comoNote: "Villa estates · lakeside dinners",
    amalfi: "Amalfi Coast", amalfiNote: "Cliffside ceremonies · lemon groves",
    puglia: "Puglia", pugliaNote: "Masserie · olive grove receptions",
    founderEyebrow: "A word from", founderQuoteA: "\"Italy isn't a backdrop.", founderQuoteB: "It's a co-author.\"",
    founderBody: "I've spent a decade weaving relationships with the country's most discreet villas, florists, chefs and artisans — the people who turn a wedding day into a story you can almost taste.",
    meetStudio: "Meet the studio →",
    kindWords: "Kind Words", testimonial: "\"They turned three days in Puglia into the most beautiful chapter of our lives. Not one moment felt rushed. Not one detail felt borrowed.\"",
    testimonialAttr: "Sophie & Marcus · Masseria, 2024",
    limitedEyebrow: "Reservations Limited", limitedTitleA: "We accept only", limitedTitleB: "twelve weddings", limitedTitleC: "a year.",
    limitedBody: "Each one designed without compromise. Tell us about yours — we'll respond within 48 hours with a private consultation.",
    requestCta: "Request consultation",
  },
  about: {
    eyebrow: "The Studio", h1a: "A small studio", h1b: "with a long memory of Italy.",
    founderEyebrow: "Founder · Creative Director", founderName: "Natalia Kozhushko",
    founderBio1: "Born in Firenze, raised between Como and Lecce — Italy is not a portfolio for me, it is a private map. After ten years inside the country's most exclusive villas and venues, I founded Wedding Magic Italy to design weddings the way I would design my own: slowly, honestly, with rooms for stillness.",
    founderBio2: "We are a tiny team on purpose. Two planners, one designer, one production lead — so every couple receives the same hands from first email to last dance.",
    philosophy: "Philosophy",
    p1t: "Slow design", p1d: "We move at the pace of meaning. No template, no formula — only what fits this couple, this place, this season.",
    p2t: "Local roots", p2d: "Our vendors are family. The same nonna who pressed our pasta last summer can prepare a tasting menu for forty guests in October.",
    p3t: "Intimate scale", p3d: "Twelve weddings a year, never more. Your day deserves our full attention from start to finish.",
    ctaA: "Shall we begin", ctaB: "with a conversation?", ctaBtn: "Get in touch",
  },
  services: {
    eyebrow: "Services", h1a: "Four ways", h1b: "we design together.",
    lede: "Every couple comes to us at a different point in their story. Choose a starting place; the path is always tailored.",
    items: [
      { title: "Full Planning", n: "I.", desc: "Twelve to eighteen months of fully bespoke planning. Venue, design, production, guest logistics, on-the-day direction — every detail held in one pair of hands.", bullets: ["Venue sourcing across Italy", "Creative direction & design", "Vendor curation", "Multi-day events"] },
      { title: "Destination Wedding", n: "II.", desc: "You bring the vision and the guest list — we deliver Italy. Ideal for international couples planning entirely from abroad.", bullets: ["Concierge for couple & guests", "Travel & accommodation", "Legal documentation", "On-site coordination"] },
      { title: "Elopement & Intimate", n: "III.", desc: "Two to twenty guests, one breathtaking location. Cliffside ceremonies, private chapels, secret vineyards — quietly cinematic.", bullets: ["Symbolic & civil ceremonies", "Hidden locations", "Private chef dinners", "Photo & film"] },
      { title: "Creative Direction", n: "IV.", desc: "For couples with a planner who need an Italian eye. We art-direct the design language: palette, florals, stationery, lighting, mise-en-scène.", bullets: ["Mood & visual concept", "Florals & tablescape", "Stationery & signage", "Lighting design"] },
    ],
    investEyebrow: "Investment", investTitleA: "Honest about", investTitleB: "what it costs.",
    investBody: "Full-service planning begins at €18,000 in professional fees. Elopements from €6,500. Total wedding budgets typically range from €80,000 to €500,000+ depending on scale, season and venue.",
    investNote: "Following your inquiry we send a detailed brochure with sample budgets, timelines and case studies — so you know exactly what you're saying yes to.",
    investCta: "Request the brochure",
  },
  portfolio: {
    eyebrow: "Selected Stories", h1a: "Weddings,", h1b: "slowly remembered.",
    stories: [
      { place: "Val d'Orcia, Tuscany", couple: "Eleonora & Tomás", year: "2024", desc: "A three-day celebration inside a private villa overlooking cypress hills. Long-table dinners, candlelit cloister, sunset ceremony at the edge of the world." },
      { place: "Lake Como", couple: "Sara & Andrew", year: "2024", desc: "Lakeside arrival by wooden boat, white roses & olive branches across an antique villa terrace, midnight gelato on the steps." },
      { place: "Ravello, Amalfi Coast", couple: "Claudia & Henri", year: "2023", desc: "A bride walking through lemon groves at dawn. Just twenty guests, a stone chapel, and the Mediterranean below." },
      { place: "Masseria, Puglia", couple: "Sophie & Marcus", year: "2024", desc: "Whitewashed walls, ancient olive grove, an entire masseria taken over for four days of slow Italian summer." },
    ],
    readStory: "Read the story →", ctaA: "Yours could be", ctaB: "next.", ctaBtn: "Start a conversation",
  },
  experience: {
    eyebrow: "The Experience", h1a: "From first call", h1b: "to last dance.",
    lede: "Luxury is not opulence — it is the absence of friction. Here is exactly how we'll spend the year together.",
    steps: [
      { n: "I.", t: "Discovery", when: "Week 0 — 2", d: "A private video call (or aperitivo in Florence). We listen for the things you don't yet have words for — the season, the texture, the people you want in the room." },
      { n: "II.", t: "Concept & Venue", when: "Month 1 — 3", d: "We propose three curated destinations with private villa visits. A bespoke design concept is presented: palette, mood, florals, stationery, light." },
      { n: "III.", t: "Design & Production", when: "Month 3 — 9", d: "Vendor curation, menu tastings, paper proofs, music sourcing. You receive a single editorial planning document — no spreadsheets, no chaos." },
      { n: "IV.", t: "The Final Month", when: "Month 10 — 12", d: "Guest concierge opens. Welcome boxes are crafted, timelines finalised, every supplier rehearsed. You arrive in Italy with nothing on your mind but each other." },
      { n: "V.", t: "The Day(s)", when: "Wedding week", d: "Our entire team on the ground. You wake up, walk down the aisle, dance under the stars. We disappear into the background, where good production belongs." },
    ],
    cards: [
      { t: "Communication", d: "One dedicated planner. WhatsApp + email. Replies inside 24 hours, always." },
      { t: "Transparency", d: "Single shared budget tracker. No hidden mark-ups, ever." },
      { t: "Guest experience", d: "Welcome boxes, private transfers, custom itineraries — your guests feel hosted, not herded." },
    ],
    ctaA: "Ready to", ctaB: "begin?", ctaBtn: "Book a consultation",
  },
  contact: {
    eyebrow: "Inquiries", h1a: "Tell us about", h1b: "your day.",
    lede: "We respond personally within 48 hours with a brochure and the first available consultation slot. No automated replies — only Giulia or Sofia at the other end.",
    sent: "Grazie mille", sentTitle: "Your message is on its way.", sentBody: "We'll reply within 48 hours. In the meantime, pour yourself an espresso — the best stories begin slowly.",
    yourName: "Your name", partnerName: "Partner's name", email: "Email", phone: "WhatsApp / Phone",
    estDate: "Estimated date", estDatePh: "e.g. June 2026", guestCount: "Guest count", guestPh: "e.g. 60",
    location: "Dream location in Italy", locationPh: "Tuscany, Como, Amalfi, Puglia…",
    vision: "Tell us your vision", visionPh: "The atmosphere, the season, the people you want around you…",
    send: "Send inquiry",
    direct: "Direct", replyNote: "Replies within 48 hours, Mon–Fri.",
    byPhone: "By Phone", whatsappNote: "WhatsApp preferred for international couples.",
    studio: "Studio", studioBy: "By appointment only.",
    follow: "Follow",
  },
};

const uk: Dict = {
  nav: { home: "Головна", about: "Про нас", services: "Послуги", portfolio: "Портфоліо", experience: "Досвід", contact: "Контакти", planCta: "Спланувати день" },
  footer: { tagline: "Ексклюзивні весілля в Тоскані, на озері Комо, Амальфі та Апулії. Кінематографічні, інтимні, незабутні.", explore: "Розділи", contact: "Контакти", follow: "Соцмережі", crafted: "Створено в Італії · Con amore", locations: "Флоренція · Комо · Амальфі" },
  meta: {
    home: { title: "Wedding Magic Italy — Розкішні весілля в Італії", description: "Кінематографічні, інтимні весілля в Тоскані, на озері Комо, Амальфі та Апулії від Wedding Magic Italy." },
    about: { title: "Про студію — Wedding Magic Italy", description: "Знайомство зі студією Wedding Magic Italy — десятиліття створення інтимних італійських весіль." },
    services: { title: "Послуги — Wedding Magic Italy", description: "Повне планування, destination-весілля, елопменти та креативна режисура по всій Італії." },
    portfolio: { title: "Портфоліо — Wedding Magic Italy", description: "Обране портфоліо розкішних весіль в Італії — Тоскана, Комо, Амальфі, Апулія." },
    experience: { title: "Досвід — Wedding Magic Italy", description: "Як ми працюємо — прозорий п'ятикроковий процес від першого дзвінка до останнього танцю." },
    contact: { title: "Контакти — Wedding Magic Italy", description: "Розпочніть своє італійське весілля. Розкажіть про ваш день — відповімо протягом 48 годин." },
  },
  home: {
    eyebrow: "Ексклюзивні весілля · Italia", h1a: "Історія кохання,", h1b: "написана в Італії.",
    lede: "Ми створюємо неспішні, кінематографічні весілля серед кипарисових пагорбів, прибережних вілл і стародавніх кам'яних арок — для пар, які прагнуть справжнього зачарування.",
    cta1: "Почати свою історію", cta2: "Дивитися весілля", scroll: "Гортайте",
    promiseEyebrow: "Наша обіцянка", promiseH1a: "Ми не плануємо весілля.", promiseH1b: "Ми створюємо дні, які ви пам'ятатимете покадрово.",
    promiseBody: "Від першого подиху ідеї до останнього тосту під зорями — кожна деталь обрана з наміром: приватна вілла, вишукане меню, струнний квартет у стародавньому монастирі. Тихо розкішно. Безсумнівно ваше.",
    destEyebrow: "Обрані напрямки", destTitle: "Італія,", destItalic: "кураторськи.", allWeddings: "Усі весілля →",
    como: "Озеро Комо", comoNote: "Вілли · вечері біля води",
    amalfi: "Амальфі", amalfiNote: "Церемонії на скелях · лимонні гаї",
    puglia: "Апулія", pugliaNote: "Масерії · оливкові гаї",
    founderEyebrow: "Слово від", founderQuoteA: "\"Італія — не тло.", founderQuoteB: "Вона співавтор.\"",
    founderBody: "Я провела десятиліття, плекаючи стосунки з найбільш закритими віллами, флористами, шеф-кухарями та майстрами країни — людьми, які перетворюють весілля на історію, яку майже відчуваєш на смак.",
    meetStudio: "Знайомство зі студією →",
    kindWords: "Теплі слова", testimonial: "\"Вони перетворили три дні в Апулії на найкрасивіший розділ нашого життя. Жодної миті поспіху. Жодної запозиченої деталі.\"",
    testimonialAttr: "Sophie & Marcus · Масерія, 2024",
    limitedEyebrow: "Обмежена кількість", limitedTitleA: "Ми приймаємо лише", limitedTitleB: "дванадцять весіль", limitedTitleC: "на рік.",
    limitedBody: "Кожне створене без компромісів. Розкажіть про ваше — відповімо протягом 48 годин з приватною консультацією.",
    requestCta: "Запит на консультацію",
  },
  about: {
    eyebrow: "Студія", h1a: "Маленька студія", h1b: "з довгою пам'яттю Італії.",
    founderEyebrow: "Засновниця · Креативна директорка", founderName: "Джулія Моретті",
    founderBio1: "Народилась у Флоренції, виросла між Комо і Лечче — Італія для мене не портфоліо, а приватна мапа. Після десяти років роботи в найексклюзивніших віллах країни я заснувала Wedding Magic Italy, щоб створювати весілля так, як створювала б своє: повільно, чесно, з простором для тиші.",
    founderBio2: "Ми навмисне маленька команда. Двоє планувальників, дизайнер, продакшн-лід — щоб кожна пара отримувала ті самі руки від першого листа до останнього танцю.",
    philosophy: "Філософія",
    p1t: "Повільний дизайн", p1d: "Ми рухаємось у темпі сенсу. Жодних шаблонів — тільки те, що пасує цій парі, цьому місцю, цьому сезону.",
    p2t: "Місцеве коріння", p2d: "Наші партнери — сім'я. Та сама нонна, яка робила нам пасту влітку, готує дегустаційне меню на сорок гостей у жовтні.",
    p3t: "Інтимний масштаб", p3d: "Дванадцять весіль на рік, не більше. Ваш день заслуговує нашої повної уваги.",
    ctaA: "Розпочнемо", ctaB: "з розмови?", ctaBtn: "Зв'язатися",
  },
  services: {
    eyebrow: "Послуги", h1a: "Чотири способи", h1b: "створювати разом.",
    lede: "Кожна пара приходить на іншому етапі своєї історії. Оберіть точку старту — шлях завжди індивідуальний.",
    items: [
      { title: "Повне планування", n: "I.", desc: "Від дванадцяти до вісімнадцяти місяців повністю індивідуального планування. Локація, дизайн, продакшн, логістика гостей, режисура дня — усе в одних руках.", bullets: ["Пошук локацій по Італії", "Креативна режисура та дизайн", "Підбір підрядників", "Багатоденні події"] },
      { title: "Destination Wedding", n: "II.", desc: "Ви приносите бачення і список гостей — ми даруємо Італію. Ідеально для міжнародних пар, які планують з-за кордону.", bullets: ["Консьєрж для пари та гостей", "Подорож і проживання", "Юридичні документи", "Координація на місці"] },
      { title: "Елопмент і камерне", n: "III.", desc: "Від двох до двадцяти гостей, одна неймовірна локація. Церемонії на скелях, приватні каплиці, таємні виноградники.", bullets: ["Символічні та цивільні церемонії", "Приховані локації", "Вечері від приватного шефа", "Фото та відео"] },
      { title: "Креативна режисура", n: "IV.", desc: "Для пар із планувальником, яким потрібне італійське око. Ми керуємо мовою дизайну: палітра, флористика, поліграфія, світло, мізансцена.", bullets: ["Настрій і концепція", "Флористика і сервіровка", "Поліграфія та навігація", "Дизайн світла"] },
    ],
    investEyebrow: "Інвестиція", investTitleA: "Чесно про", investTitleB: "вартість.",
    investBody: "Повний сервіс починається від €18 000 професійного гонорару. Елопменти — від €6 500. Загальний бюджет весілля зазвичай від €80 000 до €500 000+ залежно від масштабу, сезону й локації.",
    investNote: "Після запиту ми надсилаємо детальну брошуру з прикладами бюджетів, таймлайнами та кейсами — щоб ви точно знали, на що погоджуєтесь.",
    investCta: "Запросити брошуру",
  },
  portfolio: {
    eyebrow: "Обрані історії", h1a: "Весілля,", h1b: "повільно згадані.",
    stories: [
      { place: "Валь-д'Орча, Тоскана", couple: "Eleonora & Tomás", year: "2024", desc: "Триденне святкування на приватній віллі з видом на кипарисові пагорби. Довгі столи, монастир у свічках, церемонія заходу сонця на краю світу." },
      { place: "Озеро Комо", couple: "Sara & Andrew", year: "2024", desc: "Прибуття на дерев'яному човні, білі троянди й оливкові гілки на терасі старовинної вілли, опівнічне джелато на сходах." },
      { place: "Равелло, Амальфі", couple: "Claudia & Henri", year: "2023", desc: "Наречена крізь лимонні гаї на світанку. Двадцять гостей, кам'яна каплиця і Середземне море внизу." },
      { place: "Масерія, Апулія", couple: "Sophie & Marcus", year: "2024", desc: "Білені стіни, стародавній оливковий гай, ціла масерія на чотири дні повільного італійського літа." },
    ],
    readStory: "Читати історію →", ctaA: "Ваше може стати", ctaB: "наступним.", ctaBtn: "Почати розмову",
  },
  experience: {
    eyebrow: "Досвід", h1a: "Від першого дзвінка", h1b: "до останнього танцю.",
    lede: "Розкіш — це не пишність, а відсутність тертя. Ось як саме ми проведемо рік разом.",
    steps: [
      { n: "I.", t: "Знайомство", when: "Тиждень 0 — 2", d: "Приватний відеодзвінок (або аперитив у Флоренції). Ми слухаємо те, для чого ви ще не знайшли слів — сезон, текстуру, людей, які мають бути поруч." },
      { n: "II.", t: "Концепція і локація", when: "Місяць 1 — 3", d: "Ми пропонуємо три кураторські напрямки з приватними оглядами вілл. Представляємо концепт: палітру, настрій, флористику, поліграфію, світло." },
      { n: "III.", t: "Дизайн і продакшн", when: "Місяць 3 — 9", d: "Підбір підрядників, дегустації, поліграфія, музика. Ви отримуєте єдиний редакційний документ планування — жодних таблиць, жодного хаосу." },
      { n: "IV.", t: "Останній місяць", when: "Місяць 10 — 12", d: "Відкривається консьєрж для гостей. Welcome-бокси, фінальні таймлайни, репетиції з усіма підрядниками. Ви приїздите в Італію думаючи лише одне про одного." },
      { n: "V.", t: "День (і дні)", when: "Тиждень весілля", d: "Уся наша команда на місці. Ви прокидаєтесь, йдете до вівтаря, танцюєте під зорями. Ми зникаємо у тінь — там, де має бути хороший продакшн." },
    ],
    cards: [
      { t: "Комунікація", d: "Один виділений планувальник. WhatsApp + email. Відповіді в межах 24 годин, завжди." },
      { t: "Прозорість", d: "Єдиний спільний бюджет-трекер. Жодних прихованих націнок." },
      { t: "Досвід гостей", d: "Welcome-бокси, приватні трансфери, індивідуальні маршрути — ваші гості почуваються прийнятими." },
    ],
    ctaA: "Готові", ctaB: "почати?", ctaBtn: "Записатись на консультацію",
  },
  contact: {
    eyebrow: "Запити", h1a: "Розкажіть про", h1b: "ваш день.",
    lede: "Ми відповідаємо особисто протягом 48 годин — з брошурою та першим вільним слотом для консультації. Жодних автовідповідей — лише Джулія або Софія.",
    sent: "Grazie mille", sentTitle: "Ваше повідомлення в дорозі.", sentBody: "Відповімо протягом 48 годин. А поки — налийте собі еспресо: найкращі історії починаються повільно.",
    yourName: "Ваше ім'я", partnerName: "Ім'я партнера", email: "Email", phone: "WhatsApp / Телефон",
    estDate: "Орієнтовна дата", estDatePh: "напр. червень 2026", guestCount: "Кількість гостей", guestPh: "напр. 60",
    location: "Локація мрії в Італії", locationPh: "Тоскана, Комо, Амальфі, Апулія…",
    vision: "Розкажіть про ваше бачення", visionPh: "Атмосфера, сезон, люди, яких хочете поруч…",
    send: "Надіслати запит",
    direct: "Напряму", replyNote: "Відповіді протягом 48 годин, пн–пт.",
    byPhone: "Телефоном", whatsappNote: "WhatsApp — найкращий варіант для міжнародних пар.",
    studio: "Студія", studioBy: "Тільки за попереднім записом.",
    follow: "Соцмережі",
  },
};

const ru: Dict = {
  nav: { home: "Главная", about: "О нас", services: "Услуги", portfolio: "Портфолио", experience: "Опыт", contact: "Контакты", planCta: "Спланировать день" },
  footer: { tagline: "Эксклюзивные свадьбы в Тоскане, на озере Комо, Амальфи и Апулии. Кинематографичные, камерные, незабываемые.", explore: "Разделы", contact: "Контакты", follow: "Соцсети", crafted: "Сделано в Италии · Con amore", locations: "Флоренция · Комо · Амальфи" },
  meta: {
    home: { title: "Wedding Magic Italy — Роскошные свадьбы в Италии", description: "Кинематографичные, камерные свадьбы в Тоскане, на Комо, Амальфи и Апулии от Wedding Magic Italy." },
    about: { title: "О студии — Wedding Magic Italy", description: "Знакомство со студией Wedding Magic Italy — десятилетие создания камерных итальянских свадеб." },
    services: { title: "Услуги — Wedding Magic Italy", description: "Полное планирование, destination-свадьбы, элопменты и креативная режиссура по всей Италии." },
    portfolio: { title: "Портфолио — Wedding Magic Italy", description: "Избранное портфолио роскошных свадеб в Италии — Тоскана, Комо, Амальфи, Апулия." },
    experience: { title: "Опыт — Wedding Magic Italy", description: "Как мы работаем — прозрачный пятишаговый процесс от первого звонка до последнего танца." },
    contact: { title: "Контакты — Wedding Magic Italy", description: "Начните свою итальянскую свадьбу. Расскажите о вашем дне — ответим в течение 48 часов." },
  },
  home: {
    eyebrow: "Эксклюзивные свадьбы · Italia", h1a: "История любви,", h1b: "написанная в Италии.",
    lede: "Мы создаём неспешные, кинематографичные свадьбы среди кипарисовых холмов, прибрежных вилл и древних арок — для пар, ищущих настоящего волшебства.",
    cta1: "Начать историю", cta2: "Смотреть свадьбы", scroll: "Листайте",
    promiseEyebrow: "Наше обещание", promiseH1a: "Мы не планируем свадьбы.", promiseH1b: "Мы создаём дни, которые помнишь покадрово.",
    promiseBody: "От первого вздоха идеи до последнего тоста под звёздами — каждая деталь выбрана с намерением: частная вилла, изысканное меню, струнный квартет в монастыре. Тихая роскошь. Безусловно ваша.",
    destEyebrow: "Избранные направления", destTitle: "Италия,", destItalic: "кураторски.", allWeddings: "Все свадьбы →",
    como: "Озеро Комо", comoNote: "Виллы · ужины у воды",
    amalfi: "Амальфи", amalfiNote: "Церемонии на скалах · лимонные сады",
    puglia: "Апулия", pugliaNote: "Массерии · оливковые рощи",
    founderEyebrow: "Слово от", founderQuoteA: "\"Италия — не фон.", founderQuoteB: "Она соавтор.\"",
    founderBody: "Я провела десятилетие, выстраивая отношения с самыми закрытыми виллами, флористами, шефами и мастерами страны — людьми, превращающими свадьбу в историю, которую почти чувствуешь на вкус.",
    meetStudio: "Знакомство со студией →",
    kindWords: "Тёплые слова", testimonial: "\"Они превратили три дня в Апулии в самую красивую главу нашей жизни. Ни одной торопливой минуты. Ни одной заимствованной детали.\"",
    testimonialAttr: "Sophie & Marcus · Массерия, 2024",
    limitedEyebrow: "Ограниченное количество", limitedTitleA: "Мы принимаем только", limitedTitleB: "двенадцать свадеб", limitedTitleC: "в год.",
    limitedBody: "Каждая создана без компромиссов. Расскажите о вашей — ответим в течение 48 часов и предложим личную консультацию.",
    requestCta: "Запросить консультацию",
  },
  about: {
    eyebrow: "Студия", h1a: "Маленькая студия", h1b: "с долгой памятью Италии.",
    founderEyebrow: "Основательница · Креативный директор", founderName: "Джулия Моретти",
    founderBio1: "Родилась во Флоренции, выросла между Комо и Лечче — Италия для меня не портфолио, а личная карта. После десяти лет работы в самых эксклюзивных виллах страны я основала Wedding Magic Italy, чтобы создавать свадьбы так, как создавала бы свою: медленно, честно, с пространством для тишины.",
    founderBio2: "Мы намеренно маленькая команда. Два планировщика, дизайнер, продакшн-лид — чтобы каждая пара получала те же руки от первого письма до последнего танца.",
    philosophy: "Философия",
    p1t: "Медленный дизайн", p1d: "Мы двигаемся в темпе смысла. Никаких шаблонов — только то, что подходит этой паре, этому месту, этому сезону.",
    p2t: "Местные корни", p2d: "Наши партнёры — семья. Та же нонна, что делала нам пасту летом, готовит дегустационное меню на сорок гостей в октябре.",
    p3t: "Камерный масштаб", p3d: "Двенадцать свадеб в год, не больше. Ваш день заслуживает всего нашего внимания.",
    ctaA: "Начнём", ctaB: "с разговора?", ctaBtn: "Связаться",
  },
  services: {
    eyebrow: "Услуги", h1a: "Четыре способа", h1b: "создавать вместе.",
    lede: "Каждая пара приходит на разной точке своей истории. Выберите начало — путь всегда индивидуален.",
    items: [
      { title: "Полное планирование", n: "I.", desc: "От двенадцати до восемнадцати месяцев полностью индивидуального планирования. Локация, дизайн, продакшн, логистика гостей, режиссура дня — всё в одних руках.", bullets: ["Поиск локаций по Италии", "Креативная режиссура и дизайн", "Подбор подрядчиков", "Многодневные события"] },
      { title: "Destination Wedding", n: "II.", desc: "Вы приносите видение и список гостей — мы дарим Италию. Идеально для международных пар, планирующих из-за рубежа.", bullets: ["Консьерж для пары и гостей", "Путешествие и проживание", "Юридические документы", "Координация на месте"] },
      { title: "Элопмент и камерная", n: "III.", desc: "От двух до двадцати гостей, одна потрясающая локация. Церемонии на скалах, частные часовни, скрытые виноградники.", bullets: ["Символические и гражданские церемонии", "Скрытые локации", "Ужины частного шефа", "Фото и видео"] },
      { title: "Креативная режиссура", n: "IV.", desc: "Для пар с планировщиком, которым нужен итальянский взгляд. Мы ведём язык дизайна: палитра, флористика, полиграфия, свет, мизансцена.", bullets: ["Настроение и концепция", "Флористика и сервировка", "Полиграфия и навигация", "Дизайн света"] },
    ],
    investEyebrow: "Инвестиция", investTitleA: "Честно о", investTitleB: "стоимости.",
    investBody: "Полный сервис — от €18 000 профессионального гонорара. Элопменты — от €6 500. Общий бюджет свадьбы обычно от €80 000 до €500 000+ в зависимости от масштаба, сезона и локации.",
    investNote: "После запроса мы отправляем подробную брошюру с примерами бюджетов, таймлайнами и кейсами — чтобы вы точно знали, на что соглашаетесь.",
    investCta: "Запросить брошюру",
  },
  portfolio: {
    eyebrow: "Избранные истории", h1a: "Свадьбы,", h1b: "медленно вспоминаемые.",
    stories: [
      { place: "Валь-д'Орча, Тоскана", couple: "Eleonora & Tomás", year: "2024", desc: "Трёхдневное празднование на частной вилле с видом на кипарисовые холмы. Длинные столы, монастырь в свечах, церемония заката на краю мира." },
      { place: "Озеро Комо", couple: "Sara & Andrew", year: "2024", desc: "Прибытие на деревянной лодке, белые розы и оливковые ветви на террасе старинной виллы, полуночное джелато на ступенях." },
      { place: "Равелло, Амальфи", couple: "Claudia & Henri", year: "2023", desc: "Невеста сквозь лимонные сады на рассвете. Двадцать гостей, каменная часовня и Средиземное море внизу." },
      { place: "Массерия, Апулия", couple: "Sophie & Marcus", year: "2024", desc: "Белёные стены, древняя оливковая роща, целая массерия на четыре дня медленного итальянского лета." },
    ],
    readStory: "Читать историю →", ctaA: "Ваша может стать", ctaB: "следующей.", ctaBtn: "Начать разговор",
  },
  experience: {
    eyebrow: "Опыт", h1a: "От первого звонка", h1b: "до последнего танца.",
    lede: "Роскошь — не пышность, а отсутствие трения. Вот как именно мы проведём год вместе.",
    steps: [
      { n: "I.", t: "Знакомство", when: "Неделя 0 — 2", d: "Личный видеозвонок (или аперитив во Флоренции). Мы слушаем то, для чего вы ещё не нашли слов — сезон, фактуру, людей рядом." },
      { n: "II.", t: "Концепция и локация", when: "Месяц 1 — 3", d: "Мы предлагаем три кураторских направления с частными осмотрами вилл. Представляем концепт: палитру, настроение, флористику, полиграфию, свет." },
      { n: "III.", t: "Дизайн и продакшн", when: "Месяц 3 — 9", d: "Подбор подрядчиков, дегустации, полиграфия, музыка. Вы получаете единый редакционный документ планирования — никаких таблиц, никакого хаоса." },
      { n: "IV.", t: "Последний месяц", when: "Месяц 10 — 12", d: "Открывается консьерж для гостей. Welcome-боксы, финальные таймлайны, репетиции со всеми. Вы приезжаете в Италию, думая только друг о друге." },
      { n: "V.", t: "День (и дни)", when: "Неделя свадьбы", d: "Вся наша команда на месте. Вы просыпаетесь, идёте к алтарю, танцуете под звёздами. Мы исчезаем в тени — там, где должен быть хороший продакшн." },
    ],
    cards: [
      { t: "Коммуникация", d: "Один выделенный планировщик. WhatsApp + email. Ответы в течение 24 часов, всегда." },
      { t: "Прозрачность", d: "Единый общий бюджет-трекер. Никаких скрытых наценок." },
      { t: "Опыт гостей", d: "Welcome-боксы, частные трансферы, индивидуальные маршруты — ваши гости чувствуют себя принятыми." },
    ],
    ctaA: "Готовы", ctaB: "начать?", ctaBtn: "Записаться на консультацию",
  },
  contact: {
    eyebrow: "Запросы", h1a: "Расскажите о", h1b: "вашем дне.",
    lede: "Мы отвечаем лично в течение 48 часов — с брошюрой и ближайшим свободным слотом для консультации. Никаких автоответов — только Джулия или София.",
    sent: "Grazie mille", sentTitle: "Ваше сообщение в пути.", sentBody: "Ответим в течение 48 часов. А пока — налейте себе эспрессо: лучшие истории начинаются медленно.",
    yourName: "Ваше имя", partnerName: "Имя партнёра", email: "Email", phone: "WhatsApp / Телефон",
    estDate: "Предполагаемая дата", estDatePh: "напр. июнь 2026", guestCount: "Количество гостей", guestPh: "напр. 60",
    location: "Локация мечты в Италии", locationPh: "Тоскана, Комо, Амальфи, Апулия…",
    vision: "Расскажите ваше видение", visionPh: "Атмосфера, сезон, люди, которых хотите рядом…",
    send: "Отправить запрос",
    direct: "Напрямую", replyNote: "Ответы в течение 48 часов, пн–пт.",
    byPhone: "По телефону", whatsappNote: "WhatsApp — лучший вариант для международных пар.",
    studio: "Студия", studioBy: "Только по предварительной записи.",
    follow: "Соцсети",
  },
};

const it: Dict = {
  nav: { home: "Home", about: "Studio", services: "Servizi", portfolio: "Portfolio", experience: "Esperienza", contact: "Contatti", planCta: "Pianifica il giorno" },
  footer: { tagline: "Matrimoni destinazione su misura tra Toscana, Lago di Como, Amalfi e Puglia. Cinematografici, intimi, indimenticabili.", explore: "Esplora", contact: "Contatti", follow: "Social", crafted: "Crafted in Italia · Con amore", locations: "Firenze · Como · Amalfi" },
  meta: {
    home: { title: "Wedding Magic Italy — Matrimoni di Lusso in Italia", description: "Matrimoni destinazione cinematografici e intimi in Toscana, sul Lago di Como, Amalfi e Puglia. Wedding Magic Italy." },
    about: { title: "Studio — Wedding Magic Italy", description: "Conosci lo studio dietro Wedding Magic Italy — un decennio di matrimoni italiani intimi e cinematografici." },
    services: { title: "Servizi — Wedding Magic Italy", description: "Full planning, destination wedding, elopement e direzione creativa in tutta Italia." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "Una selezione di matrimoni di lusso in Italia — Toscana, Como, Amalfi, Puglia." },
    experience: { title: "L'Esperienza — Wedding Magic Italy", description: "Come lavoriamo — un percorso trasparente in cinque passi, dalla prima chiamata all'ultimo ballo." },
    contact: { title: "Contatti — Wedding Magic Italy", description: "Iniziate il vostro matrimonio italiano. Raccontateci la giornata, rispondiamo entro 48 ore." },
  },
  home: {
    eyebrow: "Matrimoni Destinazione · Italia", h1a: "Una storia d'amore", h1b: "scritta in Italia.",
    lede: "Disegniamo matrimoni lenti e cinematografici tra colline di cipressi, ville sul lago e antichi archi di pietra — per coppie che cercano nient'altro che incanto.",
    cta1: "Iniziate la storia", cta2: "Vedi matrimoni", scroll: "Scorri",
    promiseEyebrow: "La nostra promessa", promiseH1a: "Non pianifichiamo matrimoni.", promiseH1b: "Componiamo giornate da ricordare fotogramma per fotogramma.",
    promiseBody: "Dal primo sussurro di un'idea all'ultimo brindisi sotto le stelle, ogni dettaglio è scelto con intenzione — una villa privata, un menù scritto a mano, un quartetto d'archi in un chiostro secolare. Silenziosamente lussuoso. Inconfondibilmente vostro.",
    destEyebrow: "Destinazioni Selezionate", destTitle: "L'Italia,", destItalic: "curata.", allWeddings: "Tutti i matrimoni →",
    como: "Lago di Como", comoNote: "Ville · cene sul lago",
    amalfi: "Costiera Amalfitana", amalfiNote: "Cerimonie a picco · agrumeti",
    puglia: "Puglia", pugliaNote: "Masserie · ricevimenti tra gli ulivi",
    founderEyebrow: "Una parola da", founderQuoteA: "\"L'Italia non è uno sfondo.", founderQuoteB: "È una co-autrice.\"",
    founderBody: "Ho passato un decennio tessendo relazioni con le ville, i fioristi, gli chef e gli artigiani più discreti del paese — le persone che trasformano un matrimonio in una storia che quasi si assapora.",
    meetStudio: "Conosci lo studio →",
    kindWords: "Parole Gentili", testimonial: "\"Hanno trasformato tre giorni in Puglia nel capitolo più bello della nostra vita. Nessun istante affrettato. Nessun dettaglio preso in prestito.\"",
    testimonialAttr: "Sophie & Marcus · Masseria, 2024",
    limitedEyebrow: "Posti Limitati", limitedTitleA: "Accettiamo solo", limitedTitleB: "dodici matrimoni", limitedTitleC: "all'anno.",
    limitedBody: "Ognuno disegnato senza compromessi. Raccontateci il vostro — rispondiamo entro 48 ore con una consulenza privata.",
    requestCta: "Richiedi consulenza",
  },
  about: {
    eyebrow: "Lo Studio", h1a: "Uno studio piccolo", h1b: "con una lunga memoria d'Italia.",
    founderEyebrow: "Fondatrice · Direttrice Creativa", founderName: "Natalia Kozhushko",
    founderBio1: "Nata a Firenze, cresciuta tra Como e Lecce — l'Italia per me non è un portfolio, è una mappa privata. Dopo dieci anni nelle ville più esclusive del paese, ho fondato Wedding Magic Italy per disegnare matrimoni come disegnerei il mio: lentamente, onestamente, con spazio per la quiete.",
    founderBio2: "Siamo una squadra piccola di proposito. Due wedding planner, una designer, un production lead — così ogni coppia riceve le stesse mani dalla prima email all'ultimo ballo.",
    philosophy: "Filosofia",
    p1t: "Slow design", p1d: "Andiamo al ritmo del significato. Nessun modello, nessuna formula — solo ciò che si adatta a questa coppia, questo luogo, questa stagione.",
    p2t: "Radici locali", p2d: "I nostri fornitori sono famiglia. La stessa nonna che ci ha tirato la pasta in estate prepara un menù degustazione per quaranta ospiti a ottobre.",
    p3t: "Scala intima", p3d: "Dodici matrimoni l'anno, mai di più. La vostra giornata merita tutta la nostra attenzione.",
    ctaA: "Iniziamo", ctaB: "con una conversazione?", ctaBtn: "Mettiti in contatto",
  },
  services: {
    eyebrow: "Servizi", h1a: "Quattro modi", h1b: "per disegnare insieme.",
    lede: "Ogni coppia arriva in un punto diverso della propria storia. Scegliete un punto di partenza; il percorso è sempre su misura.",
    items: [
      { title: "Full Planning", n: "I.", desc: "Dai dodici ai diciotto mesi di pianificazione su misura. Location, design, produzione, logistica ospiti, regia del giorno — ogni dettaglio in un'unica mano.", bullets: ["Ricerca location in tutta Italia", "Direzione creativa e design", "Selezione fornitori", "Eventi multi-day"] },
      { title: "Destination Wedding", n: "II.", desc: "Voi portate la visione e la lista degli ospiti — noi vi consegniamo l'Italia. Ideale per coppie internazionali.", bullets: ["Concierge per coppia e ospiti", "Viaggi e alloggi", "Documentazione legale", "Coordinamento sul posto"] },
      { title: "Elopement & Intimi", n: "III.", desc: "Da due a venti ospiti, una location mozzafiato. Cerimonie a picco sul mare, cappelle private, vigne segrete — silenziosamente cinematografico.", bullets: ["Cerimonie simboliche e civili", "Location nascoste", "Cene con chef privato", "Foto e video"] },
      { title: "Direzione Creativa", n: "IV.", desc: "Per coppie con planner che cercano un occhio italiano. Dirigiamo il linguaggio del design: palette, fiori, stampati, luci, mise-en-scène.", bullets: ["Mood e concept visivo", "Fiori e mise en place", "Stampati e segnaletica", "Light design"] },
    ],
    investEyebrow: "Investimento", investTitleA: "Onesti su", investTitleB: "quanto costa.",
    investBody: "Il full planning parte da €18.000 di onorari professionali. Gli elopement da €6.500. I budget totali variano tipicamente da €80.000 a oltre €500.000 in base a scala, stagione e location.",
    investNote: "Dopo la vostra richiesta inviamo una brochure dettagliata con budget di esempio, timeline e case study — così sapete esattamente a cosa state dicendo sì.",
    investCta: "Richiedi la brochure",
  },
  portfolio: {
    eyebrow: "Storie Selezionate", h1a: "Matrimoni,", h1b: "ricordati lentamente.",
    stories: [
      { place: "Val d'Orcia, Toscana", couple: "Eleonora & Tomás", year: "2024", desc: "Tre giorni di festa in una villa privata sulle colline di cipressi. Tavolate lunghe, chiostro a lume di candela, cerimonia al tramonto in fondo al mondo." },
      { place: "Lago di Como", couple: "Sara & Andrew", year: "2024", desc: "Arrivo in barca di legno, rose bianche e rami d'ulivo sulla terrazza di una villa antica, gelato a mezzanotte sui gradini." },
      { place: "Ravello, Costiera Amalfitana", couple: "Claudia & Henri", year: "2023", desc: "Una sposa attraverso gli agrumeti all'alba. Venti ospiti, una cappella di pietra e il Mediterraneo sotto." },
      { place: "Masseria, Puglia", couple: "Sophie & Marcus", year: "2024", desc: "Muri imbiancati, antico uliveto, un'intera masseria per quattro giorni di lenta estate italiana." },
    ],
    readStory: "Leggi la storia →", ctaA: "Il vostro potrebbe essere", ctaB: "il prossimo.", ctaBtn: "Iniziamo a parlare",
  },
  experience: {
    eyebrow: "L'Esperienza", h1a: "Dalla prima chiamata", h1b: "all'ultimo ballo.",
    lede: "Il lusso non è opulenza — è l'assenza di attrito. Ecco esattamente come passeremo l'anno insieme.",
    steps: [
      { n: "I.", t: "Conoscenza", when: "Settimana 0 — 2", d: "Una videochiamata privata (o un aperitivo a Firenze). Ascoltiamo le cose per cui non avete ancora parole — la stagione, la texture, le persone che volete intorno." },
      { n: "II.", t: "Concept & Location", when: "Mese 1 — 3", d: "Proponiamo tre destinazioni curate con visite private alle ville. Vi presentiamo un concept di design su misura: palette, mood, fiori, stampati, luce." },
      { n: "III.", t: "Design & Produzione", when: "Mese 3 — 9", d: "Selezione fornitori, degustazioni, prove di stampa, musica. Ricevete un unico documento editoriale di pianificazione — niente fogli di calcolo, niente caos." },
      { n: "IV.", t: "L'Ultimo Mese", when: "Mese 10 — 12", d: "Si apre il concierge ospiti. Welcome box, timeline finali, ogni fornitore in prova. Arrivate in Italia con un solo pensiero: l'uno per l'altra." },
      { n: "V.", t: "Il Giorno (i giorni)", when: "Settimana del matrimonio", d: "Tutto il team sul posto. Vi svegliate, camminate verso l'altare, ballate sotto le stelle. Noi scompariamo sullo sfondo, dove la buona produzione appartiene." },
    ],
    cards: [
      { t: "Comunicazione", d: "Un planner dedicato. WhatsApp + email. Risposte entro 24 ore, sempre." },
      { t: "Trasparenza", d: "Un unico tracker di budget condiviso. Nessun ricarico nascosto, mai." },
      { t: "Esperienza ospiti", d: "Welcome box, transfer privati, itinerari personalizzati — i vostri ospiti si sentono accolti." },
    ],
    ctaA: "Pronti a", ctaB: "iniziare?", ctaBtn: "Prenota una consulenza",
  },
  contact: {
    eyebrow: "Richieste", h1a: "Raccontateci", h1b: "il vostro giorno.",
    lede: "Rispondiamo personalmente entro 48 ore con una brochure e il primo slot di consulenza disponibile. Nessuna risposta automatica — solo Giulia o Sofia all'altro capo.",
    sent: "Grazie mille", sentTitle: "Il vostro messaggio è in viaggio.", sentBody: "Risponderemo entro 48 ore. Nel frattempo, versatevi un espresso — le storie migliori iniziano lentamente.",
    yourName: "Il vostro nome", partnerName: "Nome del partner", email: "Email", phone: "WhatsApp / Telefono",
    estDate: "Data stimata", estDatePh: "es. giugno 2026", guestCount: "Numero ospiti", guestPh: "es. 60",
    location: "Location dei sogni in Italia", locationPh: "Toscana, Como, Amalfi, Puglia…",
    vision: "Raccontateci la vostra visione", visionPh: "L'atmosfera, la stagione, le persone che volete intorno…",
    send: "Invia richiesta",
    direct: "Diretto", replyNote: "Risposte entro 48 ore, lun–ven.",
    byPhone: "Per telefono", whatsappNote: "WhatsApp preferito per coppie internazionali.",
    studio: "Studio", studioBy: "Solo su appuntamento.",
    follow: "Social",
  },
};

const es: Dict = {
  nav: { home: "Inicio", about: "Estudio", services: "Servicios", portfolio: "Portfolio", experience: "Experiencia", contact: "Contacto", planCta: "Planifica tu día" },
  footer: { tagline: "Bodas destino a medida en Toscana, Lago di Como, Amalfi y Puglia. Cinematográficas, íntimas, inolvidables.", explore: "Explorar", contact: "Contacto", follow: "Redes", crafted: "Hecho en Italia · Con amore", locations: "Florencia · Como · Amalfi" },
  meta: {
    home: { title: "Wedding Magic Italy — Bodas de Lujo en Italia", description: "Bodas destino cinematográficas e íntimas en Toscana, Lago di Como, Amalfi y Puglia. Por Wedding Magic Italy." },
    about: { title: "Estudio — Wedding Magic Italy", description: "Conoce el estudio detrás de Wedding Magic Italy — una década creando bodas italianas íntimas y cinematográficas." },
    services: { title: "Servicios — Wedding Magic Italy", description: "Planificación completa, bodas destino, elopements y dirección creativa en toda Italia." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "Una selección de bodas de lujo en Italia — Toscana, Como, Amalfi, Puglia." },
    experience: { title: "La Experiencia — Wedding Magic Italy", description: "Cómo trabajamos — un proceso transparente en cinco pasos, de la primera llamada al último baile." },
    contact: { title: "Contacto — Wedding Magic Italy", description: "Comienza tu boda italiana. Cuéntanos sobre tu día y respondemos en 48 horas." },
  },
  home: {
    eyebrow: "Bodas Destino · Italia", h1a: "Una historia de amor", h1b: "escrita en Italia.",
    lede: "Diseñamos bodas pausadas y cinematográficas entre colinas de cipreses, villas junto al lago y antiguos arcos de piedra — para parejas que buscan nada menos que encantamiento.",
    cta1: "Comienza tu historia", cta2: "Ver bodas", scroll: "Desliza",
    promiseEyebrow: "Nuestra Promesa", promiseH1a: "No planificamos bodas.", promiseH1b: "Componemos días que recordarás fotograma a fotograma.",
    promiseBody: "Desde el primer susurro de una idea hasta el último brindis bajo las estrellas, cada detalle se elige con intención — una villa privada, un menú escrito a mano, un cuarteto de cuerdas en un claustro centenario. Silenciosamente lujoso. Inconfundiblemente vuestro.",
    destEyebrow: "Destinos Seleccionados", destTitle: "Italia,", destItalic: "curada.", allWeddings: "Todas las bodas →",
    como: "Lago di Como", comoNote: "Villas · cenas junto al agua",
    amalfi: "Costa Amalfitana", amalfiNote: "Ceremonias en acantilado · limonares",
    puglia: "Puglia", pugliaNote: "Masserie · recepciones entre olivos",
    founderEyebrow: "Unas palabras de", founderQuoteA: "\"Italia no es un decorado.", founderQuoteB: "Es coautora.\"",
    founderBody: "He pasado una década tejiendo relaciones con las villas, floristas, chefs y artesanos más discretos del país — las personas que convierten una boda en una historia que casi se saborea.",
    meetStudio: "Conoce el estudio →",
    kindWords: "Palabras Amables", testimonial: "\"Convirtieron tres días en Puglia en el capítulo más hermoso de nuestra vida. Ni un momento apresurado. Ni un detalle prestado.\"",
    testimonialAttr: "Sophie & Marcus · Masseria, 2024",
    limitedEyebrow: "Plazas Limitadas", limitedTitleA: "Aceptamos solo", limitedTitleB: "doce bodas", limitedTitleC: "al año.",
    limitedBody: "Cada una diseñada sin compromisos. Cuéntanos la tuya — respondemos en 48 horas con una consulta privada.",
    requestCta: "Solicitar consulta",
  },
  about: {
    eyebrow: "El Estudio", h1a: "Un estudio pequeño", h1b: "con larga memoria de Italia.",
    founderEyebrow: "Fundadora · Directora Creativa", founderName: "Natalia Kozhushko",
    founderBio1: "Nacida en Florencia, criada entre Como y Lecce — Italia para mí no es un portfolio, es un mapa privado. Tras diez años en las villas más exclusivas del país, fundé Wedding Magic Italy para diseñar bodas como diseñaría la mía: despacio, con honestidad, con espacio para el silencio.",
    founderBio2: "Somos un equipo pequeño a propósito. Dos planners, una diseñadora, un production lead — para que cada pareja reciba las mismas manos del primer email al último baile.",
    philosophy: "Filosofía",
    p1t: "Slow design", p1d: "Avanzamos al ritmo del sentido. Sin plantillas, sin fórmulas — solo lo que encaja con esta pareja, este lugar, esta estación.",
    p2t: "Raíces locales", p2d: "Nuestros proveedores son familia. La misma nonna que nos hizo la pasta en verano prepara un menú degustación para cuarenta invitados en octubre.",
    p3t: "Escala íntima", p3d: "Doce bodas al año, nunca más. Vuestro día merece toda nuestra atención de principio a fin.",
    ctaA: "¿Empezamos", ctaB: "con una conversación?", ctaBtn: "Ponte en contacto",
  },
  services: {
    eyebrow: "Servicios", h1a: "Cuatro formas", h1b: "de diseñar juntos.",
    lede: "Cada pareja llega en un punto distinto de su historia. Elegid un punto de partida; el camino siempre se hace a medida.",
    items: [
      { title: "Full Planning", n: "I.", desc: "De doce a dieciocho meses de planificación totalmente a medida. Lugar, diseño, producción, logística de invitados, dirección del día — todo en unas mismas manos.", bullets: ["Búsqueda de lugares en toda Italia", "Dirección creativa y diseño", "Selección de proveedores", "Eventos multi-día"] },
      { title: "Destination Wedding", n: "II.", desc: "Tú traes la visión y la lista de invitados — nosotros entregamos Italia. Ideal para parejas internacionales.", bullets: ["Concierge para pareja e invitados", "Viajes y alojamiento", "Documentación legal", "Coordinación in situ"] },
      { title: "Elopement e Íntima", n: "III.", desc: "De dos a veinte invitados, un lugar impresionante. Ceremonias al borde del acantilado, capillas privadas, viñedos secretos.", bullets: ["Ceremonias simbólicas y civiles", "Lugares ocultos", "Cenas con chef privado", "Foto y video"] },
      { title: "Dirección Creativa", n: "IV.", desc: "Para parejas con planner que necesitan un ojo italiano. Dirigimos el lenguaje del diseño: paleta, flores, papelería, luz, mise-en-scène.", bullets: ["Mood y concepto visual", "Flores y mise en place", "Papelería y señalética", "Diseño de luz"] },
    ],
    investEyebrow: "Inversión", investTitleA: "Honestos sobre", investTitleB: "lo que cuesta.",
    investBody: "El full planning parte desde €18 000 de honorarios profesionales. Elopements desde €6 500. Los presupuestos totales suelen ir de €80 000 a €500 000+ según escala, estación y lugar.",
    investNote: "Tras vuestra consulta enviamos un dossier detallado con presupuestos de ejemplo, timelines y casos — para que sepáis exactamente a qué decís que sí.",
    investCta: "Solicitar el dossier",
  },
  portfolio: {
    eyebrow: "Historias Seleccionadas", h1a: "Bodas,", h1b: "recordadas despacio.",
    stories: [
      { place: "Val d'Orcia, Toscana", couple: "Eleonora & Tomás", year: "2024", desc: "Tres días de celebración en una villa privada sobre colinas de cipreses. Mesas largas, claustro a la luz de las velas, ceremonia al atardecer al borde del mundo." },
      { place: "Lago di Como", couple: "Sara & Andrew", year: "2024", desc: "Llegada en barca de madera, rosas blancas y ramas de olivo en la terraza de una villa antigua, gelato a medianoche en los escalones." },
      { place: "Ravello, Costa Amalfitana", couple: "Claudia & Henri", year: "2023", desc: "Una novia entre limonares al amanecer. Veinte invitados, una capilla de piedra y el Mediterráneo abajo." },
      { place: "Masseria, Puglia", couple: "Sophie & Marcus", year: "2024", desc: "Paredes encaladas, antiguo olivar, una masseria entera durante cuatro días de lento verano italiano." },
    ],
    readStory: "Leer la historia →", ctaA: "La vuestra puede ser", ctaB: "la próxima.", ctaBtn: "Empieza la conversación",
  },
  experience: {
    eyebrow: "La Experiencia", h1a: "De la primera llamada", h1b: "al último baile.",
    lede: "El lujo no es opulencia — es la ausencia de fricción. Así es exactamente cómo pasaremos el año juntos.",
    steps: [
      { n: "I.", t: "Descubrimiento", when: "Semana 0 — 2", d: "Una videollamada privada (o aperitivo en Florencia). Escuchamos lo que aún no tenéis palabras para decir — la estación, la textura, la gente que queréis cerca." },
      { n: "II.", t: "Concepto y Lugar", when: "Mes 1 — 3", d: "Proponemos tres destinos curados con visitas privadas a las villas. Presentamos un concepto a medida: paleta, mood, flores, papelería, luz." },
      { n: "III.", t: "Diseño y Producción", when: "Mes 3 — 9", d: "Selección de proveedores, degustaciones, pruebas de imprenta, música. Recibís un único documento editorial — sin hojas de cálculo, sin caos." },
      { n: "IV.", t: "El Último Mes", when: "Mes 10 — 12", d: "Abre el concierge de invitados. Welcome boxes, timelines finales, todos los proveedores ensayados. Llegáis a Italia pensando solo el uno en el otro." },
      { n: "V.", t: "El Día (los días)", when: "Semana de la boda", d: "Todo nuestro equipo sobre el terreno. Os despertáis, camináis al altar, bailáis bajo las estrellas. Desaparecemos al fondo, donde pertenece la buena producción." },
    ],
    cards: [
      { t: "Comunicación", d: "Un planner dedicado. WhatsApp + email. Respuestas en 24 horas, siempre." },
      { t: "Transparencia", d: "Un único tracker de presupuesto compartido. Sin recargos ocultos." },
      { t: "Experiencia del invitado", d: "Welcome boxes, traslados privados, itinerarios a medida — vuestros invitados se sienten acogidos." },
    ],
    ctaA: "¿Listos para", ctaB: "empezar?", ctaBtn: "Reserva una consulta",
  },
  contact: {
    eyebrow: "Consultas", h1a: "Contadnos sobre", h1b: "vuestro día.",
    lede: "Respondemos personalmente en 48 horas con un dossier y la primera consulta disponible. Sin respuestas automáticas — solo Giulia o Sofia al otro lado.",
    sent: "Grazie mille", sentTitle: "Vuestro mensaje está en camino.", sentBody: "Responderemos en 48 horas. Mientras tanto, serviros un espresso — las mejores historias empiezan despacio.",
    yourName: "Vuestro nombre", partnerName: "Nombre de la pareja", email: "Email", phone: "WhatsApp / Teléfono",
    estDate: "Fecha estimada", estDatePh: "p. ej. junio 2026", guestCount: "Nº de invitados", guestPh: "p. ej. 60",
    location: "Lugar soñado en Italia", locationPh: "Toscana, Como, Amalfi, Puglia…",
    vision: "Contadnos vuestra visión", visionPh: "La atmósfera, la estación, la gente que queréis cerca…",
    send: "Enviar consulta",
    direct: "Directo", replyNote: "Respuestas en 48 horas, lun–vie.",
    byPhone: "Por teléfono", whatsappNote: "WhatsApp preferido para parejas internacionales.",
    studio: "Estudio", studioBy: "Solo con cita.",
    follow: "Redes",
  },
};

const de: Dict = {
  nav: { home: "Start", about: "Studio", services: "Leistungen", portfolio: "Portfolio", experience: "Ablauf", contact: "Kontakt", planCta: "Tag planen" },
  footer: { tagline: "Maßgeschneiderte Destination Weddings in der Toskana, am Comer See, an der Amalfiküste und in Apulien. Cinematic, intim, unvergesslich.", explore: "Entdecken", contact: "Kontakt", follow: "Social", crafted: "Crafted in Italia · Con amore", locations: "Florenz · Como · Amalfi" },
  meta: {
    home: { title: "Wedding Magic Italy — Luxus-Hochzeiten in Italien", description: "Cinematic, intime Destination Weddings in der Toskana, am Comer See, an der Amalfiküste und in Apulien. Wedding Magic Italy." },
    about: { title: "Studio — Wedding Magic Italy", description: "Lernen Sie das Studio hinter Wedding Magic Italy kennen — ein Jahrzehnt intimer, cinematischer italienischer Hochzeiten." },
    services: { title: "Leistungen — Wedding Magic Italy", description: "Full Planning, Destination Weddings, Elopements und Creative Direction in ganz Italien." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "Eine Auswahl von Luxushochzeiten in Italien — Toskana, Como, Amalfi, Apulien." },
    experience: { title: "Der Ablauf — Wedding Magic Italy", description: "Wie wir arbeiten — ein transparenter Fünf-Schritte-Prozess vom ersten Anruf bis zum letzten Tanz." },
    contact: { title: "Kontakt — Wedding Magic Italy", description: "Beginnen Sie Ihre italienische Hochzeit. Erzählen Sie uns von Ihrem Tag — wir antworten innerhalb von 48 Stunden." },
  },
  home: {
    eyebrow: "Destination Weddings · Italia", h1a: "Eine Liebesgeschichte,", h1b: "geschrieben in Italien.",
    lede: "Wir gestalten unaufgeregte, cinematische Hochzeiten zwischen Zypressenhügeln, Villen am See und uralten Steinbögen — für Paare, die nichts weniger als Verzauberung suchen.",
    cta1: "Geschichte beginnen", cta2: "Hochzeiten ansehen", scroll: "Scroll",
    promiseEyebrow: "Unser Versprechen", promiseH1a: "Wir planen keine Hochzeiten.", promiseH1b: "Wir komponieren Tage, die Sie Bild für Bild erinnern.",
    promiseBody: "Vom ersten Flüstern einer Idee bis zum letzten Toast unter den Sternen wird jedes Detail mit Absicht gewählt — eine private Villa, ein handgeschriebenes Menü, ein Streichquartett in einem jahrhundertealten Kreuzgang. Leise luxuriös. Unverkennbar Ihres.",
    destEyebrow: "Ausgewählte Destinationen", destTitle: "Italien,", destItalic: "kuratiert.", allWeddings: "Alle Hochzeiten →",
    como: "Comer See", comoNote: "Villen · Dinner am Wasser",
    amalfi: "Amalfiküste", amalfiNote: "Klippen-Zeremonien · Zitronenhaine",
    puglia: "Apulien", pugliaNote: "Masserie · Empfänge im Olivenhain",
    founderEyebrow: "Ein Wort von", founderQuoteA: "\"Italien ist keine Kulisse.", founderQuoteB: "Es ist Co-Autor.\"",
    founderBody: "Ich habe ein Jahrzehnt damit verbracht, Beziehungen zu den diskretesten Villen, Floristen, Köchen und Handwerkern des Landes zu knüpfen — Menschen, die einen Hochzeitstag in eine Geschichte verwandeln, die man fast schmecken kann.",
    meetStudio: "Studio kennenlernen →",
    kindWords: "Liebe Worte", testimonial: "\"Sie haben drei Tage in Apulien zum schönsten Kapitel unseres Lebens gemacht. Kein gehetzter Moment. Kein geliehenes Detail.\"",
    testimonialAttr: "Sophie & Marcus · Masseria, 2024",
    limitedEyebrow: "Begrenzte Plätze", limitedTitleA: "Wir nehmen nur", limitedTitleB: "zwölf Hochzeiten", limitedTitleC: "pro Jahr an.",
    limitedBody: "Jede wird kompromisslos gestaltet. Erzählen Sie uns von Ihrer — wir antworten innerhalb von 48 Stunden mit einer privaten Beratung.",
    requestCta: "Beratung anfragen",
  },
  about: {
    eyebrow: "Das Studio", h1a: "Ein kleines Studio", h1b: "mit langem Italien-Gedächtnis.",
    founderEyebrow: "Gründerin · Creative Director", founderName: "Natalia Kozhushko",
    founderBio1: "Geboren in Florenz, aufgewachsen zwischen Como und Lecce — Italien ist für mich kein Portfolio, sondern eine private Karte. Nach zehn Jahren in den exklusivsten Villen des Landes gründete ich Wedding Magic Italy, um Hochzeiten so zu gestalten, wie ich meine eigene gestalten würde: langsam, ehrlich, mit Raum für Stille.",
    founderBio2: "Wir sind absichtlich ein kleines Team. Zwei Planerinnen, eine Designerin, ein Production Lead — so erhält jedes Paar dieselben Hände von der ersten E-Mail bis zum letzten Tanz.",
    philosophy: "Philosophie",
    p1t: "Slow Design", p1d: "Wir bewegen uns im Tempo der Bedeutung. Keine Vorlagen, keine Formeln — nur das, was zu diesem Paar, diesem Ort, dieser Jahreszeit passt.",
    p2t: "Lokale Wurzeln", p2d: "Unsere Partner sind Familie. Dieselbe Nonna, die uns im Sommer die Pasta gemacht hat, bereitet im Oktober ein Tasting-Menü für vierzig Gäste zu.",
    p3t: "Intime Größe", p3d: "Zwölf Hochzeiten im Jahr, nie mehr. Ihr Tag verdient unsere volle Aufmerksamkeit.",
    ctaA: "Beginnen wir", ctaB: "mit einem Gespräch?", ctaBtn: "Kontakt aufnehmen",
  },
  services: {
    eyebrow: "Leistungen", h1a: "Vier Wege,", h1b: "gemeinsam zu gestalten.",
    lede: "Jedes Paar kommt an einem anderen Punkt seiner Geschichte zu uns. Wählen Sie einen Ausgangspunkt; der Weg wird immer individuell.",
    items: [
      { title: "Full Planning", n: "I.", desc: "Zwölf bis achtzehn Monate vollständig maßgeschneiderte Planung. Location, Design, Produktion, Gästelogistik, Tagesregie — jedes Detail in einer Hand.", bullets: ["Locationsuche in ganz Italien", "Creative Direction & Design", "Dienstleister-Kuration", "Multi-Day Events"] },
      { title: "Destination Wedding", n: "II.", desc: "Sie bringen die Vision und die Gästeliste — wir liefern Italien. Ideal für internationale Paare.", bullets: ["Concierge für Paar & Gäste", "Reise & Unterkunft", "Rechtliche Dokumente", "Vor-Ort-Koordination"] },
      { title: "Elopement & Intim", n: "III.", desc: "Zwei bis zwanzig Gäste, eine atemberaubende Location. Klippen-Zeremonien, private Kapellen, geheime Weinberge — leise cinematisch.", bullets: ["Symbolische & zivile Zeremonien", "Versteckte Locations", "Private-Chef-Dinner", "Foto & Film"] },
      { title: "Creative Direction", n: "IV.", desc: "Für Paare mit Planer, die ein italienisches Auge brauchen. Wir führen die Design-Sprache: Palette, Floral, Stationery, Licht, Mise-en-scène.", bullets: ["Mood & visuelles Konzept", "Floral & Tischlandschaft", "Stationery & Beschilderung", "Lichtdesign"] },
    ],
    investEyebrow: "Investment", investTitleA: "Ehrlich über", investTitleB: "die Kosten.",
    investBody: "Full Planning beginnt bei €18.000 an Honoraren. Elopements ab €6.500. Gesamtbudgets liegen typischerweise zwischen €80.000 und über €500.000 — je nach Umfang, Saison und Location.",
    investNote: "Nach Ihrer Anfrage senden wir eine ausführliche Broschüre mit Beispielbudgets, Timelines und Case Studies — damit Sie genau wissen, wozu Sie ja sagen.",
    investCta: "Broschüre anfragen",
  },
  portfolio: {
    eyebrow: "Ausgewählte Geschichten", h1a: "Hochzeiten,", h1b: "langsam erinnert.",
    stories: [
      { place: "Val d'Orcia, Toskana", couple: "Eleonora & Tomás", year: "2024", desc: "Eine dreitägige Feier in einer privaten Villa über Zypressenhügeln. Lange Tafeln, kerzenbeleuchteter Kreuzgang, Sonnenuntergangs-Zeremonie am Rand der Welt." },
      { place: "Comer See", couple: "Sara & Andrew", year: "2024", desc: "Ankunft im Holzboot, weiße Rosen und Olivenzweige auf der Terrasse einer antiken Villa, Mitternachts-Gelato auf den Stufen." },
      { place: "Ravello, Amalfiküste", couple: "Claudia & Henri", year: "2023", desc: "Eine Braut durch Zitronenhaine im Morgengrauen. Zwanzig Gäste, eine Steinkapelle und das Mittelmeer darunter." },
      { place: "Masseria, Apulien", couple: "Sophie & Marcus", year: "2024", desc: "Weiß getünchte Mauern, alter Olivenhain, eine ganze Masseria für vier Tage langsamen italienischen Sommer." },
    ],
    readStory: "Geschichte lesen →", ctaA: "Ihre könnte die", ctaB: "nächste sein.", ctaBtn: "Gespräch beginnen",
  },
  experience: {
    eyebrow: "Der Ablauf", h1a: "Vom ersten Anruf", h1b: "zum letzten Tanz.",
    lede: "Luxus ist keine Opulenz — er ist die Abwesenheit von Reibung. So verbringen wir das Jahr zusammen.",
    steps: [
      { n: "I.", t: "Kennenlernen", when: "Woche 0 — 2", d: "Ein privater Videocall (oder Aperitivo in Florenz). Wir hören auf das, wofür Sie noch keine Worte haben — die Jahreszeit, die Textur, die Menschen, die Sie um sich haben wollen." },
      { n: "II.", t: "Konzept & Location", when: "Monat 1 — 3", d: "Wir schlagen drei kuratierte Destinationen mit privaten Villenbesuchen vor. Ein maßgeschneidertes Designkonzept: Palette, Mood, Floral, Stationery, Licht." },
      { n: "III.", t: "Design & Produktion", when: "Monat 3 — 9", d: "Dienstleister-Kuration, Menü-Tastings, Druckmuster, Musik. Sie erhalten ein einziges redaktionelles Planungsdokument — keine Tabellen, kein Chaos." },
      { n: "IV.", t: "Der letzte Monat", when: "Monat 10 — 12", d: "Gäste-Concierge öffnet. Welcome Boxes, finale Timelines, jeder Lieferant geprobt. Sie kommen in Italien an und denken nur aneinander." },
      { n: "V.", t: "Der Tag (die Tage)", when: "Hochzeitswoche", d: "Unser ganzes Team vor Ort. Sie wachen auf, gehen zum Altar, tanzen unter den Sternen. Wir verschwinden im Hintergrund — wo gute Produktion hingehört." },
    ],
    cards: [
      { t: "Kommunikation", d: "Eine dedizierte Planerin. WhatsApp + E-Mail. Antworten innerhalb von 24 Stunden, immer." },
      { t: "Transparenz", d: "Ein gemeinsamer Budget-Tracker. Niemals versteckte Aufschläge." },
      { t: "Gäste-Erlebnis", d: "Welcome Boxes, private Transfers, individuelle Itinerare — Ihre Gäste fühlen sich umsorgt." },
    ],
    ctaA: "Bereit zu", ctaB: "beginnen?", ctaBtn: "Beratung buchen",
  },
  contact: {
    eyebrow: "Anfragen", h1a: "Erzählen Sie uns von", h1b: "Ihrem Tag.",
    lede: "Wir antworten persönlich innerhalb von 48 Stunden mit einer Broschüre und dem ersten verfügbaren Beratungstermin. Keine automatischen Antworten — nur Giulia oder Sofia am anderen Ende.",
    sent: "Grazie mille", sentTitle: "Ihre Nachricht ist unterwegs.", sentBody: "Wir antworten innerhalb von 48 Stunden. Gönnen Sie sich in der Zwischenzeit einen Espresso — die besten Geschichten beginnen langsam.",
    yourName: "Ihr Name", partnerName: "Name des Partners", email: "E-Mail", phone: "WhatsApp / Telefon",
    estDate: "Voraussichtliches Datum", estDatePh: "z. B. Juni 2026", guestCount: "Anzahl Gäste", guestPh: "z. B. 60",
    location: "Traum-Location in Italien", locationPh: "Toskana, Como, Amalfi, Apulien…",
    vision: "Erzählen Sie uns Ihre Vision", visionPh: "Die Atmosphäre, die Jahreszeit, die Menschen um Sie herum…",
    send: "Anfrage senden",
    direct: "Direkt", replyNote: "Antworten innerhalb von 48 Stunden, Mo–Fr.",
    byPhone: "Telefonisch", whatsappNote: "WhatsApp bevorzugt für internationale Paare.",
    studio: "Studio", studioBy: "Nur nach Terminvereinbarung.",
    follow: "Social",
  },
};

export const TRANSLATIONS: Record<Lang, Dict> = { en, uk, ru, it, es, de };
export type { Dict };
