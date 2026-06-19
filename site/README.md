# Site publicado (`site/`)

Esta pasta é a **raiz publicada** no GitHub Pages. Tudo aqui vai direto para [https://diegolimaincode.github.io/Portfolio/](https://diegolimaincode.github.io/Portfolio/).

Documentação completa do repositório: [README na raiz](../README.md).

## Arquivos principais

| Pasta / arquivo | Função |
|-----------------|--------|
| `index.html` | Conteúdo e seções da página |
| `styles/tokens.css` | Variáveis, cores, tipografia, animações |
| `styles/base.css` | Reset, body, tipografia global, acessibilidade |
| `styles/layout.css` | Header, hero, grids, footer |
| `styles/components.css` | Botões, cards, terminal, efeitos visuais |
| `styles/sections.css` | Hero, perfil, contato, disponibilidade |
| `styles/section-flow.css` | Competências, cases, experiência, formação |
| `styles/responsive.css` | Breakpoints mobile/desktop |
| `scripts/*.js` | Menu, canvas, terminal, animações e scroll |
| `assets/images/` | Foto de perfil |
| `assets/projects/` | Capas dos cases (JPG) |

## Scripts (ordem de carregamento)

1. `menu.js`
2. `background-canvas.js`
3. `terminal.js`
4. `blur-text.js`
5. `card-3d.js`
6. `scroll-reveal.js`
7. `scroll-progress.js`
8. `main.js`

## Servir localmente

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000` com o terminal dentro de `site/`.