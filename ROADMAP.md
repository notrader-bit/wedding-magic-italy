# Wedding Magic Italy — роадмап

Живий документ: усі зроблені кроки, поточні плани та backlog. Оновлюємо під час роботи в Cursor.

**Репозиторій:** [github.com/notrader-bit/wedding-magic-italy](https://github.com/notrader-bit/wedding-magic-italy)

**Стек:** TanStack Start (Lovable), React 19, Vite, Nitro, i18n, Tailwind.

---

## Легенда

- [x] — зроблено
- [ ] — заплановано / в роботі

---

## 1. Сайт і контент

### Сторінки та секції

- [x] Головна (`/{lang}`): hero, обіцянка, послуги, досвід, пакети, FAQ, відгуки
- [x] Про нас (`/about`)
- [x] Послуги (`/services`)
- [x] Портфоліо (`/portfolio`) та деталі історій (`/portfolio/$slug`)
- [x] Контакти (`/contact`)
- [x] Секції **Experience** та **Packages** на головній (якорі `#experience`, `#packages`)

### UI та UX

- [x] Шапка / підвал сайту, навігація
- [x] Перемикач мов (`LanguageSwitcher`, `LocaleLink`)
- [x] Плаваюча кнопка WhatsApp
- [x] Анімації по скролу (`use-reveal-on-scroll`)
- [x] Мобільне меню (є e2e-тест)

### Локалізація

- [x] Переклади в `src/i18n/translations.ts` (EN, IT, UK, RU, DE, ES та ін.)
- [x] Маршрути з опційним префіксом мови `{-$lang}`

### SEO

- [x] `robots.txt`
- [x] Sitemap: індекс + окремі sitemap за мовами (`sitemap-*.xml`)

---

## 2. Інфраструктура та деплой

### GitHub

- [x] Remote `origin` → `notrader-bit/wedding-magic-italy`
- [x] Авторизація GitHub CLI як **notrader-bit**
- [x] Синхронізація локальної `main` з remote
- [x] Коміт і push конфігурації Railway (`0d5567b`)

### Railway (Node-сервер)

- [x] `vite.config.ts`: Nitro preset `node-server`
- [x] `package.json`: скрипт `start`, `engines.node >= 22`
- [x] `railway.toml` (build / start / healthcheck `/`)
- [x] `nixpacks.toml` (Node 22, devDependencies на build)
- [x] Локальна перевірка: `npm run build` → `npm start` (HTTP 200)
- [ ] Підключити репозиторій на [railway.app](https://railway.app) і перший успішний деплой
- [ ] Згенерувати домен `*.up.railway.app` або підключити власний домен
- [ ] Перевірити всі основні маршрути та мови на production

### Cloudflare (альтернативний шлях)

- [x] `wrangler.jsonc` залишено в репо (деплой через Lovable / Workers окремо від Railway)
- [ ] Зафіксувати в документації, який хостинг є «основним» (Railway vs Cloudflare)

---

## 3. Якість і розробка

- [x] ESLint + Prettier
- [x] Playwright: `e2e/mobile-menu.spec.ts`, `playwright.config.ts`
- [ ] Додати в `package.json` скрипти `test:e2e` (див. `e2e/README.md`)
- [ ] Розширити e2e (головна, перемикач мов, контакт)
- [ ] CI (GitHub Actions): lint + build (+ e2e за бажанням)

### Локальна розробка

- [x] `npm install` / `npm run dev` (типово `http://localhost:8080`)
- [ ] README з коротким «як запустити» для нових розробників (за потреби)

---

## 4. Backlog / ідеї (не узгоджено)

- [ ] Форма контакту з бекендом або сервісом (email, CRM)
- [ ] Аналітика (privacy-friendly)
- [ ] Оптимізація зображень / CDN для портфоліо
- [ ] Окремі сторінки `/packages` та `/experience` (зараз — секції на головній)

---

## 5. Журнал (хронологія)

| Дата | Подія |
|------|--------|
| — | Сайт з Lovable: багатомовний landing, портфоліо, FAQ, відгуки |
| — | WhatsApp-кнопка (`77c6d7c`) |
| — | Підготовка до Railway, push на GitHub (`0d5567b`) |
| 2026-06-09 | Створено файл `ROADMAP.md` для відстеження планів і прогресу |

---

## 6. Поточний фокус

- [x] Вести роадмап у `ROADMAP.md`
- [ ] _(наступні кроки додавати сюди після узгодження)_

---

_Останнє оновлення: 2026-06-09_
