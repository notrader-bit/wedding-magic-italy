import { useEffect } from "react";

/**
 * Adds a smooth fade + translate-in animation to elements as they
 * scroll into view. By default it targets every `<main> <section>`
 * plus any element with `data-reveal`. Respects prefers-reduced-motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SELECTOR = "main section, [data-reveal]";

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const prepare = (el: HTMLElement) => {
      if (el.dataset.revealReady) return false;
      el.dataset.revealReady = "1";
      el.classList.add("reveal");
      return true;
    };

    const revealNow = (el: HTMLElement) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add("is-revealed");
    };

    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        prepare(el);
        revealNow(el);
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNow(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (prepare(el)) io.observe(el);
      });
    };

    scan();

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
