# Repository Guidelines

## Project Shape

- This is Diego Lima's static personal portfolio. The published site lives in `site/`.
- GitHub Pages deploys the exact contents of `site/` via `.github/workflows/deploy-pages.yml` on pushes to `main`.
- There is no framework, package manager, bundler, or build step. Do not add one unless explicitly requested.
- Keep the project simple, lightweight, static, and compatible with GitHub Pages.

## Official Doctrine

- Redesign work must follow `docs/portfolio-design-doctrine.md` and `docs/modularity-doctrine.md`.
- Visual direction: dark premium, technological, clean, professional, readable, and trustworthy.
- Professional focus: C#, .NET, ASP.NET MVC, Blazor, SQL, Git/GitHub, APIs, and n8n automations.
- Core modularity rule: "Nada e isolado, mas nada deve depender de tudo."

## Hard Constraints

- Do not add a framework.
- Do not add a build step.
- Do not add unnecessary dependencies.
- Do not turn the project into a monolith.
- Preserve GitHub Pages compatibility and keep public assets inside `site/`.
- Preserve relative paths such as `./styles`, `./scripts`, and `./assets`.
- Split large changes by section; each section should be alterable, testable, or removable without breaking the rest of the site.

## CSS Responsibilities

- `site/styles/tokens.css`: variables, design tokens, colors, type, radius, shadows, transitions, and base animations.
- `site/styles/base.css`: reset/base global, HTML/body, typography base, backgrounds, focus states, and global accessibility.
- `site/styles/layout.css`: page structure, header, grids, sections, hero layout, and footer layout.
- `site/styles/components.css`: reusable components such as buttons, cards, badges, terminal, timelines, and visual blocks.
- `site/styles/responsive.css`: breakpoints, mobile menu styles, viewport adjustments, and reduced-motion/mobile overrides.

## JavaScript Responsibilities

- Keep browser scripts simple, global, and separated by responsibility.
- Current load order is `menu.js`, `background-canvas.js`, `terminal.js`, then `main.js`.
- `main.js` initializes `setupMenu()`, `setupBackgroundCanvas()`, and `setupTerminalTyping()` on `DOMContentLoaded`.
- Alter scripts only when the new structure requires it.

## Public JS Hooks

- Preserve or update together the public hooks used by JavaScript: `data-menu-button`, `data-nav`, `data-bg-canvas`, and `data-terminal-output`.
- These hooks are contracts between HTML and JS. If markup changes a hook, update the corresponding script in the same change.
- Canvas and terminal behavior must still fall back for `prefers-reduced-motion: reduce` and mobile widths (`max-width: 960px`).

## Local Run And Verification

- Serve locally from the published root: `python -m http.server 8000` with workdir `site/`, then open `http://localhost:8000`.
- When JavaScript changes, check syntax from the repo root with PowerShell: `Get-ChildItem site/scripts -Filter *.js | ForEach-Object { node --check $_.FullName }`.
- For UI changes, manually review desktop and mobile widths; there is no automated browser test suite.

## Implementation Order

1. Criar doutrina em `docs/`.
2. Atualizar `AGENTS.md` com a doutrina.
3. Ajustar `tokens.css` e `base.css`.
4. Redesenhar hero.
5. Redesenhar competencias.
6. Redesenhar projetos/cases.
7. Redesenhar experiencia/formacao/processo.
8. Redesenhar contato/footer.
9. Revisar responsividade.
10. Revisar acessibilidade/performance.

## Conventions

- Use two-space indentation in HTML, CSS, and JavaScript.
- Keep CSS class names descriptive and kebab-case.
- Metadata in `site/index.html` currently points to `https://diegolimaincode.github.io/Portfolio/`; update canonical, Open Graph, and Twitter URLs together if the repo slug or domain changes.
- Recent commits use short imperative messages such as `Refine portfolio UX and accessibility`.
