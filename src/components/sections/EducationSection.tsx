export function EducationSection() {
  return (
    <>
      <section className="section education" id="formacao">
        <div className="section-heading reveal">
          <p className="section-label">Formação acadêmica</p>
          <h2>Base acadêmica em Engenharia de Software.</h2>
        </div>

        <article className="education-card reveal" aria-label="Formação acadêmica na Universidade Veiga de Almeida">
          <div className="education-head">
            <div>
              <p className="education-kicker">Graduação em andamento</p>
              <h3>Universidade Veiga de Almeida (UVA)</h3>
            </div>
            <span>Engenharia de Software</span>
          </div>
          <p>
            Formação voltada à construção, análise e evolução de sistemas, conectando fundamentos de engenharia,
            programação, dados e organização de software à prática profissional com .NET.
          </p>
          <div className="education-tags" aria-label="Ênfases da formação">
            <span>Engenharia de Software</span>
            <span>Desenvolvimento Web</span>
            <span>Banco de Dados</span>
            <span>Arquitetura de Sistemas</span>
          </div>
        </article>
      </section>

    </>
  );
}

