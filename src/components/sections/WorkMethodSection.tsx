export function WorkMethodSection() {
  return (
    <>
      <section className="section work-method" id="modo-trabalho">
        <div className="section-heading reveal">
          <p className="section-label">Modo de trabalho</p>
          <h2>Como as competências viram entregas com clareza, manutenção e evolução controlada.</h2>
        </div>

        <div className="method-rail reveal" aria-label="Processo de trabalho em cinco etapas">
          <article>
            <span>Entendo o problema</span>
            <p>Alinho contexto, objetivo, regras de negócio e restrições antes de transformar demanda em solução técnica.</p>
          </article>
          <article>
            <span>Modelo dados e regras</span>
            <p>Organizo entidades, fluxos, validações e contratos para que a base do sistema sustente evolução.</p>
          </article>
          <article>
            <span>Construo a base</span>
            <p>Implemento por partes, com código claro, versionamento consistente e atenção aos pontos críticos.</p>
          </article>
          <article>
            <span>Testo, ajusto e documento</span>
            <p>Valido comportamento, corrijo inconsistências e registro decisões para facilitar continuidade.</p>
          </article>
          <article>
            <span>Evoluo sem bagunçar</span>
            <p>Melhoro o sistema de forma incremental, preservando leitura, rastreabilidade e manutenção.</p>
          </article>
        </div>
      </section>

    </>
  );
}

