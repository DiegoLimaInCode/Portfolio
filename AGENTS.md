# Repository Guidelines

## Project Structure & Module Organization

This repository is a static personal portfolio. The public site lives in `site/`:

- `site/index.html`: page content, sections, metadata, and links.
- `site/styles/`: CSS split by responsibility (`tokens.css`, `base.css`, `layout.css`, `components.css`, `responsive.css`).
- `site/scripts/`: browser-native JavaScript split by behavior (`menu.js`, `background-canvas.js`, `terminal.js`, `main.js`).
- `site/assets/`: profile image and project illustrations.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment from `site/`.
- `docs/stories/`: project notes and implementation stories.

Assistant and local framework folders such as `.codex/`, `.aiox-core/`, and `.github/agents/` are not part of the published site.

## Build, Test, and Development Commands

There is no package manager or build step in this repo. Do not use `npm install` or `npm run` unless a future change adds a `package.json`.

```powershell
cd "C:\Users\diego\Documents\Projetos\meuportfolio real\site"
python -m http.server 8000
```

Serves the site locally at `http://localhost:8000`.

```powershell
Get-ChildItem site/scripts -Filter *.js | ForEach-Object { node --check $_.FullName }
```

Checks JavaScript syntax for the split browser scripts without running the browser UI.

You can also open `site/index.html` directly in a browser for a quick static review.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Keep CSS class names descriptive and kebab-case, for example `.hero-terminal` or `.project-card`. Prefer semantic HTML sections with clear IDs for navigation anchors. Keep JavaScript small, browser-native, and organized around named setup functions such as `setupBackgroundCanvas()`.

## Testing Guidelines

No automated test framework is currently configured. For every UI change, run the `node --check` loop over `site/scripts/*.js` and manually review the page on desktop and mobile widths. Check navigation anchors, mobile menu behavior, reduced-motion behavior, and that images in `site/assets/` load correctly.

## Commit & Pull Request Guidelines

Recent commits use short imperative messages, for example `Improve responsive portfolio experience` and `Remove duplicate hero profile photo`. Follow that style: describe the user-facing change in one concise sentence.

Pull requests should include a short description, validation steps performed, and screenshots or recordings for visual changes. Link related issues or story files when relevant.

## Security & Configuration Tips

Never commit real secrets. `.env`, local tool folders, `test-results/`, and `docs/references/` are intentionally ignored. Keep public-facing updates limited to `site/`, `.github/workflows/`, docs, and repository metadata unless there is a clear reason to expand scope.
