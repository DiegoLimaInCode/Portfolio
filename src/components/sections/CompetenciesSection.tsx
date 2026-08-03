import { skillGroups, type SkillIcon } from "../../data/skills";
import { BlurText } from "../ui/BlurText";

function CapabilityIcon({ icon }: { icon: SkillIcon }) {
  const common = { className: "capability-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "dotnet") return <svg {...common}><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="m8 10 3 2-3 2"/><path d="M14 10v4M12 12h4"/></svg>;
  if (icon === "api") return <svg {...common}><rect x="2" y="2" width="20" height="20" rx="4"/><path d="m8 10 3 2-3 2"/><line x1="13" y1="14" x2="16" y2="14"/></svg>;
  if (icon === "database") return <svg {...common}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>;
  if (icon === "automation") return <svg {...common}><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="7" x2="10" y2="10"/><line x1="17" y1="7" x2="14" y2="10"/><line x1="7" y1="17" x2="10" y2="14"/><line x1="17" y1="17" x2="14" y2="14"/></svg>;
  if (icon === "git") return <svg {...common}><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M9 15c2.3 0 4.7-2.3 4.7-6v-1c0-1.7 1.3-3 3-3h.3"/></svg>;
  return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/></svg>;
}

export function CompetenciesSection() {
  return (
    <section className="section competencies" id="competencias">
      <div className="section-heading reveal">
        <p className="section-label">Competências e entregas</p>
        <BlurText as="h2">Domínios de atuação conectados ao que consigo construir e manter.</BlurText>
        <p className="section-description">Minha stack principal é aplicada em sistemas web, backend, dados, integrações e automações com foco em clareza, organização e evolução contínua.</p>
      </div>
      <div className="competency-grid" aria-label="Competências profissionais por domínio de entrega">
        {skillGroups.map((skill) => (
          <article className="capability-card shine-card reveal" data-card-3d={skill.hasTilt ? "" : undefined} key={skill.id}>
            <div className="capability-header"><span className="card-index">{skill.index}</span><CapabilityIcon icon={skill.icon} /></div>
            <p className="capability-kicker">{skill.kicker}</p>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="capability-tags" aria-label="Tecnologias deste domínio">{skill.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
