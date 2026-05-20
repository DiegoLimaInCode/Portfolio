# Meu Portfolio

Portfolio pessoal de Diego Lima, desenvolvido como site estatico com HTML, CSS e JavaScript.

## Estrutura

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
└── site/
    ├── index.html
    ├── styles/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   └── responsive.css
    ├── scripts/
    │   ├── menu.js
    │   ├── background-canvas.js
    │   ├── terminal.js
    │   └── main.js
    ├── README.md
    └── assets/
        ├── images/
        │   ├── profile-photo.jpeg
        │   └── avatar.svg
        └── projects/
            ├── project-automation.svg
            └── project-dashboard.svg
```

## Como visualizar

Abra `site/index.html` no navegador.

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente o conteudo da pasta `site/` quando houver push na branch `main`.

## Como evoluir

1. Edite textos, links e projetos em `site/index.html`.
2. Ajuste cores, espacamento e responsividade nos arquivos de `site/styles/`.
3. Ajuste comportamento de menu, canvas e terminal nos arquivos de `site/scripts/`.
4. Troque as imagens em `site/assets/` por fotos, screenshots ou artes reais.

## Validacao atual

O site estatico continua sem build tools na raiz. A validacao principal e abrir `site/index.html`, revisar o comportamento no navegador e executar:

```powershell
Get-ChildItem site/scripts -Filter *.js | ForEach-Object { node --check $_.FullName }
```

Esse loop valida a sintaxe dos arquivos JavaScript separados sem depender de wildcard do Node no PowerShell.
