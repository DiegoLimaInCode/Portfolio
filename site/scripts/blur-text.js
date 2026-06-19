// blur-text.js - Animação blur-in por palavras (inspirada em 21st.dev / wisedev)

function setupBlurText() {
  const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const targets = document.querySelectorAll("[data-blur-text]");

  if (!targets.length) {
    return;
  }

  const prepareElement = (element) => {
    if (element.dataset.blurReady === "true") {
      return Array.from(element.querySelectorAll(".blur-word"));
    }

    const text = element.textContent.trim();
    element.textContent = "";
    element.dataset.blurReady = "true";

    const words = text.split(/\s+/).filter(Boolean);
    const spans = words.map((word, index) => {
      const span = document.createElement("span");
      span.className = "blur-word";
      span.textContent = word;
      span.style.setProperty("--blur-delay", `${index * 80}ms`);
      element.appendChild(span);

      if (index < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }

      return span;
    });

    return spans;
  };

  const revealWords = (words) => {
    words.forEach((word) => {
      word.classList.add("is-visible");
    });
  };

  if (reducedMotionMedia.matches) {
    targets.forEach((element) => {
      revealWords(prepareElement(element));
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        revealWords(prepareElement(entry.target));
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((element) => {
    prepareElement(element);
    observer.observe(element);
  });
}