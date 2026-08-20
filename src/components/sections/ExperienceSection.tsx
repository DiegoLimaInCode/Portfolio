import { experienceEntries } from "../../data/experience";
import { BlurText } from "../ui/BlurText";

export function ExperienceSection() {
  return (
    <section className="section experience" id="experiencia">
      <div className="section-heading reveal">
        <p className="section-label">Experiência</p>
        <BlurText as="h2">Onde eu levei um produto de versão inicial até pronto para venda.</BlurText>
      </div>

      <div className="experience-timeline reveal" aria-label="Linha do tempo profissional">
        {experienceEntries.map((entry) => (
          <article className="experience-card" key={entry.id} aria-label={`Experiência na ${entry.company}`}>
            <span className="experience-marker" aria-hidden="true"></span>
            <div className="experience-body">
              <div className="experience-head">
                <div>
                  <p className="experience-company">{entry.arrangement}</p>
                  <h3>{entry.company}</h3>
                  <p className="role">{entry.role}</p>
                </div>
                <p className="periodo">{entry.period}</p>
              </div>
              <p>{entry.summary}</p>
              <ul className="experience-list" aria-label="Principais entregas">
                {entry.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
              <div className="experience-tags" aria-label="Tecnologias utilizadas">
                {entry.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
