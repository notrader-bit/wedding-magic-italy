import { LocaleLink } from "@/components/LocaleLink";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-12">
        <div>
          <h3 className="font-display text-3xl leading-tight text-ink">
            Wedding Magic <span className="display-italic text-terracotta">Italy</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">{t.footer.explore}</p>
          <ul className="space-y-2 text-sm">
            <li><LocaleLink to="/about" className="hover:text-terracotta">{t.nav.about}</LocaleLink></li>
            <li><LocaleLink to="/services" className="hover:text-terracotta">{t.nav.services}</LocaleLink></li>
            <li><LocaleLink to="/portfolio" className="hover:text-terracotta">{t.nav.portfolio}</LocaleLink></li>
            <li><LocaleLink to="/" hash="packages" className="hover:text-terracotta">{t.nav.packages}</LocaleLink></li>
            <li><LocaleLink to="/" hash="experience" className="hover:text-terracotta">{t.nav.experience}</LocaleLink></li>
          </ul>

        </div>

        <div>
          <p className="eyebrow mb-4">{t.footer.contact}</p>
          <ul className="space-y-2 text-sm">
            <li>Italianweddingmagic@gmail.com</li>
            <li>+393275628698</li>
            <li>{t.footer.locations}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">{t.footer.follow}</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.instagram.com/italian.wedding.magic" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100093991688862" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs tracking-[0.18em] text-muted-foreground md:flex-row md:px-12">
          <span>© {new Date().getFullYear()} Wedding Magic Italy</span>
          <span className="uppercase">{t.footer.crafted}</span>
        </div>
      </div>
    </footer>
  );
}
