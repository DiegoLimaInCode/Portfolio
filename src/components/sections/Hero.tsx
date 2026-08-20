import profilePhoto from "../../assets/images/profile-photo.jpg";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import { BlurText } from "../ui/BlurText";
import { Terminal } from "../ui/Terminal";

export function Hero() {
  return (
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
      </div>

      <div className="hero-copy">
        <p className="gradient-badge hero-eyebrow reveal">
          <span className="gradient-badge-dot" aria-hidden="true"></span>
          {profile.role} · {profile.location}
        </p>
        <BlurText as="h1" className="reveal">{profile.headline}</BlurText>
        <p className="hero-tagline shiny-text reveal">{profile.tagline}</p>
        <p className="hero-text reveal">{profile.bio}</p>

        <div className="hero-proof reveal" aria-label="Frentes de atuação">
          {profile.focus.map((item) => <span key={item}>{item}</span>)}
        </div>

        <div className="hero-metrics reveal" aria-label="Números do meu trabalho">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions reveal">
          <a className="button primary" href="#cases">
            Ver o case do PDV
          </a>
          <a className="button secondary" href={socialLinks.email.url}>
            Me chamar por e-mail
          </a>
          <a className="button secondary" href={socialLinks.github.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside className="hero-panel shine-card reveal" aria-label="Cartão de identificação de Diego Lima">
        <figure className="profile-card">
          <img
            src={profilePhoto}
            width="380"
            height="380"
            alt={`Retrato de ${profile.name}, ${profile.role}`}
            fetchPriority="high"
          />
          <figcaption>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
            <small>{profile.location}</small>
          </figcaption>
        </figure>

        <div className="hero-status-grid" aria-label="Stack principal">
          <div><span>API</span><strong>C#</strong></div>
          <div><span>Front</span><strong>React</strong></div>
          <div><span>Dados</span><strong>SQL</strong></div>
          <div><span>ORM</span><strong>EF Core</strong></div>
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
      </aside>

      <a className="hero-scroll-cue reveal" href="#perfil" aria-label="Rolar para o perfil">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </a>
    </section>
  );
}
