# Portfolio | Diego Lima

Portfólio profissional estático de **Diego Lima**, desenvolvedor **Full Stack .NET**. O site apresenta perfil técnico, competências, cases, experiência, disponibilidade profissional e canais de contato — com visual dark premium, leve e compatível com GitHub Pages.

**Site publicado:** [https://diegolimaincode.github.io/Portfolio/](https://diegolimaincode.github.io/Portfolio/)

**Repositório:** [https://github.com/DiegoLimaInCode/Portfolio](https://github.com/DiegoLimaInCode/Portfolio)

---

## Sobre o projeto

Cartão de visita digital focado no mercado de trabalho. A proposta é comunicar clareza técnica, organização e maturidade no ecossistema .NET: backend, aplicações web corporativas, SQL, APIs, Git/GitHub e automações com n8n.

O visitante encontra:

- Hero com proposta de valor e painel técnico (terminal)
- Perfil, competências e modo de trabalho
- Cases em evolução (n8n e APIs/integrações)
- Experiência profissional e formação acadêmica
- Seção de disponibilidade (CLT, estágio, remoto, RJ)
- Contato direto (e-mail, LinkedIn, GitHub)

---

## Stack principal

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

- **HTML5** semântico (pt-BR)
- **CSS** modular (tokens, base, layout, componentes, seções, responsivo)
- **JavaScript** vanilla, sem framework nem build step
- **GitHub Pages** para publicação automática

Tipografia: Sora, IBM Plex Sans e JetBrains Mono (Google Fonts).

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
├── AGENTS.md
└── README.md
```

A pasta `site/` é a raiz publicada. Caminhos relativos (`./styles`, `./scripts`, `./assets`) devem ser preservados.

---

## Como rodar localmente

Na raiz do repositório:

```powershell
cd site
python -m http.server 8000
```

Abra [http://localhost:8000](http://localhost:8000).

Alternativa: abra `site/index.html` diretamente no navegador (alguns recursos podem se comportar melhor com servidor local).

### Validar JavaScript

```powershell
Get-ChildItem site/scripts -Filter *.js | ForEach-Object { node --check $_.FullName }
```

---

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy-pages.yml` publica o conteúdo de `site/` automaticamente em push na branch **`main`**.

Fluxo recomendado:

1. Trabalhar na branch de feature (ex.: `redesign/design-system-portfolio`)
2. Fazer push da branch
3. Abrir PR ou fazer merge em `main`
4. Após o push em `main`, o GitHub Actions publica o site

```powershell
git push origin redesign/design-system-portfolio
# Depois do merge em main:
git push origin main
```

---

## Branches

| Branch | Uso |
|--------|-----|
| `main` | Produção — dispara deploy no GitHub Pages |
| `redesign/design-system-portfolio` | Redesign atual com novo design system |

---

## Contato

- **E-mail:** [diegolimabarenco@gmail.com](mailto:diegolimabarenco@gmail.com)
- **LinkedIn:** [diego-lima-118556288](https://www.linkedin.com/in/diego-lima-118556288/)
- **GitHub:** [DiegoLimaInCode](https://github.com/DiegoLimaInCode)

---

## Licença

Projeto pessoal. O código e o conteúdo do portfólio pertencem a Diego Lima. Consulte o repositório para uso ou referência.