import { useEffect } from "react";

export function useInteractionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealObserver = reduced ? null : new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll<HTMLElement>(".reveal").forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      if (revealObserver) revealObserver.observe(item); else item.classList.add("is-revealed");
    });
    return () => { revealObserver?.disconnect(); };
  }, []);
}
