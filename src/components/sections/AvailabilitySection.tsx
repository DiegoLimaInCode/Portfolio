import { socialLinks } from "../../data/socialLinks";
import { BlurText } from "../ui/BlurText";

export function AvailabilitySection() {
  return (
    <section className="section availability" id="disponibilidade">
      <div className="availability-card shine-card reveal">
        <div className="availability-copy">
          <p className="section-label">Disponibilidade</p>
          <BlurText as="h2">Aberto a vagas de desenvolvedor .NET.</BlurText>
          <p>
            Acabei de encerrar o estágio na Saturnia e estou procurando a próxima posição, onde eu possa
            continuar entregando backend em C# e interface em React. Aceito estágio, júnior e trainee.
          </p>
          <div className="availability-tags" aria-label="Tipos de oportunidade">
            <span>Estágio</span>
            <span>Júnior</span>
            <span>Trainee</span>
            <span>CLT</span>
            <span>Remoto</span>
            <span>Híbrido · RJ</span>
            <span>Presencial · RJ</span>
          </div>
        </div>
        <div className="availability-panel reveal">
          <div className="availability-status" aria-label="Status atual">
            <span className="availability-dot" aria-hidden="true"></span>
            <div>
              <strong>Disponível para começar</strong>
              <small>Resposta em até um dia útil</small>
            </div>
          </div>
          <div className="availability-actions">
            <a className="button primary" href={socialLinks.email.url}>
              Enviar e-mail
            </a>
            <a className="button secondary" href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="button secondary" href={socialLinks.github.url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
