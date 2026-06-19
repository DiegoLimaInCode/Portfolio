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
  if (typeof setupBlurText === "function") {
    setupBlurText();
  }
  if (typeof setupCard3d === "function") {
    setupCard3d();
  }
  if (typeof setupScrollReveal === "function") {
    setupScrollReveal();
  }
  if (typeof setupScrollProgress === "function") {
    setupScrollProgress();
  }
});