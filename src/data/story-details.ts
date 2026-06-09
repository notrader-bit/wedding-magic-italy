import heroImg from "@/assets/hero-tuscany.jpg";
import comoImg from "@/assets/portfolio-como.jpg";
import amalfiImg from "@/assets/portfolio-amalfi.jpg";
import pugliaImg from "@/assets/portfolio-puglia.jpg";
import type { Lang } from "@/i18n/translations";

export const STORY_SLUGS = [
  "eleonora-tomas-tuscany",
  "sara-andrew-como",
  "claudia-henri-amalfi",
  "sophie-marcus-puglia",
] as const;

export type StorySlug = (typeof STORY_SLUGS)[number];

export function isStorySlug(v: string | undefined): v is StorySlug {
  return !!v && (STORY_SLUGS as readonly string[]).includes(v);
}

export const STORY_IMAGES: Record<StorySlug, { hero: string; gallery: string[] }> = {
  "eleonora-tomas-tuscany": { hero: heroImg, gallery: [comoImg, amalfiImg, pugliaImg] },
  "sara-andrew-como": { hero: comoImg, gallery: [heroImg, pugliaImg, amalfiImg] },
  "claudia-henri-amalfi": { hero: amalfiImg, gallery: [pugliaImg, heroImg, comoImg] },
  "sophie-marcus-puglia": { hero: pugliaImg, gallery: [amalfiImg, comoImg, heroImg] },
};

export type StoryDetail = {
  venue: string;
  season: string;
  guests: string;
  palette: string;
  photography: string;
  paragraphs: string[];
  decor: string[];
};

export type StoryUI = {
  back: string;
  venueL: string;
  seasonL: string;
  guestsL: string;
  paletteL: string;
  photoL: string;
  storyH: string;
  decorH: string;
  galleryH: string;
  nextH: string;
  ctaEyebrow: string;
  ctaH1a: string;
  ctaH1b: string;
  ctaBody: string;
  ctaBtn: string;
  notFoundTitle: string;
  notFoundBody: string;
  notFoundBtn: string;
};

export const STORY_UI: Record<Lang, StoryUI> = {
  en: {
    back: "← All weddings",
    venueL: "Venue",
    seasonL: "Season",
    guestsL: "Guests",
    paletteL: "Palette",
    photoL: "Photography",
    storyH: "The story",
    decorH: "Decor & details",
    galleryH: "Gallery",
    nextH: "Next story",
    ctaEyebrow: "Your turn",
    ctaH1a: "Imagine",
    ctaH1b: "your own.",
    ctaBody: "Every wedding begins with a single conversation. Tell us your dream date, and we'll take it from there.",
    ctaBtn: "Start a conversation",
    notFoundTitle: "Story not found",
    notFoundBody: "This story is no longer published, or the link is incorrect.",
    notFoundBtn: "Back to portfolio",
  },
  uk: {
    back: "← Усі весілля",
    venueL: "Локація",
    seasonL: "Сезон",
    guestsL: "Гостей",
    paletteL: "Палітра",
    photoL: "Фотографія",
    storyH: "Історія",
    decorH: "Декор і деталі",
    galleryH: "Галерея",
    nextH: "Наступна історія",
    ctaEyebrow: "Ваш наступний крок",
    ctaH1a: "Уявіть",
    ctaH1b: "своє.",
    ctaBody: "Кожне весілля починається з однієї розмови. Розкажіть нам дату своєї мрії — далі ми поведемо.",
    ctaBtn: "Почати розмову",
    notFoundTitle: "Історію не знайдено",
    notFoundBody: "Цю історію більше не опубліковано, або посилання некоректне.",
    notFoundBtn: "Назад до портфоліо",
  },
  ru: {
    back: "← Все свадьбы",
    venueL: "Локация",
    seasonL: "Сезон",
    guestsL: "Гостей",
    paletteL: "Палитра",
    photoL: "Фотография",
    storyH: "История",
    decorH: "Декор и детали",
    galleryH: "Галерея",
    nextH: "Следующая история",
    ctaEyebrow: "Ваш следующий шаг",
    ctaH1a: "Представьте",
    ctaH1b: "свою.",
    ctaBody: "Каждая свадьба начинается с одного разговора. Расскажите нам дату вашей мечты — дальше мы ведём.",
    ctaBtn: "Начать разговор",
    notFoundTitle: "История не найдена",
    notFoundBody: "Эта история больше не опубликована, либо ссылка неверна.",
    notFoundBtn: "Назад в портфолио",
  },
  it: {
    back: "← Tutti i matrimoni",
    venueL: "Location",
    seasonL: "Stagione",
    guestsL: "Ospiti",
    paletteL: "Palette",
    photoL: "Fotografia",
    storyH: "La storia",
    decorH: "Decor & dettagli",
    galleryH: "Galleria",
    nextH: "Prossima storia",
    ctaEyebrow: "Il vostro turno",
    ctaH1a: "Immaginate il",
    ctaH1b: "vostro.",
    ctaBody: "Ogni matrimonio nasce da una conversazione. Raccontateci la data dei sogni — al resto pensiamo noi.",
    ctaBtn: "Iniziamo a parlare",
    notFoundTitle: "Storia non trovata",
    notFoundBody: "Questa storia non è più pubblicata, oppure il link non è corretto.",
    notFoundBtn: "Torna al portfolio",
  },
  es: {
    back: "← Todas las bodas",
    venueL: "Lugar",
    seasonL: "Temporada",
    guestsL: "Invitados",
    paletteL: "Paleta",
    photoL: "Fotografía",
    storyH: "La historia",
    decorH: "Decoración y detalles",
    galleryH: "Galería",
    nextH: "Siguiente historia",
    ctaEyebrow: "Vuestro turno",
    ctaH1a: "Imaginad",
    ctaH1b: "la vuestra.",
    ctaBody: "Cada boda empieza con una conversación. Contadnos la fecha soñada — del resto nos encargamos nosotros.",
    ctaBtn: "Empieza la conversación",
    notFoundTitle: "Historia no encontrada",
    notFoundBody: "Esta historia ya no está publicada, o el enlace es incorrecto.",
    notFoundBtn: "Volver al portfolio",
  },
  de: {
    back: "← Alle Hochzeiten",
    venueL: "Location",
    seasonL: "Jahreszeit",
    guestsL: "Gäste",
    paletteL: "Palette",
    photoL: "Fotografie",
    storyH: "Die Geschichte",
    decorH: "Dekor & Details",
    galleryH: "Galerie",
    nextH: "Nächste Geschichte",
    ctaEyebrow: "Ihr nächster Schritt",
    ctaH1a: "Stellen Sie sich",
    ctaH1b: "Ihre vor.",
    ctaBody: "Jede Hochzeit beginnt mit einem einzigen Gespräch. Erzählen Sie uns Ihr Traumdatum — den Rest übernehmen wir.",
    ctaBtn: "Gespräch beginnen",
    notFoundTitle: "Geschichte nicht gefunden",
    notFoundBody: "Diese Geschichte ist nicht mehr veröffentlicht, oder der Link ist falsch.",
    notFoundBtn: "Zurück zum Portfolio",
  },
};

export const STORY_DETAILS: Record<Lang, Record<StorySlug, StoryDetail>> = {
  en: {
    "eleonora-tomas-tuscany": {
      venue: "Private villa, Pienza",
      season: "Late September",
      guests: "84",
      palette: "Burnt sienna, terracotta, ivory",
      photography: "Studio Sereni",
      paragraphs: [
        "Eleonora found us through a handwritten letter sent from Madrid. Tomás had proposed in Pienza two summers earlier, and she wanted to return for the wedding — but only if 'the hills would be left to speak for themselves.'",
        "We built three days around silence. A welcome dinner inside a fifteenth-century cloister, candles down a single 32-metre table. A morning of vintage Fiat 500s through Val d'Orcia. The ceremony itself at golden hour, under a single olive tree at the edge of the estate.",
        "Dinner unfolded under strings of warm bulbs, with a single trumpet playing Italian standards. Pasta hand-rolled by the villa's nonna. Tiramisù served at midnight, by candlelight, in the cypress avenue.",
      ],
      decor: [
        "Single 32-metre estate table, raw linen runners",
        "Hand-glazed terracotta plates, vintage Murano stemware",
        "Olive branches, dried wheat, dahlias in muted rust",
        "Beeswax tapers — no electric light past sunset",
        "Handwritten menus on ochre cotton paper",
      ],
    },
    "sara-andrew-como": {
      venue: "Villa Pizzo, Lake Como",
      season: "Mid June",
      guests: "60",
      palette: "Ivory, sage, lake-water blue",
      photography: "Lago Studio",
      paragraphs: [
        "Sara wanted 'an Italian film.' Andrew wanted 'somewhere quiet enough to hear the lake.' Villa Pizzo gave us both — a private water entrance, a botanical garden of camphor trees, and Como's mirror surface as the backdrop.",
        "Guests arrived by wooden Riva boats from Bellagio at six. Aperitivo on the lawn at the water's edge. The civil ceremony was held beneath antique stone arches; vows were exchanged in two languages.",
        "Dinner was long, lazy and floral — white roses spilling from antique silver, olive branches running the length of the table. At midnight, gelato carts were rolled out, and the guests sat barefoot on the marble steps as the lake fell still.",
      ],
      decor: [
        "White garden roses, jasmine vines, olive branches",
        "Antique silver candelabra, mercury glass votives",
        "Linen napkins in pale sage, hand-tied with raffia",
        "Wooden Riva motorboat arrivals from Bellagio",
        "Midnight gelato cart with four flavours",
      ],
    },
    "claudia-henri-amalfi": {
      venue: "Villa Cimbrone, Ravello",
      season: "Early May",
      guests: "22",
      palette: "Lemon, soft white, Mediterranean blue",
      photography: "Costiera Films",
      paragraphs: [
        "Claudia is Italian, Henri is French. They asked for an elopement with only the two families present, and 'the colour of a lemon.' Ravello was the only answer.",
        "The morning began in the lemon groves below Villa Cimbrone, where the bride walked a dirt path with her father at dawn. The ceremony — twenty-two people in total — was held in a stone chapel built into the cliff, with the Mediterranean four hundred metres below.",
        "Lunch was served on the Terrazza dell'Infinito at one o'clock — seven courses by a Michelin-trained chef, lemon granita between each. They danced their first dance, just the two of them, at the edge of the terrace as the sun set into the sea.",
      ],
      decor: [
        "Lemons piled in raw terracotta, fresh from the groves",
        "White anemones, ranunculus, sprigs of myrtle",
        "Hand-embroidered linen napkins from Positano",
        "Stone chapel ceremony, no amplification — voices only",
        "Seven-course lunch on the Terrazza dell'Infinito",
      ],
    },
    "sophie-marcus-puglia": {
      venue: "Masseria Potenti, Puglia",
      season: "Late June",
      guests: "110",
      palette: "Chalk white, terracotta, fig green",
      photography: "Studio Salento",
      paragraphs: [
        "Sophie and Marcus took an entire seventeenth-century masseria for four days. The brief was simple: 'a slow Italian summer, with everyone we love, and no rush at any moment.'",
        "Day one was aperitivo under the olive trees, with focaccia from the wood oven. Day two: a pool day with long lunch and live cumbia. The wedding itself was day three — a barefoot ceremony in the ancient olive grove, the bride entering through an arch of dried palm leaves.",
        "Dinner was twelve metres of trulli-roof shadow, with the masseria's own wine and pasta made that morning. The night ended at four a.m. with espresso, grappa, and a cigar circle around the stone well. Day four was breakfast for anyone who could find it.",
      ],
      decor: [
        "Whitewashed masseria, dried palm leaf arch",
        "Pampas grass, fig branches, sun-bleached linens",
        "Long communal tables, terracotta plates, no centrepieces",
        "Live cumbia band day two, DJ until 4am day three",
        "Estate wine, hand-rolled pasta, espresso & grappa at dawn",
      ],
    },
  },
  uk: {
    "eleonora-tomas-tuscany": {
      venue: "Приватна вілла, П'єнца",
      season: "Кінець вересня",
      guests: "84",
      palette: "Палена сієна, теракота, слонова кістка",
      photography: "Studio Sereni",
      paragraphs: [
        "Елеонора знайшла нас через рукописний лист із Мадрида. Томас зробив пропозицію в П'єнці двома літами раніше, і вона хотіла повернутися сюди на весілля — але «лише якщо пагорби говоритимуть самі за себе».",
        "Ми побудували три дні навколо тиші. Вітальна вечеря в монастирі XV століття, свічки вздовж єдиного 32-метрового стола. Ранок на вінтажних Fiat 500 крізь Валь-д'Орча. Сама церемонія — у золоту годину, під єдиною оливою на краю маєтку.",
        "Вечеря пройшла під гірляндами теплих ламп, під єдину трубу з італійською класикою. Паста, розкатана нонною вілли. Тірамісу — опівночі, при свічках, у кипарисовій алеї.",
      ],
      decor: [
        "32-метровий стіл, доріжки з грубого льону",
        "Теракотові тарілки ручної глазурі, муранське скло",
        "Оливкові гілки, сухе колосся, жоржини в іржавому",
        "Свічки з бджолиного воску — жодного електросвітла після заходу",
        "Меню італійською вручну на охровому бавовняному папері",
      ],
    },
    "sara-andrew-como": {
      venue: "Вілла Піццо, озеро Комо",
      season: "Середина червня",
      guests: "60",
      palette: "Слонова кістка, шавлія, водяна синь Комо",
      photography: "Lago Studio",
      paragraphs: [
        "Сара хотіла «італійський фільм». Ендрю хотів «місце, достатньо тихе, щоб чути озеро». Вілла Піццо дала нам обидва — приватний вхід з води, ботанічний сад камфорних дерев і дзеркальну поверхню Комо як тло.",
        "Гості прибували о шостій дерев'яними човнами Riva з Беладжо. Аперитив на галявині біля води. Цивільна церемонія — під старовинними кам'яними арками; обітниці звучали двома мовами.",
        "Вечеря — довга, лінива, квіткова: білі троянди в антикварному сріблі, оливкові гілки вздовж усього стола. Опівночі викотили візочки з джелато, і гості сиділи босоніж на мармурових сходах, доки озеро завмирало.",
      ],
      decor: [
        "Білі садові троянди, жасмин, оливкові гілки",
        "Антикварні срібні канделябри, скло «меркурій»",
        "Лляні серветки кольору шавлії, підв'язані рафією",
        "Прибуття на дерев'яних човнах Riva з Беладжо",
        "Опівнічний візок з джелато на чотири смаки",
      ],
    },
    "claudia-henri-amalfi": {
      venue: "Вілла Чімброне, Равелло",
      season: "Початок травня",
      guests: "22",
      palette: "Лимон, м'який білий, середземноморська синь",
      photography: "Costiera Films",
      paragraphs: [
        "Клавдія — італійка, Анрі — француз. Вони попросили втечу-весілля лише з двома родинами і «колір лимона». Равелло було єдиною відповіддю.",
        "Ранок розпочався в лимонних гаях під віллою Чімброне — наречена йшла ґрунтовою стежкою разом із батьком на світанку. Церемонія, лише двадцять дві людини, відбулася в кам'яній каплиці, вирізаній у скелі, з Середземним морем за чотириста метрів унизу.",
        "Обід подали на Terrazza dell'Infinito о першій — сім страв від шефа з мішленівським досвідом і лимонна гранітa між ними. Перший танець вони танцювали удвох, на краю тераси, доки сонце сідало в море.",
      ],
      decor: [
        "Лимони в грубій теракоті, щойно з гаю",
        "Білі анемони, ранункулюси, гілочки мирту",
        "Лляні серветки з ручною вишивкою з Позітано",
        "Церемонія в кам'яній каплиці — без мікрофонів, лише голоси",
        "Обід із семи страв на Terrazza dell'Infinito",
      ],
    },
    "sophie-marcus-puglia": {
      venue: "Masseria Potenti, Апулія",
      season: "Кінець червня",
      guests: "110",
      palette: "Крейдяний білий, теракота, зелень інжиру",
      photography: "Studio Salento",
      paragraphs: [
        "Софі й Маркус узяли цілу масерію XVII століття на чотири дні. Бриф був простий: «повільне італійське літо з усіма, кого любимо, і жодного поспіху».",
        "День перший — аперитив під оливами, фокача з дров'яної печі. День другий — біля басейну з довгим обідом і живою кумбією. Саме весілля — день третій: босонога церемонія в стародавньому оливковому гаю, наречена входила крізь арку із сухих пальмових листків.",
        "Вечеря — дванадцять метрів у тіні даху труллі, з власним вином масерії й пастою, скатаною того ж ранку. Ніч завершилася о четвертій ранку — еспресо, граппа й коло сигар біля кам'яного колодязя. День четвертий — сніданок для тих, хто його знайде.",
      ],
      decor: [
        "Білена масерія, арка із сухих пальмових листків",
        "Пампасна трава, інжирові гілки, вибілений льон",
        "Довгі громадські столи, теракота, без центральних композицій",
        "Жива кумбія день другий, DJ до 4 ранку день третій",
        "Вино маєтку, паста вручну, еспресо й граппа на світанку",
      ],
    },
  },
  ru: {
    "eleonora-tomas-tuscany": {
      venue: "Частная вилла, Пьенца",
      season: "Конец сентября",
      guests: "84",
      palette: "Жжёная сиена, терракота, слоновая кость",
      photography: "Studio Sereni",
      paragraphs: [
        "Элеонора нашла нас через рукописное письмо из Мадрида. Томас сделал предложение в Пьенце двумя летами раньше, и она хотела вернуться сюда на свадьбу — но «только если холмы будут говорить сами за себя».",
        "Мы построили три дня вокруг тишины. Приветственный ужин в монастыре XV века, свечи вдоль единственного 32-метрового стола. Утро на винтажных Fiat 500 сквозь Валь-д'Орча. Сама церемония — в золотой час, под единственной оливой на краю поместья.",
        "Ужин шёл под гирляндами тёплых ламп, под одну трубу с итальянской классикой. Паста, раскатанная ноннoй виллы. Тирамису — в полночь, при свечах, в кипарисовой аллее.",
      ],
      decor: [
        "32-метровый стол, дорожки из грубого льна",
        "Терракотовые тарелки ручной глазури, муранское стекло",
        "Оливковые ветви, сухие колосья, георгины в ржавом",
        "Свечи из пчелиного воска — никакого электричества после заката",
        "Меню от руки на охровой хлопковой бумаге",
      ],
    },
    "sara-andrew-como": {
      venue: "Вилла Пиццо, озеро Комо",
      season: "Середина июня",
      guests: "60",
      palette: "Слоновая кость, шалфей, синь воды Комо",
      photography: "Lago Studio",
      paragraphs: [
        "Сара хотела «итальянский фильм». Эндрю — «место достаточно тихое, чтобы слышать озеро». Вилла Пиццо дала нам и то, и другое — частный вход с воды, ботанический сад камфорных деревьев и зеркальную поверхность Комо как фон.",
        "Гости прибывали в шесть на деревянных Riva из Белладжо. Аперитив на лужайке у воды. Гражданская церемония — под старинными каменными арками; клятвы звучали на двух языках.",
        "Ужин — длинный, ленивый, цветочный: белые розы в антикварном серебре, оливковые ветви вдоль всего стола. В полночь выкатили тележки с джелато, и гости сидели босиком на мраморных ступенях, пока озеро замирало.",
      ],
      decor: [
        "Белые садовые розы, жасмин, оливковые ветви",
        "Антикварные серебряные канделябры, стекло «меркурий»",
        "Льняные салфетки оттенка шалфея, перевязанные рафией",
        "Прибытие на деревянных лодках Riva из Белладжо",
        "Полуночная тележка с джелато на четыре вкуса",
      ],
    },
    "claudia-henri-amalfi": {
      venue: "Вилла Чимброне, Равелло",
      season: "Начало мая",
      guests: "22",
      palette: "Лимон, мягкий белый, средиземноморская синь",
      photography: "Costiera Films",
      paragraphs: [
        "Клаудия — итальянка, Анри — француз. Они попросили побег-свадьбу только с двумя семьями и «цвет лимона». Равелло был единственным ответом.",
        "Утро началось в лимонных садах под виллой Чимброне — невеста шла по грунтовой тропе с отцом на рассвете. Церемония, всего двадцать два человека, прошла в каменной часовне, вырезанной в скале, со Средиземным морем в четырёхстах метрах внизу.",
        "Обед подали на Terrazza dell'Infinito в час — семь блюд от шефа с мишленовским опытом и лимонная гранита между ними. Первый танец они танцевали вдвоём, на краю террасы, пока солнце садилось в море.",
      ],
      decor: [
        "Лимоны в грубой терракоте, прямо из садов",
        "Белые анемоны, ранункулюсы, веточки мирта",
        "Льняные салфетки ручной вышивки из Позитано",
        "Церемония в каменной часовне — без микрофонов, только голоса",
        "Обед из семи блюд на Terrazza dell'Infinito",
      ],
    },
    "sophie-marcus-puglia": {
      venue: "Masseria Potenti, Апулия",
      season: "Конец июня",
      guests: "110",
      palette: "Меловой белый, терракота, зелень инжира",
      photography: "Studio Salento",
      paragraphs: [
        "Софи и Маркус взяли целую массерию XVII века на четыре дня. Бриф был прост: «медленное итальянское лето со всеми, кого любим, и никакой спешки».",
        "День первый — аперитив под оливами, фокачча из дровяной печи. День второй — у бассейна с долгим обедом и живой кумбией. Сама свадьба — день третий: босая церемония в древней оливковой роще, невеста входит сквозь арку из сухих пальмовых листьев.",
        "Ужин — двенадцать метров в тени крыши трулли, с собственным вином массерии и пастой, раскатанной тем же утром. Ночь закончилась в четыре утра — эспрессо, граппа и круг сигар у каменного колодца. День четвёртый — завтрак для тех, кто его найдёт.",
      ],
      decor: [
        "Белёная массерия, арка из сухих пальмовых листьев",
        "Пампасная трава, инжирные ветви, выбеленный лён",
        "Длинные общие столы, терракота, без центральных композиций",
        "Живая кумбия день второй, DJ до 4 утра день третий",
        "Вино поместья, паста вручную, эспрессо и граппа на рассвете",
      ],
    },
  },
  it: {
    "eleonora-tomas-tuscany": {
      venue: "Villa privata, Pienza",
      season: "Fine settembre",
      guests: "84",
      palette: "Terra di Siena, terracotta, avorio",
      photography: "Studio Sereni",
      paragraphs: [
        "Eleonora ci trovò con una lettera scritta a mano da Madrid. Tomás le aveva fatto la proposta a Pienza due estati prima, e voleva tornare per le nozze — ma 'solo se le colline avessero parlato da sole.'",
        "Abbiamo costruito tre giorni intorno al silenzio. Cena di benvenuto in un chiostro del Quattrocento, candele lungo un unico tavolo di 32 metri. Una mattinata di Fiat 500 d'epoca attraverso la Val d'Orcia. La cerimonia all'ora dorata, sotto un solo ulivo al margine della tenuta.",
        "La cena si svolse sotto fili di lampadine calde, con una sola tromba a suonare standard italiani. Pasta tirata a mano dalla nonna della villa. Tiramisù a mezzanotte, a lume di candela, nel viale dei cipressi.",
      ],
      decor: [
        "Unico tavolo di tenuta da 32 metri, runner di lino grezzo",
        "Piatti in terracotta smaltata a mano, calici Murano d'epoca",
        "Rami d'ulivo, grano essiccato, dalie color ruggine",
        "Candele di cera d'api — nessuna luce elettrica dopo il tramonto",
        "Menù scritti a mano su carta di cotone ocra",
      ],
    },
    "sara-andrew-como": {
      venue: "Villa Pizzo, Lago di Como",
      season: "Metà giugno",
      guests: "60",
      palette: "Avorio, salvia, blu lago",
      photography: "Lago Studio",
      paragraphs: [
        "Sara voleva 'un film italiano.' Andrew 'un posto abbastanza silenzioso da sentire il lago.' Villa Pizzo ci ha dato entrambi — un ingresso privato dall'acqua, un giardino botanico di canfori e la superficie a specchio di Como come fondale.",
        "Gli ospiti arrivarono in barche Riva di legno da Bellagio alle sei. Aperitivo sul prato in riva all'acqua. La cerimonia civile sotto antichi archi di pietra; le promesse in due lingue.",
        "La cena fu lunga, lenta e fiorita — rose bianche da argenti antichi, rami d'ulivo lungo tutto il tavolo. A mezzanotte uscirono i carretti del gelato, e gli ospiti sedettero scalzi sui gradini di marmo mentre il lago si fermava.",
      ],
      decor: [
        "Rose bianche da giardino, gelsomino, rami d'ulivo",
        "Candelabri d'argento antichi, votive in vetro mercurio",
        "Tovaglioli di lino salvia, legati a mano con rafia",
        "Arrivo in motoscafi Riva di legno da Bellagio",
        "Carretto del gelato a mezzanotte con quattro gusti",
      ],
    },
    "claudia-henri-amalfi": {
      venue: "Villa Cimbrone, Ravello",
      season: "Inizio maggio",
      guests: "22",
      palette: "Limone, bianco morbido, blu mediterraneo",
      photography: "Costiera Films",
      paragraphs: [
        "Claudia è italiana, Henri francese. Hanno chiesto una fuga d'amore con solo le due famiglie, e 'il colore del limone.' Ravello era l'unica risposta.",
        "La mattina cominciò negli agrumeti sotto Villa Cimbrone, dove la sposa percorse un sentiero sterrato con il padre all'alba. La cerimonia — ventidue persone in tutto — si svolse in una cappella di pietra scavata nella roccia, con il Mediterraneo quattrocento metri sotto.",
        "Il pranzo fu servito sulla Terrazza dell'Infinito all'una — sette portate di uno chef di formazione stellata, granita al limone tra una e l'altra. Il primo ballo lo fecero da soli, in fondo alla terrazza, mentre il sole calava nel mare.",
      ],
      decor: [
        "Limoni in terracotta grezza, freschi dagli agrumeti",
        "Anemoni bianchi, ranuncoli, rametti di mirto",
        "Tovaglioli di lino ricamati a mano da Positano",
        "Cerimonia in cappella di pietra — senza amplificazione",
        "Pranzo di sette portate sulla Terrazza dell'Infinito",
      ],
    },
    "sophie-marcus-puglia": {
      venue: "Masseria Potenti, Puglia",
      season: "Fine giugno",
      guests: "110",
      palette: "Bianco gesso, terracotta, verde fico",
      photography: "Studio Salento",
      paragraphs: [
        "Sophie e Marcus hanno preso un'intera masseria del Seicento per quattro giorni. Il brief era semplice: 'un'estate italiana lenta, con tutte le persone che amiamo, e nessuna fretta in nessun momento.'",
        "Giorno uno: aperitivo sotto gli ulivi, focaccia dal forno a legna. Giorno due: piscina, pranzo lungo e cumbia dal vivo. Il matrimonio fu il terzo giorno — cerimonia a piedi nudi nell'uliveto antico, la sposa entrava da un arco di foglie di palma essiccate.",
        "La cena fu dodici metri all'ombra di un tetto a trulli, con il vino della masseria e la pasta fatta quella mattina. La notte finì alle quattro con espresso, grappa e un cerchio di sigari attorno al pozzo di pietra. Il quarto giorno fu colazione per chi la trovava.",
      ],
      decor: [
        "Masseria imbiancata, arco di foglie di palma essiccate",
        "Pampas, rami di fico, lini sbiancati al sole",
        "Tavolate comuni, terracotta, nessun centrotavola",
        "Cumbia dal vivo giorno due, DJ fino alle 4 giorno tre",
        "Vino della tenuta, pasta a mano, espresso & grappa all'alba",
      ],
    },
  },
  es: {
    "eleonora-tomas-tuscany": {
      venue: "Villa privada, Pienza",
      season: "Finales de septiembre",
      guests: "84",
      palette: "Siena tostada, terracota, marfil",
      photography: "Studio Sereni",
      paragraphs: [
        "Eleonora nos encontró con una carta escrita a mano enviada desde Madrid. Tomás se le había declarado en Pienza dos veranos antes, y quería volver para la boda — pero 'solo si las colinas hablaban por sí solas.'",
        "Construimos tres días alrededor del silencio. Cena de bienvenida en un claustro del siglo XV, velas a lo largo de una única mesa de 32 metros. Una mañana de Fiat 500 antiguos por el Val d'Orcia. La ceremonia a la hora dorada, bajo un solo olivo al borde de la finca.",
        "La cena transcurrió bajo guirnaldas de bombillas cálidas, con una sola trompeta tocando clásicos italianos. Pasta amasada por la nonna de la villa. Tiramisú a medianoche, a la luz de las velas, en la avenida de cipreses.",
      ],
      decor: [
        "Mesa única de 32 metros, caminos de lino crudo",
        "Platos de terracota esmaltada a mano, copas Murano antiguas",
        "Ramas de olivo, espigas secas, dalias en tono óxido",
        "Velas de cera de abeja — sin luz eléctrica tras el atardecer",
        "Menús manuscritos en papel de algodón ocre",
      ],
    },
    "sara-andrew-como": {
      venue: "Villa Pizzo, Lago di Como",
      season: "Mediados de junio",
      guests: "60",
      palette: "Marfil, salvia, azul lago",
      photography: "Lago Studio",
      paragraphs: [
        "Sara quería 'una película italiana.' Andrew, 'un sitio lo bastante tranquilo para oír el lago.' Villa Pizzo nos dio ambos — entrada privada desde el agua, jardín botánico de alcanforeros y la superficie de espejo del Como como fondo.",
        "Los invitados llegaron en barcas Riva de madera desde Bellagio a las seis. Aperitivo en el césped al borde del agua. La ceremonia civil bajo arcos antiguos de piedra; los votos se intercambiaron en dos idiomas.",
        "La cena fue larga, lenta y floral — rosas blancas saliendo de plata antigua, ramas de olivo a lo largo de toda la mesa. A medianoche salieron los carros de gelato, y los invitados se sentaron descalzos en los escalones de mármol mientras el lago se quedaba quieto.",
      ],
      decor: [
        "Rosas blancas de jardín, jazmín, ramas de olivo",
        "Candelabros de plata antiguos, votivas de vidrio mercurio",
        "Servilletas de lino salvia, atadas con rafia",
        "Llegada en motoras Riva de madera desde Bellagio",
        "Carro de gelato a medianoche con cuatro sabores",
      ],
    },
    "claudia-henri-amalfi": {
      venue: "Villa Cimbrone, Ravello",
      season: "Principios de mayo",
      guests: "22",
      palette: "Limón, blanco suave, azul mediterráneo",
      photography: "Costiera Films",
      paragraphs: [
        "Claudia es italiana, Henri francés. Pidieron una fuga con solo las dos familias presentes, y 'el color del limón.' Ravello fue la única respuesta.",
        "La mañana empezó en los limoneros bajo Villa Cimbrone, donde la novia caminó por un sendero de tierra con su padre al amanecer. La ceremonia — veintidós personas en total — se celebró en una capilla de piedra excavada en el acantilado, con el Mediterráneo cuatrocientos metros más abajo.",
        "La comida se sirvió en la Terrazza dell'Infinito a la una — siete platos de un chef con formación Michelin, granizada de limón entre cada uno. Bailaron su primer baile solos, al borde de la terraza, mientras el sol caía al mar.",
      ],
      decor: [
        "Limones en terracota cruda, recién cogidos",
        "Anémonas blancas, ranúnculos, ramitas de mirto",
        "Servilletas de lino bordadas a mano de Positano",
        "Ceremonia en capilla de piedra — sin amplificación",
        "Comida de siete platos en la Terrazza dell'Infinito",
      ],
    },
    "sophie-marcus-puglia": {
      venue: "Masseria Potenti, Puglia",
      season: "Finales de junio",
      guests: "110",
      palette: "Blanco tiza, terracota, verde higuera",
      photography: "Studio Salento",
      paragraphs: [
        "Sophie y Marcus tomaron una masseria entera del siglo XVII durante cuatro días. El brief era simple: 'un verano italiano lento, con todos los que queremos, y sin prisas en ningún momento.'",
        "Día uno: aperitivo bajo los olivos, focaccia del horno de leña. Día dos: piscina, comida larga y cumbia en vivo. La boda fue el día tres — ceremonia descalzos en el olivar antiguo, la novia entrando por un arco de hojas secas de palma.",
        "La cena fueron doce metros a la sombra del tejado de trullo, con el vino de la masseria y pasta hecha esa mañana. La noche acabó a las cuatro con espresso, grappa y un círculo de puros junto al pozo. El día cuatro fue desayuno para quien lo encontrara.",
      ],
      decor: [
        "Masseria encalada, arco de hojas secas de palma",
        "Pampa, ramas de higuera, linos blanqueados al sol",
        "Mesas comunes largas, terracota, sin centros de mesa",
        "Cumbia en vivo día dos, DJ hasta las 4 día tres",
        "Vino de la finca, pasta a mano, espresso y grappa al alba",
      ],
    },
  },
  de: {
    "eleonora-tomas-tuscany": {
      venue: "Private Villa, Pienza",
      season: "Ende September",
      guests: "84",
      palette: "Gebrannte Siena, Terrakotta, Elfenbein",
      photography: "Studio Sereni",
      paragraphs: [
        "Eleonora fand uns durch einen handgeschriebenen Brief aus Madrid. Tomás hatte ihr zwei Sommer zuvor in Pienza einen Antrag gemacht, und sie wollte für die Hochzeit zurückkehren — aber 'nur, wenn die Hügel für sich selbst sprechen dürfen.'",
        "Wir bauten drei Tage rund um die Stille. Willkommensessen in einem Kreuzgang aus dem 15. Jahrhundert, Kerzen entlang einer einzigen 32-Meter-Tafel. Ein Morgen mit Vintage-Fiat-500 durch das Val d'Orcia. Die Zeremonie selbst zur goldenen Stunde, unter einem einzigen Olivenbaum am Rand des Anwesens.",
        "Das Abendessen verlief unter warmen Lichtgirlanden, mit einer einzigen Trompete und italienischen Klassikern. Pasta, von der Nonna der Villa von Hand gerollt. Tiramisù um Mitternacht, bei Kerzenlicht, in der Zypressenallee.",
      ],
      decor: [
        "Einzige 32-Meter-Tafel, Runner aus rohem Leinen",
        "Handglasierte Terrakotta-Teller, Vintage-Murano-Gläser",
        "Olivenzweige, getrocknetes Korn, Dahlien in gedämpftem Rost",
        "Bienenwachskerzen — kein elektrisches Licht nach Sonnenuntergang",
        "Handgeschriebene Menüs auf ockerfarbenem Baumwollpapier",
      ],
    },
    "sara-andrew-como": {
      venue: "Villa Pizzo, Comer See",
      season: "Mitte Juni",
      guests: "60",
      palette: "Elfenbein, Salbei, Seewasser-Blau",
      photography: "Lago Studio",
      paragraphs: [
        "Sara wollte 'einen italienischen Film.' Andrew 'einen Ort, ruhig genug, um den See zu hören.' Villa Pizzo gab uns beides — einen privaten Wasserzugang, einen botanischen Garten mit Kampferbäumen und die Spiegelfläche des Comer Sees als Kulisse.",
        "Die Gäste kamen um sechs in hölzernen Riva-Booten aus Bellagio. Aperitivo auf dem Rasen am Wasser. Die Trauung unter alten Steinbögen; die Gelübde in zwei Sprachen.",
        "Das Abendessen war lang, langsam und blumig — weiße Rosen aus antikem Silber, Olivenzweige über die ganze Tafel. Um Mitternacht rollten die Gelato-Wagen heraus, und die Gäste saßen barfuß auf den Marmorstufen, während der See still wurde.",
      ],
      decor: [
        "Weiße Gartenrosen, Jasmin, Olivenzweige",
        "Antike Silberkandelaber, Mercury-Glas-Votive",
        "Leinenservietten in Salbei, mit Raffia gebunden",
        "Ankunft in hölzernen Riva-Booten aus Bellagio",
        "Mitternachts-Gelato-Wagen mit vier Sorten",
      ],
    },
    "claudia-henri-amalfi": {
      venue: "Villa Cimbrone, Ravello",
      season: "Anfang Mai",
      guests: "22",
      palette: "Zitrone, sanftes Weiß, Mittelmeerblau",
      photography: "Costiera Films",
      paragraphs: [
        "Claudia ist Italienerin, Henri Franzose. Sie baten um eine Hochzeit nur mit den beiden Familien und 'der Farbe einer Zitrone.' Ravello war die einzige Antwort.",
        "Der Morgen begann in den Zitronenhainen unterhalb der Villa Cimbrone, wo die Braut bei Sonnenaufgang mit ihrem Vater einen Erdweg ging. Die Zeremonie — zweiundzwanzig Personen — fand in einer in den Fels gehauenen Steinkapelle statt, vierhundert Meter über dem Mittelmeer.",
        "Das Mittagessen wurde um eins auf der Terrazza dell'Infinito serviert — sieben Gänge eines Michelin-geschulten Kochs, Zitronengranita dazwischen. Den ersten Tanz tanzten sie zu zweit, am Rand der Terrasse, während die Sonne ins Meer sank.",
      ],
      decor: [
        "Zitronen in roher Terrakotta, frisch aus den Hainen",
        "Weiße Anemonen, Ranunkeln, Myrtenzweige",
        "Handbestickte Leinenservietten aus Positano",
        "Steinkapelle-Zeremonie — ohne Verstärkung, nur Stimmen",
        "Sieben-Gänge-Mittagessen auf der Terrazza dell'Infinito",
      ],
    },
    "sophie-marcus-puglia": {
      venue: "Masseria Potenti, Apulien",
      season: "Ende Juni",
      guests: "110",
      palette: "Kreideweiß, Terrakotta, Feigengrün",
      photography: "Studio Salento",
      paragraphs: [
        "Sophie und Marcus nahmen eine ganze Masseria aus dem 17. Jahrhundert für vier Tage. Das Briefing war einfach: 'ein langsamer italienischer Sommer, mit allen, die wir lieben, und keine Eile zu keinem Moment.'",
        "Tag eins: Aperitivo unter den Olivenbäumen, Focaccia aus dem Holzofen. Tag zwei: Pool, langes Mittagessen, Live-Cumbia. Die Hochzeit war Tag drei — barfuß-Zeremonie im alten Olivenhain, die Braut trat durch einen Bogen aus getrockneten Palmblättern.",
        "Das Abendessen waren zwölf Meter im Schatten eines Trulli-Dachs, mit dem eigenen Wein der Masseria und Pasta vom Morgen. Die Nacht endete um vier mit Espresso, Grappa und einer Zigarrenrunde am Steinbrunnen. Tag vier war Frühstück für alle, die es fanden.",
      ],
      decor: [
        "Weiß gekalkte Masseria, Bogen aus getrockneten Palmblättern",
        "Pampasgras, Feigenzweige, sonnengebleichtes Leinen",
        "Lange Gemeinschaftstafeln, Terrakotta, keine Centerpieces",
        "Live-Cumbia Tag zwei, DJ bis 4 Uhr Tag drei",
        "Wein des Anwesens, handgerollte Pasta, Espresso & Grappa im Morgengrauen",
      ],
    },
  },
};
