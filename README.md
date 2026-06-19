# Portfolio | Diego Lima

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-2ea44f?style=flat-square)](https://diegolimaincode.github.io/Portfolio/)
[![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white)](site/index.html)
[![CSS3](https://img.shields.io/badge/CSS3-modular-1572B6?style=flat-square&logo=css3&logoColor=white)](site/styles/)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](site/scripts/)

Portfólio profissional estático de **Diego Lima**, desenvolvedor **Full Stack .NET**. O site apresenta perfil técnico, competências, cases, experiência, disponibilidade profissional e canais de contato — com visual dark premium, leve e compatível com GitHub Pages.

| | |
|---|---|
| **Site publicado** | [diegolimaincode.github.io/Portfolio](https://diegolimaincode.github.io/Portfolio/) |
| **Repositório** | [github.com/DiegoLimaInCode/Portfolio](https://github.com/DiegoLimaInCode/Portfolio) |

---

## Sobre o projeto

Cartão de visita digital focado no mercado de trabalho. A proposta é comunicar clareza técnica, organização e maturidade no ecossistema .NET: backend, aplicações web corporativas, SQL, APIs, Git/GitHub e automações com n8n.

O visitante encontra uma página única (`site/index.html`) com navegação por âncoras, CTAs de contato e seção dedicada à disponibilidade profissional (CLT, estágio, remoto, Rio de Janeiro).

### Seções do site

| Seção | Âncora | Conteúdo |
|-------|--------|----------|
| Hero | `#inicio` | Proposta de valor, stack em marquee e painel técnico (terminal) |
| Perfil | `#perfil` | Foto, resumo profissional e foco técnico |
| Competências | `#competencias` | Skills em cards (C#, .NET, Blazor, SQL, APIs, n8n…) |
| Modo de trabalho | `#modo-trabalho` | Processo e forma de atuar em projetos |
| Cases | `#cases` | Projetos em evolução: automações n8n e APIs/integrações |
| Experiência | `#experiencia` | Trajetória profissional em timeline |
| Formação | `#formacao` | Cursos e formação acadêmica |
| Disponibilidade | `#disponibilidade` | Tipos de vaga, localização e solicitação de currículo |
| Contato | `#contato` | E-mail, LinkedIn e GitHub |

### Funcionalidades de interface

- Navbar flutuante com destaque da seção ativa no scroll
- Barra de progresso de leitura
- Canvas de fundo animado (desativado em mobile e `prefers-reduced-motion`)
- Terminal com efeito de digitação
- Cards 3D, blur-text, scroll reveal e efeitos de borda/brilho
- Menu mobile com alvos de toque acessíveis (44px)
- Skip link, foco visível e metadados Open Graph / Twitter

---

## Stack principal (perfil profissional)

| Área | Tecnologias |
|------|-------------|
| Linguagem / backend | C#, .NET, ASP.NET, ASP.NET MVC |
| Frontend web | Blazor, HTML, CSS, JavaScript |
| Dados | SQL, modelagem relacional |
| Integrações | APIs REST, webhooks |
| Automação | n8n |
| Versionamento | Git, GitHub |

---

## Tecnologias do site

- **HTML5** semântico em português (pt-BR)
- **CSS** modular em 7 arquivos (tokens, base, layout, componentes, seções, fluxo, responsivo)
- **JavaScript** vanilla — sem framework, bundler ou build step
- **GitHub Pages** + GitHub Actions para publicação automática

Tipografia: [Sora](https://fonts.google.com/specimen/Sora), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.

### Princípios do projeto

- Site estático, leve e fácil de manter
- Compatível com GitHub Pages (caminhos relativos `./styles`, `./scripts`, `./assets`)
- Modularidade: cada seção pode ser alterada sem quebrar o restante
- Diretrizes em `docs/portfolio-design-doctrine.md` e `docs/modularity-doctrine.md`

---

## Estrutura do repositório

```text
.
├── .github/workflows/deploy-pages.yml   # Deploy GitHub Pages (branch main)
├── docs/                                # Doutrina de design e modularidade
├── site/                                # Site publicado (raiz do Pages)
│   ├── index.html
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   ├── section-flow.css
│   │   └── responsive.css
│   ├── scripts/
│   │   ├── menu.js
│   │   ├── background-canvas.js
│   │   ├── terminal.js
│   │   ├── blur-text.js
│   │   ├── card-3d.js
│   │   ├── scroll-reveal.js
│   │   ├── scroll-progress.js
│   │   └── main.js
│   └── assets/
│       ├── images/
│       │   ├── profile-photo.jpeg
│       │   └── avatar.svg
│       └── projects/
│           ├── project-n8n-automation.jpg
│           └── project-apis-integration.jpg
├── AGENTS.md                            # Regras para contribuição e manutenção
└── README.md
```

A pasta `site/` é a raiz publicada. Não adicione build step nem dependências npm sem necessidade explícita.

---

## Como rodar localmente

**Pré-requisito:** Python 3 (ou qualquer servidor HTTP estático).

```powershell
cd site
python -m http.server 8000
```

Abra [http://localhost:8000](http://localhost:8000).

Alternativa: abra `site/index.html` diretamente no navegador (alguns recursos se comportam melhor com servidor local).

### Validar JavaScript

```powershell
Get-ChildItem site/scripts -Filter *.js | ForEach-Object { node --check $_.FullName }
```

Revise manualmente em larguras mobile (≤960px) e desktop após mudanças de UI.

---

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy-pages.yml` publica o conteúdo de `site/` automaticamente em push na branch **`main`**.

Fluxo recomendado:

1. Trabalhar na branch de feature (ex.: `redesign/design-system-portfolio`)
2. Fazer push da branch para [DiegoLimaInCode/Portfolio](https://github.com/DiegoLimaInCode/Portfolio)
3. Abrir PR ou fazer merge em `main`
4. Após o push em `main`, o GitHub Actions publica o site em ~1–2 minutos

```powershell
git push origin redesign/design-system-portfolio
# Depois do merge em main:
git push origin main
```

> **Importante:** alterações só aparecem no ar após merge em `main`. A branch de feature sozinha não dispara o deploy.

---

## Branches

| Branch | Uso |
|--------|-----|
| `main` | Produção — dispara deploy no GitHub Pages |
| `redesign/design-system-portfolio` | Redesign atual com novo design system |

---

## Autor

**Diego Lima** — Desenvolvedor Full Stack .NET

- **E-mail:** [diegolimabarenco@gmail.com](mailto:diegolimabarenco@gmail.com)
- **LinkedIn:** [diego-lima-118556288](https://www.linkedin.com/in/diego-lima-118556288/)
- **GitHub:** [DiegoLimaInCode](https://github.com/DiegoLimaInCode)

---

## Licença

Projeto pessoal. O código e o conteúdo do portfólio pertencem a Diego Lima. Consulte o repositório para uso ou referência.