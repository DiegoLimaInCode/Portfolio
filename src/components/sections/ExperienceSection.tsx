export function ExperienceSection() {
  return (
    <>
      <section className="section experience" id="experiencia">
        <div className="section-heading reveal">
          <p className="section-label">Experiência</p>
          <h2>Experiência prática em desenvolvimento e evolução de aplicações web.</h2>
        </div>

        <div className="experience-timeline reveal" aria-label="Linha do tempo profissional">
          <article className="experience-card" aria-label="Experiência na Saturnia Tecnologia">
            <span className="experience-marker" aria-hidden="true"></span>
            <div className="experience-body">
              <div className="experience-head">
                <div>
                  <p className="experience-company">Saturnia Tecnologia</p>
                  <h3>Saturnia Tecnologia</h3>
                  <p className="role">Desenvolvedor Full Stack - Estágio</p>
                </div>
                <p className="periodo">Maio de 2026 até o momento · Remoto</p>
              </div>
              <p>
                Atuação em ambiente remoto com desenvolvimento e manutenção de aplicações web no ecossistema .NET,
                incluindo ASP.NET e ASP.NET MVC. Participação em melhorias, correções e evolução de sistemas internos,
                com foco em estabilidade, clareza de implementação e suporte às demandas do negócio.
              </p>
              <ul className="experience-list" aria-label="Responsabilidades principais">
                <li>Desenvolvimento e manutenção de aplicações web com C#, ASP.NET e ASP.NET MVC.</li>
                <li>Correções, melhorias incrementais e suporte à evolução de sistemas internos.</li>
                <li>Organização de código, dados e versionamento com Git/GitHub.</li>
              </ul>
              <div className="experience-tags" aria-label="Tecnologias utilizadas">
                <span>ASP.NET</span>
                <span>ASP.NET MVC</span>
                <span>C#</span>
                <span>.NET</span>
                <span>SQL</span>
                <span>Git/GitHub</span>
              </div>
            </div>
          </article>
        </div>
      </section>

    </>
  );
}

