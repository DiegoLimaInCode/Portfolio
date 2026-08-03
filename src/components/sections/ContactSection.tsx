import { socialLinks } from "../../data/socialLinks";
import { BlurText } from "../ui/BlurText";

export function ContactSection() {
  return (
    <>
      <section className="section contact shine-card" id="contato">
        <div className="contact-copy reveal">
          <p className="section-label">Contato</p>
          <BlurText as="h2">Vamos conversar sobre sistemas, automações ou oportunidades?</BlurText>
          <p>
            Se você precisa de alguém para construir, manter ou evoluir uma aplicação web,
            podemos conversar sobre o próximo passo.
          </p>
          <div className="contact-proof" aria-label="Áreas de conversa">
            <span>Sistemas .NET</span>
            <span>APIs e dados</span>
            <span>Automações n8n</span>
          </div>
        </div>

        <div className="contact-panel reveal" aria-label="Canais de contato e links profissionais">
          <a className="contact-link primary-link" href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Diego Lima">
            <span className="contact-link-icon" aria-hidden="true">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </span>
            <span>
              <strong>LinkedIn</strong>
              <small>Perfil profissional</small>
            </span>
          </a>
          <a className="contact-link" href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub de Diego Lima">
            <span className="contact-link-icon" aria-hidden="true">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </span>
            <span>
              <strong>GitHub</strong>
              <small>Projetos e código</small>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}





