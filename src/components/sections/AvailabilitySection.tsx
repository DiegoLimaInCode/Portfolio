import { socialLinks } from "../../data/socialLinks";
import { BlurText } from "../ui/BlurText";

export function AvailabilitySection() {
  return (
    <>
      <section className="section availability" id="disponibilidade">
        <div className="availability-card shine-card reveal">
          <div className="availability-copy">
            <p className="section-label">Disponibilidade profissional</p>
            <BlurText as="h2">Aberto a oportunidades em desenvolvimento .NET e sistemas web.</BlurText>
            <p>
              Busco posições em que eu possa contribuir com backend sólido, aplicações corporativas,
              organização de dados e evolução sustentável de software — com comunicação clara e foco em entrega.
            </p>
            <div className="availability-tags" aria-label="Tipos de oportunidade">
              <span>CLT</span>
              <span>Estágio</span>
              <span>Remoto</span>
              <span>Híbrido · RJ</span>
              <span>Presencial · RJ</span>
            </div>
          </div>
          <div className="availability-panel reveal">
            <div className="availability-status" aria-label="Status atual">
              <span className="availability-dot" aria-hidden="true"></span>
              <div>
                <strong>Disponível para conversas</strong>
                <small>Resposta objetiva pelo LinkedIn</small>
              </div>
            </div>
            <div className="availability-actions">
              <a
                className="button primary button-shimmer"
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a className="button secondary" href="#contato">Entrar em contato</a>
              <a
                className="button secondary"
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}



