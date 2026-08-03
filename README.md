# Portfolio | Diego Lima

Portfólio profissional de **Diego Lima**, desenvolvedor Full Stack .NET, migrado para React, Vite e TypeScript.

**Site:** [diegolimaincode.github.io/Portfolio](https://diegolimaincode.github.io/Portfolio/)

## Desenvolvimento local

```bash
npm install
npm run dev
```

Validações e prévia de produção:

```bash
npm run lint
npm run build
npm run preview
```

O Vite usa `base: "/Portfolio/"` para compatibilidade com o GitHub Pages. O workflow `.github/workflows/deploy-pages.yml` instala as dependências, gera `dist/` e publica o artefato automaticamente após push na branch `main`; também pode ser iniciado manualmente em **Actions**.
