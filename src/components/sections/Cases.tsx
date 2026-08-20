import { projects } from "../../data/projects";
import { BlurText } from "../ui/BlurText";

export function Cases() {
  return (
    <section className="section cases" id="cases">
      <div className="section-heading reveal">
        <p className="section-label">Cases e projetos</p>
        <BlurText as="h2">Um sistema completo, com o código aberto para leitura.</BlurText>
        <p className="section-description">
          Prefiro mostrar um projeto que dá para abrir e entender por dentro do que uma lista de repositórios pela metade.
          O código está no GitHub, incluindo as migrations que registram como o banco evoluiu.
        </p>
      </div>

      <div className="case-grid case-grid--single" aria-label="Projetos e cases">
        {projects.map((project) => (
          <article className="case-card shine-card reveal" key={project.id}>
            {project.featured ? <span className="border-beam" aria-hidden="true" /> : null}

            <div className="case-header">
              <span className="status-tag">{project.status}</span>
              <svg className="case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="12" rx="2"/>
                <path d="M6 20h12"/>
                <path d="M9 16v4"/>
                <path d="M15 16v4"/>
                <path d="M6 8h5"/>
                <path d="M6 11h3"/>
              </svg>
            </div>

            <p className="case-type">{project.type}</p>
            <h3>{project.title}</h3>

            <div className="case-metrics" aria-label="Números da arquitetura">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="case-detail"><strong>O problema</strong><p>{project.context}</p></div>
            <div className="case-detail"><strong>Como eu resolvi</strong><p>{project.solution}</p></div>

            <div className="case-detail">
              <strong>O que o sistema faz</strong>
              <ul className="case-features">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>

            <div className="case-tags" aria-label="Stack do projeto">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>

            <div className="case-actions">
              <a className="button primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                Ver o código no GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
