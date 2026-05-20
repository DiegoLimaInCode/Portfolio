// menu.js - Controle de navegação e menu responsivo mobile

function setupMenu() {
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-nav]");

  if (!menuButton || !nav) {
    return;
  }

  const getMenuLinks = () => Array.from(nav.querySelectorAll("a"));
  const isMenuOpen = () => nav.classList.contains("is-open");

  const syncExpandedState = () => {
    menuButton.setAttribute("aria-expanded", String(isMenuOpen()));
  };

  const focusFirstMenuLink = () => {
    const firstLink = getMenuLinks()[0];
    if (firstLink) {
      firstLink.focus();
    }
  };

  const focusLinkedSection = (link) => {
    if (!link.hash) {
      return;
    }

    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) {
      return;
    }

    window.setTimeout(() => {
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus({ preventScroll: true });
    }, 0);
  };

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!isMenuOpen()) {
      syncExpandedState();
      return;
    }

    const shouldRestoreFocus = restoreFocus && nav.contains(document.activeElement);
    nav.classList.remove("is-open");
    syncExpandedState();

    if (shouldRestoreFocus) {
      menuButton.focus();
    }
  };

  const openMenu = () => {
    if (isMenuOpen()) {
      syncExpandedState();
      return;
    }

    nav.classList.add("is-open");
    syncExpandedState();
    focusFirstMenuLink();
  };

  syncExpandedState();

  menuButton.addEventListener("click", () => {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof Element) {
      const link = event.target.closest("a");
      if (!link || !nav.contains(link)) {
        return;
      }

      closeMenu();
      focusLinkedSection(link);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (isMenuOpen()) {
        event.preventDefault();
        closeMenu({ restoreFocus: true });
      }
      return;
    }

    // Trap focus no menu responsivo se estiver aberto
    if (isMenuOpen() && event.key === "Tab") {
      const menuLinks = getMenuLinks();
      const focusable = [menuButton, ...menuLinks];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    }
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) {
      return;
    }

    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu({ restoreFocus: true });
    }
  });
}
