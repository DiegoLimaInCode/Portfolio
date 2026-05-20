// terminal.js - Efeito de digitação no terminal interativo

function setupTerminalTyping() {
  const output = document.querySelector("[data-terminal-output]");
  if (!(output instanceof HTMLElement)) {
    return;
  }

  const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileMedia = window.matchMedia("(max-width: 960px)");
  const shouldReduceMotion = () => reducedMotionMedia.matches || mobileMedia.matches;

  const fallback = output.innerHTML;
  if (shouldReduceMotion()) {
    output.innerHTML = fallback;
    return;
  }

  const lines = [
    { text: "$ dotnet profile", command: true },
    { text: "C# | .NET | ASP.NET MVC" },
    { text: "Blazor | SQL | GitHub" },
    { text: "n8n | APIs | manutenção" },
    { text: "" },
    { text: "$ focus", command: true },
    { text: "web corporativo com" },
    { text: "clareza e evolução contínua" }
  ];

  let lineIndex = 0;
  let charIndex = 0;
  const renderedLines = [];

  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const renderLine = (line, visibleText) => {
    const escaped = escapeHtml(visibleText);
    return line.command ? `<span>${escaped}</span>` : escaped;
  };

  const typeNext = () => {
    output.classList.add("terminal-cursor");

    if (shouldReduceMotion()) {
      output.classList.remove("terminal-cursor");
      output.innerHTML = fallback;
      return;
    }

    if (lineIndex >= lines.length) {
      output.classList.add("terminal-cursor");
      return;
    }

    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.text.length) {
      charIndex += 1;
      output.innerHTML = [
        ...renderedLines,
        renderLine(currentLine, currentLine.text.slice(0, charIndex))
      ].join("\n");
      window.setTimeout(typeNext, 18 + Math.random() * 18);
      return;
    }

    renderedLines.push(renderLine(currentLine, currentLine.text));
    lineIndex += 1;
    charIndex = 0;
    output.innerHTML = renderedLines.join("\n");
    window.setTimeout(typeNext, lineIndex === 5 ? 360 : 120);
  };

  window.setTimeout(typeNext, 450);
}
