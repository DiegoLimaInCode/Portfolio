# Modularity Doctrine

## Principio Central

"Nada e isolado, mas nada deve depender de tudo."

O projeto deve evoluir como um conjunto de blocos conectados por contratos claros. Cada parte precisa colaborar com o todo, mas sem criar acoplamento que torne qualquer mudanca arriscada.

## Regras Obrigatorias

- Cada bloco deve ser autonomo e plugavel.
- Evitar contextos ou arquivos acima de 500 linhas.
- Nenhum modulo deve depender diretamente de outro sem interface clara.
- Toda comunicacao deve ocorrer por contratos claros e pontos publicos de uso.
- Cada secao deve poder ser testada, alterada ou removida sem quebrar o restante do site.
- CSS deve continuar separado por responsabilidade.
- JavaScript deve continuar simples e separado por responsabilidade.
- Nao adicionar framework.
- Nao adicionar build.
- Nao adicionar dependencias desnecessarias.
- Nao transformar o projeto em monolito.
- Preservar compatibilidade com GitHub Pages.
- Preservar caminhos relativos como `./styles`, `./scripts` e `./assets`.
- Alterar scripts apenas se a nova estrutura exigir.
- Sempre validar JavaScript com `node --check` apos mudancas em scripts.

## Responsabilidades Dos Arquivos CSS

- `tokens.css`: variaveis, tokens de cor, tipografia, radius, sombras, transicoes e animacoes base.
- `base.css`: reset, base global, HTML/body, tipografia global, fundos e foco acessivel.
- `layout.css`: estrutura, header, grids, secoes, hero, footer e organizacao espacial.
- `components.css`: botoes, cards, badges, terminal, timelines, blocos reutilizaveis e elementos visuais.
- `responsive.css`: breakpoints, menu mobile, ajustes de viewport e preferencias de acessibilidade.

## Responsabilidades Dos Arquivos JavaScript

- `menu.js`: comportamento da navegacao e menu responsivo.
- `background-canvas.js`: animacao sutil de fundo e seus fallbacks.
- `terminal.js`: efeito de digitacao do terminal e fallback de reduced motion.
- `main.js`: inicializacao dos comportamentos globais no `DOMContentLoaded`.

## Hooks Publicos Do JavaScript

Preservar ou atualizar em conjunto os hooks usados pelo JavaScript:

- `data-menu-button`
- `data-nav`
- `data-bg-canvas`
- `data-terminal-output`

Esses atributos sao contratos publicos entre HTML e JavaScript. Se um hook mudar no HTML, o script correspondente deve ser atualizado na mesma etapa.

## Contratos Entre Modulos

- HTML fornece estrutura semantica, IDs de secao, classes e hooks `data-*`.
- CSS consome classes e estrutura sem depender de JavaScript para layout essencial.
- JavaScript consome apenas hooks publicos e deve falhar silenciosamente quando um elemento opcional nao existir.
- Assets devem ser referenciados por caminhos relativos dentro de `site/`.
- Cada secao deve ter classes e conteudo suficientes para funcionar de forma independente.

## Regras Para Mudancas Grandes

- Dividir mudancas por secao ou responsabilidade.
- Evitar editar HTML, CSS e JS de forma ampla sem necessidade.
- Manter alteracoes pequenas, revisaveis e reversiveis.
- Nao misturar redesign visual com alteracao estrutural profunda sem motivo.
- Nao criar dependencias globais novas quando classes, tokens ou hooks claros resolvem.

## Compatibilidade Com GitHub Pages

- O site publicado vive em `site/`.
- `site/index.html` deve continuar sendo a entrada principal.
- O workflow publica a pasta `site` diretamente.
- Nao depender de arquivos fora de `site/` para renderizar a pagina publica.
- Nao exigir instalacao, build ou servidor especial para publicar.

## Ordem Oficial De Implementacao

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

## Criterios De Aceite Modular

- Uma secao pode ser alterada sem exigir reescrita das demais.
- Um componente visual pode ser ajustado por token ou classe clara.
- Um script pode ser validado isoladamente com `node --check`.
- Remover canvas ou terminal nao deve quebrar navegacao, layout ou conteudo.
- O site continua funcional como HTML, CSS e JavaScript estaticos.
