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
    ├── styles.css
    ├── script.js
    ├── README.md
    └── assets/
```

## Como visualizar

Abra `site/index.html` no navegador.

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente o conteudo da pasta `site/` quando houver push na branch `main`.

## Como evoluir

1. Edite textos, links e projetos em `site/index.html`.
2. Ajuste cores, espacamento e responsividade em `site/styles.css`.
3. Troque as imagens em `site/assets/` por fotos, screenshots ou artes reais.

## Validacao atual

O site estatico continua sem build tools na raiz. A validacao principal e abrir `site/index.html`, revisar o comportamento no navegador e executar `node --check site/script.js` para validar a sintaxe JavaScript.
