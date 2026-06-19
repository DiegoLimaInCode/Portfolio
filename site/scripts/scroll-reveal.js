// scroll-reveal.js - Revelação suave ao entrar na viewport

function setupScrollReveal() {
  const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const items = document.querySelectorAll(".reveal");

  if (!items.length) {
    return;
  }

  const reveal = (element) => {
    element.classList.add("is-revealed");
  };

  if (reducedMotionMedia.matches) {
    items.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  items.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    observer.observe(element);
  });
}