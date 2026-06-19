// scroll-progress.js - Barra de progresso, header scrolled e nav spy

function setupScrollProgress() {
  const progressBar = document.querySelector("[data-scroll-progress]");
  const progressFill = progressBar?.querySelector("span");
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
  const sections = navLinks
    .map((link) => {
      const id = link.hash.slice(1);
      const section = document.getElementById(decodeURIComponent(id));
      return section ? { link, section, id } : null;
    })
    .filter(Boolean);

  if (!progressBar || !progressFill) {
    return;
  }

  let ticking = false;

  const setProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;

    progressFill.style.transform = `scaleX(${progress})`;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 24);
    }

    if (sections.length) {
      const offset = window.innerHeight * 0.35;
      let activeId = sections[0].id;

      sections.forEach(({ section, id }) => {
        if (section.getBoundingClientRect().top - offset <= 0) {
          activeId = id;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.hash.slice(1) === activeId;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(setProgress);
    }
  };

  setProgress();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", setProgress);
}