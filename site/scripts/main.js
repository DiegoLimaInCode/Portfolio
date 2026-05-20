// main.js - Inicialização geral do portfólio

document.addEventListener("DOMContentLoaded", () => {
  if (typeof setupMenu === "function") {
    setupMenu();
  }
  if (typeof setupBackgroundCanvas === "function") {
    setupBackgroundCanvas();
  }
  if (typeof setupTerminalTyping === "function") {
    setupTerminalTyping();
  }
});
