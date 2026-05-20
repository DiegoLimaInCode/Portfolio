# Story 004 - Refatoração profissional do portfólio

## Status

Ready for Review

## Objetivo

Refatorar o portfólio estático para ficar mais profissional, mais organizado e mais fácil de manter, separando os arquivos de estilo e de script em módulos com responsabilidades bem definidas, adotando um visual "Corporate Tech" e mantendo a abertura direta pelo navegador (`file://`).

## Acceptance Criteria

- [x] O projeto continua sendo um site estático sem necessidade de ferramentas de compilação ou gerenciadores de pacotes.
- [x] Todas as informações originais do portfólio foram preservadas (Diego Lima, Full Stack .NET, Saturnia Tecnologia, UVA, contatos, etc.).
- [x] Visual "Corporate Tech" mais sóbrio, moderno e limpo, utilizando tipografia com as fontes **Plus Jakarta Sans** e **JetBrains Mono**, nova paleta de cores e animação de fundo em canvas suavizada.
- [x] Nova estrutura de pastas implementada sob a pasta `site/`:
  - `site/styles/` para CSS modular.
  - `site/scripts/` para JS modular.
  - `site/assets/images/` e `site/assets/projects/` para imagens e ilustrações.
- [x] Acessibilidade e SEO mantidos (títulos semânticos, links acessíveis, skips, contraste e suporte a `prefers-reduced-motion`).
- [x] Validação realizada com `node --check` em todos os scripts e verificação de abertura direta pelo navegador.

## Tasks

- [x] Criar estrutura de subpastas em `site/styles/`, `site/scripts/` e `site/assets/`
- [x] Reorganizar recursos em subpastas de assets (`images/` e `projects/`)
- [x] Dividir `styles.css` em `tokens.css`, `base.css`, `layout.css`, `components.css` e `responsive.css`
- [x] Dividir `script.js` em `menu.js`, `background-canvas.js`, `terminal.js` e `main.js`
- [x] Atualizar links de estilos, fontes, fotos e scripts em `site/index.html`
- [x] Remover arquivos legados unificados (`site/styles.css` e `site/script.js`)
- [x] Validar a sintaxe dos novos scripts JavaScript utilizando `node --check`
- [x] Atualizar a documentação geral do repositório (`README.md` e `site/README.md`)

## Dev Agent Record

### Agent Model Used

Gemini 3.5 Flash / Antigravity

### Debug Log References

- Execução bem-sucedida de `node --check site/scripts/menu.js`
- Execução bem-sucedida de `node --check site/scripts/background-canvas.js`
- Execução bem-sucedida de `node --check site/scripts/terminal.js`
- Execução bem-sucedida de `node --check site/scripts/main.js`

### Completion Notes List

- **Abertura Direta (file://)**: Para manter a abertura dupla direto pelo arquivo `site/index.html` sem erros de CORS do protocolo de arquivos locais, evitamos o uso de módulos JavaScript (`type="module"`), utilizando o carregamento sequencial tradicional com tags `<script defer src="..."></script>`. Os scripts expõem funções globais limpas (`setupMenu()`, `setupBackgroundCanvas()`, `setupTerminalTyping()`) inicializadas de forma segura pelo orquestrador `main.js`.
- **Aparência "Corporate Tech"**:
  - Incorporamos o emparelhamento de fontes modernas do Google Fonts: **Plus Jakarta Sans** (estilo tech limpo para texto corrido) e **JetBrains Mono** (fonte monospaçada para trechos de código e terminais).
  - Atualizamos os tokens de cores com uma paleta ardósia e azul petróleo profundo (`#030712`, `#0b0f19`) e realces em ciano elétrico/azul claro (`#06b6d4`, `#38bdf8`), gerando excelente contraste de leitura.
  - Suavizamos a animação do canvas reduzindo as opacidades (`alpha`) e velocidades (`speed` e `vy`) das linhas de código flutuantes, criando um fundo dinâmico sutil que atua como textura e não como distração.
  - Implementamos efeitos de glassmorphism sutil (`backdrop-filter`) em cards, cabeçalho e menu móvel para dar uma sensação premium ao design.

### File List

- Novos arquivos de estilos:
  - `site/styles/tokens.css`
  - `site/styles/base.css`
  - `site/styles/layout.css`
  - `site/styles/components.css`
  - `site/styles/responsive.css`
- Novos arquivos de scripts:
  - `site/scripts/menu.js`
  - `site/scripts/background-canvas.js`
  - `site/scripts/terminal.js`
  - `site/scripts/main.js`
- Modificados:
  - `site/index.html`
  - `README.md`
  - `site/README.md`
- Deletados:
  - `site/styles.css`
  - `site/script.js`

### Change Log

- 2026-05-20: Story criada para refatoração profissional de código e visual do portfólio.
- 2026-05-20: Criação da estrutura de pastas modularizada e migração dos assets.
- 2026-05-20: Separação de CSS em tokens, base, layout, componentes e responsividade.
- 2026-05-20: Separação de JS em menu, animação de fundo canvas, digitação de terminal e arquivo principal.
- 2026-05-20: Validação de sintaxe realizada e arquivos legados excluídos.
