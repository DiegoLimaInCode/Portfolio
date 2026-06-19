// card-3d.js - Efeito 3D tilt nos cards (inspirado em aceternity/3d-card-effect)

function setupCard3d() {
  const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileMedia = window.matchMedia("(max-width: 960px)");
  const cards = document.querySelectorAll("[data-card-3d]");

  if (!cards.length || reducedMotionMedia.matches || mobileMedia.matches) {
    return;
  }

  cards.forEach((card) => {
    const inner = card.querySelector("[data-card-3d-inner]") || card;
    let frame = 0;

    const reset = () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      const rotateY = x * 7;
      const rotateX = y * -7;

      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    card.addEventListener("mouseenter", () => {
      card.classList.add("is-tilted");
    });

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-tilted");
      reset();
    });
  });
}