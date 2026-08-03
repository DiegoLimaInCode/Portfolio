import { projects, type Project } from "../../data/projects";
import { BlurText } from "../ui/BlurText";

function ProjectIcon({ icon }: Pick<Project, "icon">) {
  const common = { className: "case-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "automation") {
    return <svg {...common}><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="7" x2="10" y2="10"/><line x1="17" y1="7" x2="14" y2="10"/><line x1="7" y1="17" x2="10" y2="14"/><line x1="17" y1="17" x2="14" y2="14"/></svg>;
  }
  return <svg {...common}><rect x="2" y="2" width="20" height="20" rx="4"/><path d="m8 10 3 2-3 2"/><line x1="13" y1="14" x2="16" y2="14"/></svg>;
}

export function Cases() {
  return (
    <section className="section cases" id="cases">
      <div className="section-heading reveal">
        <p className="section-label">Cases e projetos</p>
        <BlurText as="h2">Projetos em evolução que mostram automações, integrações e backend na prática.</BlurText>
        <p className="section-description">Estudos e implementações focadas em fluxos com n8n, APIs REST e integração entre sistemas — com organização, clareza e manutenção previsível.</p>
      </div>
      <div className="case-grid" aria-label="Projetos e cases em desenvolvimento">
        {projects.map((project) => (
          <article className="case-card shine-card reveal" key={project.id}>
            {project.featured ? <span className="border-beam" aria-hidden="true" /> : null}
            <figure className="case-media"><img src={project.image} width="1280" height="720" alt={project.imageAlt} loading="lazy" decoding="async" /></figure>
            <div className="case-header"><span className="status-tag">{project.status}</span><ProjectIcon icon={project.icon} /></div>
            <p className="case-type">{project.type}</p>
            <h3>{project.title}</h3>
            <div className="case-detail"><strong>Contexto</strong><p>{project.context}</p></div>
            <div className="case-detail"><strong>Solução proposta</strong><p>{project.solution}</p></div>
            <div className="case-tags" aria-label="Stack do projeto">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
