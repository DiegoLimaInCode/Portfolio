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
    const cleanups: Array<() => void> = [];
    if (!reduced && window.innerWidth > 960) document.querySelectorAll<HTMLElement>("[data-card-3d]").forEach((card) => {
      const inner = card.querySelector<HTMLElement>("[data-card-3d-inner]") ?? card; let frame = 0;
      const move = (event: PointerEvent) => { const rect = card.getBoundingClientRect(); const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2); const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2); if (frame) cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { inner.style.transform = `rotateX(${y * -7}deg) rotateY(${x * 7}deg)`; }); };
      const enter = () => card.classList.add("is-tilted"); const leave = () => { card.classList.remove("is-tilted"); inner.style.transform = "rotateX(0deg) rotateY(0deg)"; };
      card.addEventListener("pointerenter", enter); card.addEventListener("pointermove", move); card.addEventListener("pointerleave", leave);
      cleanups.push(() => { card.removeEventListener("pointerenter", enter); card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); if (frame) cancelAnimationFrame(frame); });
    });
    return () => { revealObserver?.disconnect(); cleanups.forEach((cleanup) => cleanup()); };
  }, []);
}
