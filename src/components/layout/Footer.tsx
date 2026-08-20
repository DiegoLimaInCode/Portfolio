import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>{profile.name}</strong>
        <span>{profile.role} · {profile.location}</span>
      </div>
      <nav className="footer-links" aria-label="Links rápidos do portfólio">
        <a href="#perfil">Perfil</a>
        <a href="#cases">Cases</a>
        <a href="#experiencia">Experiência</a>
        <a href="#formacao">Formação</a>
        <a href="#disponibilidade">Disponibilidade</a>
        <a href="#contato">Contato</a>
        <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
      <div className="footer-meta">
        <span>C# · .NET · React · TypeScript · PostgreSQL · Entity Framework Core</span>
        <small>Portfólio publicado com React, Vite e GitHub Pages.</small>
      </div>
      <a className="back-to-top" href="#inicio">Topo</a>
    </footer>
  );
}
