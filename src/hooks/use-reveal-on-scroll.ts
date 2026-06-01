import { useEffect } from "react";

/**
 * Adds a smooth fade/translate-in animation to any element with
 * the `data-reveal` attribute as it scrolls into view.
 * Respects prefers-reduced-motion.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Prepare elements
    els.forEach((el) => {
      if (!el.classList.contains("is-revealed")) {
        el.classList.add("reveal");
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-revealed");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Re-scan when DOM changes (route navigation, dynamic content)
    const mo = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.reveal):not(.is-revealed)")
        .forEach((el) => {
          el.classList.add("reveal");
          io.observe(el);
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
