import type { Dict, Lang } from "./dict-types";

const enMeta = {
    home: { title: "Wedding Magic Italy — Luxury Destination Weddings in Italy", description: "Cinematic, intimate destination weddings in Tuscany, Lake Como, Amalfi & Puglia. Crafted by Wedding Magic Italy." },
    about: { title: "About — Wedding Magic Italy", description: "Meet the studio behind Wedding Magic Italy — a decade of crafting intimate, cinematic Italian weddings." },
    services: { title: "Services — Wedding Magic Italy", description: "Full planning, destination weddings, elopements and creative direction across Italy." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "A selected portfolio of luxury weddings across Italy — Tuscany, Lake Como, Amalfi, Puglia." },
    experience: { title: "The Experience — Wedding Magic Italy", description: "How we work — a transparent five-step process from first call to last dance." },
    packages: { title: "Packages & Pricing — Wedding Magic Italy", description: "Three transparent ways to work with us — full planning, partial planning, and elopements in Italy. Honest starting prices." },
    contact: { title: "Contact — Wedding Magic Italy", description: "Begin your Italian wedding. Tell us about your day and we'll reply within 48 hours." },
    blog: { title: "Journal — Wedding Magic Italy", description: "Guides to Tuscan villas, Lake Como weddings and realistic Italian wedding budgets." },
  } satisfies Dict["meta"];

const ukMeta = {
    home: { title: "Wedding Magic Italy — Розкішні весілля в Італії", description: "Кінематографічні, інтимні весілля в Тоскані, на озері Комо, Амальфі та Апулії від Wedding Magic Italy." },
    about: { title: "Про студію — Wedding Magic Italy", description: "Знайомство зі студією Wedding Magic Italy — десятиліття створення інтимних італійських весіль." },
    services: { title: "Послуги — Wedding Magic Italy", description: "Повне планування, destination-весілля, елопменти та креативна режисура по всій Італії." },
    portfolio: { title: "Портфоліо — Wedding Magic Italy", description: "Обране портфоліо розкішних весіль в Італії — Тоскана, Комо, Амальфі, Апулія." },
    experience: { title: "Досвід — Wedding Magic Italy", description: "Як ми працюємо — прозорий п'ятикроковий процес від першого дзвінка до останнього танцю." },
    packages: { title: "Пакети та ціни — Wedding Magic Italy", description: "Три прозорі формати співпраці — повне планування, часткове планування, елопменти. Чесні стартові ціни." },
    contact: { title: "Контакти — Wedding Magic Italy", description: "Розпочніть своє італійське весілля. Розкажіть про ваш день — відповімо протягом 48 годин." },
    blog: { title: "Журнал — Wedding Magic Italy", description: "Гіди по віллах Тоскани, весіллях на Комо та реалістичних бюджетах в Італії." },
  } satisfies Dict["meta"];

const ruMeta = {
    home: { title: "Wedding Magic Italy — Роскошные свадьбы в Италии", description: "Кинематографичные, камерные свадьбы в Тоскане, на Комо, Амальфи и Апулии от Wedding Magic Italy." },
    about: { title: "О студии — Wedding Magic Italy", description: "Знакомство со студией Wedding Magic Italy — десятилетие создания камерных итальянских свадеб." },
    services: { title: "Услуги — Wedding Magic Italy", description: "Полное планирование, destination-свадьбы, элопменты и креативная режиссура по всей Италии." },
    portfolio: { title: "Портфолио — Wedding Magic Italy", description: "Избранное портфолио роскошных свадеб в Италии — Тоскана, Комо, Амальфи, Апулия." },
    experience: { title: "Опыт — Wedding Magic Italy", description: "Как мы работаем — прозрачный пятишаговый процесс от первого звонка до последнего танца." },
    packages: { title: "Пакеты и цены — Wedding Magic Italy", description: "Три прозрачных формата работы — полное планирование, частичное планирование, элопменты. Честные стартовые цены." },
    contact: { title: "Контакты — Wedding Magic Italy", description: "Начните свою итальянскую свадьбу. Расскажите о вашем дне — ответим в течение 48 часов." },
    blog: { title: "Журнал — Wedding Magic Italy", description: "Гиды по виллам Тосканы, свадьбам на Комо и реалистичным бюджетам в Италии." },
  } satisfies Dict["meta"];

const itMeta = {
    home: { title: "Wedding Magic Italy — Matrimoni di Lusso in Italia", description: "Matrimoni destinazione cinematografici e intimi in Toscana, sul Lago di Como, Amalfi e Puglia. Wedding Magic Italy." },
    about: { title: "Studio — Wedding Magic Italy", description: "Conosci lo studio dietro Wedding Magic Italy — un decennio di matrimoni italiani intimi e cinematografici." },
    services: { title: "Servizi — Wedding Magic Italy", description: "Full planning, destination wedding, elopement e direzione creativa in tutta Italia." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "Una selezione di matrimoni di lusso in Italia — Toscana, Como, Amalfi, Puglia." },
    experience: { title: "L'Esperienza — Wedding Magic Italy", description: "Come lavoriamo — un percorso trasparente in cinque passi, dalla prima chiamata all'ultimo ballo." },
    packages: { title: "Pacchetti e Prezzi — Wedding Magic Italy", description: "Tre formule trasparenti per lavorare con noi — full planning, partial planning ed elopement in Italia." },
    contact: { title: "Contatti — Wedding Magic Italy", description: "Iniziate il vostro matrimonio italiano. Raccontateci la giornata, rispondiamo entro 48 ore." },
    blog: { title: "Journal — Wedding Magic Italy", description: "Guide a ville toscane, matrimoni sul Lago di Como e budget realistici in Italia." },
  } satisfies Dict["meta"];

const esMeta = {
    home: { title: "Wedding Magic Italy — Bodas de Lujo en Italia", description: "Bodas destino cinematográficas e íntimas en Toscana, Lago di Como, Amalfi y Puglia. Por Wedding Magic Italy." },
    about: { title: "Estudio — Wedding Magic Italy", description: "Conoce el estudio detrás de Wedding Magic Italy — una década creando bodas italianas íntimas y cinematográficas." },
    services: { title: "Servicios — Wedding Magic Italy", description: "Planificación completa, bodas destino, elopements y dirección creativa en toda Italia." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "Una selección de bodas de lujo en Italia — Toscana, Como, Amalfi, Puglia." },
    experience: { title: "La Experiencia — Wedding Magic Italy", description: "Cómo trabajamos — un proceso transparente en cinco pasos, de la primera llamada al último baile." },
    packages: { title: "Paquetes y Precios — Wedding Magic Italy", description: "Tres formatos transparentes para trabajar con nosotros — full planning, partial planning y elopements en Italia." },
    contact: { title: "Contacto — Wedding Magic Italy", description: "Comienza tu boda italiana. Cuéntanos sobre tu día y respondemos en 48 horas." },
    blog: { title: "Journal — Wedding Magic Italy", description: "Guías de villas toscanas, bodas en el Lago de Como y presupuestos realistas en Italia." },
  } satisfies Dict["meta"];

const deMeta = {
    home: { title: "Wedding Magic Italy — Luxus-Hochzeiten in Italien", description: "Cinematic, intime Destination Weddings in der Toskana, am Comer See, an der Amalfiküste und in Apulien. Wedding Magic Italy." },
    about: { title: "Studio — Wedding Magic Italy", description: "Lernen Sie das Studio hinter Wedding Magic Italy kennen — ein Jahrzehnt intimer, cinematischer italienischer Hochzeiten." },
    services: { title: "Leistungen — Wedding Magic Italy", description: "Full Planning, Destination Weddings, Elopements und Creative Direction in ganz Italien." },
    portfolio: { title: "Portfolio — Wedding Magic Italy", description: "Eine Auswahl von Luxushochzeiten in Italien — Toskana, Como, Amalfi, Apulien." },
    experience: { title: "Der Ablauf — Wedding Magic Italy", description: "Wie wir arbeiten — ein transparenter Fünf-Schritte-Prozess vom ersten Anruf bis zum letzten Tanz." },
    packages: { title: "Pakete & Preise — Wedding Magic Italy", description: "Drei transparente Formate für die Zusammenarbeit — Full Planning, Partial Planning und Elopements in Italien." },
    contact: { title: "Kontakt — Wedding Magic Italy", description: "Beginnen Sie Ihre italienische Hochzeit. Erzählen Sie uns von Ihrem Tag — wir antworten innerhalb von 48 Stunden." },
    blog: { title: "Journal — Wedding Magic Italy", description: "Guides zu toskanischen Villen, Comer See-Hochzeiten und realistischen Budgets in Italien." },
  } satisfies Dict["meta"];

export const PAGE_META: Record<Lang, Dict["meta"]> = {
  en: enMeta,
  uk: ukMeta,
  ru: ruMeta,
  it: itMeta,
  es: esMeta,
  de: deMeta,
};
