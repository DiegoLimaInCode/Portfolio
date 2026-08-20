import { educationEntries } from "../../data/education";

export function EducationSection() {
  return (
    <section className="section education" id="formacao">
      <div className="section-heading reveal">
        <p className="section-label">Formação acadêmica</p>
        <h2>Base acadêmica em Engenharia de Software.</h2>
      </div>

      {educationEntries.map((entry) => (
        <article className="education-card reveal" key={entry.id} aria-label={`Formação na ${entry.institution}`}>
          <div className="education-head">
            <div>
              <p className="education-kicker">{entry.status}</p>
              <h3>{entry.institution}</h3>
            </div>
            <span>{entry.course}</span>
          </div>
          <p>{entry.description}</p>
          <div className="education-tags" aria-label="Ênfases da formação">
            {entry.subjects.map((subject) => <span key={subject}>{subject}</span>)}
          </div>
        </article>
      ))}
    </section>
  );
}
