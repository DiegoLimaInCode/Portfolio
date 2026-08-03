import type { Dispatch, RefObject, SetStateAction } from "react";
import { useEffect } from "react";

interface UseMobileMenuOptions {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
  navRef: RefObject<HTMLElement | null>;
}

export function useMobileMenu({ isOpen, setIsOpen, menuButtonRef, navRef }: UseMobileMenuOptions) {
  useEffect(() => {
    if (!isOpen) return;
    const button = menuButtonRef.current;
    const nav = navRef.current;
    const links = nav ? Array.from(nav.querySelectorAll<HTMLAnchorElement>("a")) : [];
    links[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        button?.focus();
      }
      if (event.key === "Tab" && button && links.length) {
        const focusable = [button, ...links];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !nav?.contains(event.target) && !button?.contains(event.target)) setIsOpen(false);
    };
    const onResize = () => { if (window.innerWidth > 960) setIsOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen, menuButtonRef, navRef, setIsOpen]);
}

