import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-12">
        <div>
          <h3 className="font-display text-3xl leading-tight text-ink">
            Wedding Magic <span className="display-italic text-terracotta">Italy</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Bespoke destination weddings across Tuscany, Lake Como, Amalfi & Puglia.
            Cinematic, intimate, unforgettable.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-terracotta">About</Link></li>
            <li><Link to="/services" className="hover:text-terracotta">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-terracotta">Portfolio</Link></li>
            <li><Link to="/experience" className="hover:text-terracotta">Experience</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>hello@weddingmagicitaly.com</li>
            <li>+39 055 000 0000</li>
            <li>Firenze · Como · Amalfi</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Follow</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-terracotta">Instagram</a></li>
            <li><a href="#" className="hover:text-terracotta">Pinterest</a></li>
            <li><a href="#" className="hover:text-terracotta">Vimeo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs tracking-[0.18em] text-muted-foreground md:flex-row md:px-12">
          <span>© {new Date().getFullYear()} Wedding Magic Italy</span>
          <span className="uppercase">Crafted in Italia · Con amore</span>
        </div>
      </div>
    </footer>
  );
}
