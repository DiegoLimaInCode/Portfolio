import { BlurText } from "../ui/BlurText";

export function ProfileSection() {
  return (
    <>
      <section className="section profile" id="perfil">
        <div className="section-heading reveal">
          <p className="section-label">Perfil técnico</p>
          <BlurText as="h2">Atuação full stack orientada a sistemas web corporativos no ecossistema .NET.</BlurText>
        </div>

        <div className="profile-grid">
          <article className="profile-summary reveal">
            <p>
              Curso Engenharia de Software na Universidade Veiga de Almeida e atuo com desenvolvimento web no ambiente .NET.
              Minha base técnica combina backend, aplicações ASP.NET, persistência de dados, organização de código e suporte
              à evolução de sistemas internos.
            </p>
            <p>
              O foco é construir software com leitura clara, manutenção previsível e colaboração objetiva com Git/GitHub,
              conectando demandas de negócio a soluções técnicas sustentáveis.
            </p>
          </article>

          <div className="credential-list reveal" aria-label="Credenciais profissionais">
            <div>
              <div className="credential-head">
                <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg>
                <strong>Base principal</strong>
              </div>
              <span>C#, .NET, ASP.NET, ASP.NET MVC e Blazor.</span>
            </div>
            <div>
              <div className="credential-head">
                <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
                <strong>Dados</strong>
              </div>
              <span>SQL, modelagem relacional e consultas para aplicações web.</span>
            </div>
            <div>
              <div className="credential-head">
                <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M9 15c2.3 0 4.7-2.3 4.7-6v-1c0-1.7 1.3-3 3-3h.3"/></svg>
                <strong>Fluxo</strong>
              </div>
              <span>Git, GitHub, revisão, padronização e evolução incremental.</span>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}


