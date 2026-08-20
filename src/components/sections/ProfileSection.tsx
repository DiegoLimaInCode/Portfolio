import { BlurText } from "../ui/BlurText";

export function ProfileSection() {
  return (
    <section className="section profile" id="perfil">
      <div className="section-heading reveal">
        <p className="section-label">Perfil técnico</p>
        <BlurText as="h2">Backend é onde eu sou mais forte, mas eu entrego a tela também.</BlurText>
      </div>

      <div className="profile-grid">
        <article className="profile-summary reveal">
          <p>
            Meu estágio na Saturnia Tecnologia foi onde eu aprendi de verdade o que é entregar software.
            Peguei o CRM comercial da empresa numa versão inicial e saí de lá com 9 módulos completos entregues,
            escrevendo tanto as telas em React e TypeScript quanto os endpoints em C#/.NET que alimentam elas,
            com os dados em PostgreSQL.
          </p>
          <p>
            Fora do trabalho eu construo sistemas próprios para praticar o que ainda não domino.
            O principal é um ponto de venda em C# e WPF, separado em quatro camadas, onde eu treino modelagem
            de domínio, Entity Framework Core e organização de código que não vira bagunça depois da primeira entrega.
          </p>
          <p>
            Curso Engenharia de Software na Universidade Veiga de Almeida e estou aberto a oportunidades
            como desenvolvedor .NET, em estágio, júnior ou trainee.
          </p>
        </article>

        <div className="credential-list reveal" aria-label="Credenciais profissionais">
          <div>
            <div className="credential-head">
              <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg>
              <strong>Backend</strong>
            </div>
            <span>C#, .NET, ASP.NET MVC e APIs REST.</span>
          </div>
          <div>
            <div className="credential-head">
              <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="2.6"/><ellipse cx="12" cy="12" rx="10" ry="4.4"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)"/></svg>
              <strong>Frontend</strong>
            </div>
            <span>React, TypeScript, Vite, HTML e CSS.</span>
          </div>
          <div>
            <div className="credential-head">
              <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
              <strong>Dados</strong>
            </div>
            <span>PostgreSQL, SQL, Entity Framework Core e modelagem relacional.</span>
          </div>
          <div>
            <div className="credential-head">
              <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M9 15c2.3 0 4.7-2.3 4.7-6v-1c0-1.7 1.3-3 3-3h.3"/></svg>
              <strong>Fluxo de trabalho</strong>
            </div>
            <span>Git, GitHub, branches, pull requests e revisão.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
