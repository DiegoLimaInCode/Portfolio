import { useRef, useState } from "react";
import { navigationItems } from "../../data/navigation";
import { useMobileMenu } from "../../hooks/useMobileMenu";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useMobileMenu({ isOpen, setIsOpen, menuButtonRef, navRef });
  const followSection = (href: `#${string}`) => {
    setIsOpen(false);
    window.setTimeout(() => {
      const section = document.getElementById(decodeURIComponent(href.slice(1)));
      if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }); }
    }, 0);
  };
  return <header className="site-header" data-header><div className="header-shell">
    <a className="brand" href="#inicio" aria-label="Ir para o início"><span className="brand-mark">DL</span><span className="brand-copy">Diego Lima</span></a>
    <nav ref={navRef} className={`site-nav${isOpen ? " is-open" : ""}`} id="primary-navigation" data-nav aria-label="Navegação principal">
      {navigationItems.map((item) => <a key={item.href} href={item.href} onClick={() => followSection(item.href)}>{item.label}</a>)}
    </nav>
    <a className="header-cta" href="#contato">Falar comigo</a>
    <button ref={menuButtonRef} className="menu-button" type="button" aria-label="Menu de navegação" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((value) => !value)}><span /><span /><span /></button>
  </div></header>;
}
