
import profilePhoto from "../../assets/images/profile-photo.jpeg";
import { socialLinks } from "../../data/socialLinks";
import { BlurText } from "../ui/BlurText";
import { Terminal } from "../ui/Terminal";

export function Hero() {
  return (
    <>
      <section className="hero section" id="inicio">
        <div className="hero-frame" aria-hidden="true">
          <div className="hero-spotlight">
            <svg className="spotlight-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
              <g filter="url(#spotlight-filter)">
                <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fillOpacity="0.16"></ellipse>
              </g>
              <defs>
                <filter id="spotlight-filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
          <div className="hero-lines">
            <span className="hero-line-accent hero-line-accent--left"></span>
            <span className="hero-line-accent hero-line-accent--right"></span>
          </div>
          <svg className="grid-pattern" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M.5 40V.5H40" fill="none" stroke="currentColor" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)"></rect>
          </svg>
        </div>

        <div className="hero-copy">
          <p className="gradient-badge hero-eyebrow reveal">
            <span className="gradient-badge-dot" aria-hidden="true"></span>
            Full Stack .NET Developer · Nilópolis, RJ
          </p>
          <BlurText as="h1" className="reveal">Construo aplicações web com backend forte, dados bem organizados e código preparado para evoluir.</BlurText>
          <p className="hero-tagline shiny-text reveal">Valor de negócio, clareza técnica e software pronto para evoluir.</p>
          <p className="hero-text reveal">
            Sou Diego Lima, desenvolvedor Full Stack com foco em C#, ASP.NET MVC, Blazor, SQL, Git/GitHub
            e automações com n8n. Crio soluções web claras, sustentáveis e fáceis de manter.
          </p>

          <div className="hero-proof reveal" aria-label="Sinais de foco profissional">
            <span>.NET backend</span>
            <span>APIs e integrações</span>
            <span>SQL organizado</span>
            <span>Automações n8n</span>
          </div>

          <div className="hero-badges reveal" aria-label="Especialidades principais">
            <span>C# · .NET</span>
            <span>ASP.NET MVC · Blazor</span>
            <span>SQL · APIs</span>
            <span>Git/GitHub · n8n</span>
          </div>

          <div className="hero-metrics reveal" aria-label="Resumo profissional rápido">
            <div>
              <strong>Full Stack</strong>
              <span>Foco principal</span>
            </div>
            <div>
              <strong>.NET</strong>
              <span>Ecossistema</span>
            </div>
            <div>
              <strong>Disponível</strong>
              <span>Oportunidades 2026</span>
            </div>
          </div>

          <div className="hero-actions reveal">
            <a className="button primary button-shimmer" href="#cases">
              Ver projetos
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a className="button secondary" href="#contato">
              Entrar em contato
            </a>
            <a className="button secondary" href={socialLinks.github.url} target="_blank" rel="noopener noreferrer">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.44 5.44 0 0 0 3.6 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-panel shine-card reveal" data-card-3d aria-label="Painel técnico de Diego Lima">
          <div data-card-3d-inner>
          <figure className="profile-card" aria-label="Foto profissional de Diego Lima">
            <img src={profilePhoto} width="180" height="180" alt="Retrato profissional de Diego Lima, desenvolvedor Full Stack .NET" />
            <figcaption>
              <strong>Diego Lima</strong>
              <span>Full Stack .NET Developer</span>
              <small>Nilópolis, Rio de Janeiro, Brasil</small>
            </figcaption>
          </figure>

          <div className="hero-status-grid" aria-label="Resumo de foco técnico">
            <div>
              <span>Base</span>
              <strong>.NET</strong>
            </div>
            <div>
              <span>Dados</span>
              <strong>SQL</strong>
            </div>
            <div>
              <span>Web</span>
              <strong>MVC</strong>
            </div>
            <div>
              <span>Fluxos</span>
              <strong>n8n</strong>
            </div>
          </div>

          <div className="terminal-card" aria-label="Terminal com resumo técnico">
            <div className="terminal-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="terminal-title">portfolio.runtime</p>
            <pre data-terminal-output><Terminal /></pre>
          </div>
          </div>
        </aside>

        <a className="hero-scroll-cue reveal" href="#perfil" aria-label="Rolar para o perfil">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
      </section>
    </>
  );
}




