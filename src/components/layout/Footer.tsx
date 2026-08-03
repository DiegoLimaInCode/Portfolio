import { socialLinks } from "../../data/socialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>Diego Lima</strong>
        <span>Full Stack .NET Developer em Nilópolis, RJ</span>
      </div>
      <nav className="footer-links" aria-label="Links rápidos do portfólio">
        <a href="#perfil">Perfil</a>
        <a href="#cases">Cases</a>
        <a href="#experiencia">Experiência</a>
        <a href="#disponibilidade">Disponibilidade</a>
        <a href="#contato">Contato</a>
        {Object.values(socialLinks).map((link) => <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.label}>{link.label}</a>)}
      </nav>
      <div className="footer-meta">
        <span>C# · ASP.NET MVC · Blazor · SQL · GitHub · n8n</span>
        <small>Portfólio publicado com React, Vite e GitHub Pages.</small>
      </div>
      <a className="back-to-top" href="#inicio">Topo</a>
    </footer>
  );
}
