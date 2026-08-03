import { useEffect } from "react";

export function useScrollEffects() {
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>("[data-scroll-progress] span");
    const header = document.querySelector<HTMLElement>("[data-header]");
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav] a[href^="#"]'));
    let frame = 0;
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty("transform", `scaleX(${range > 0 ? Math.min(1, window.scrollY / range) : 0})`);
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
      let active = links[0]?.hash.slice(1) ?? "";
      for (const link of links) {
        const section = document.getElementById(decodeURIComponent(link.hash.slice(1)));
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) active = section.id;
      }
      links.forEach((link) => {
        const selected = link.hash.slice(1) === active;
        link.classList.toggle("is-active", selected);
        if (selected) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
      });
      frame = 0;
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
