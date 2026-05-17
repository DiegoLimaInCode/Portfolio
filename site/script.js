const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
}

const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileMedia = window.matchMedia("(max-width: 960px)");

const shouldReduceMotion = () => reducedMotionMedia.matches || mobileMedia.matches;

const setupBackgroundCanvas = () => {
  const canvas = document.querySelector("[data-bg-canvas]");
  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const codeLines = [
    "dotnet build --configuration Release",
    "aspnet pipeline: authenticated",
    "SELECT * FROM skills WHERE stack = '.NET'",
    "git commit -m \"refine web app\"",
    "blazor render components",
    "api/status 200 OK",
    "services.AddControllersWithViews()",
    "workflow n8n: synchronized",
    "public async Task<IActionResult>",
    "migration applied successfully"
  ];

  const glyphs = ["{}", "<>", "//", ";", "01", "=>", "[]"];

  const state = {
    ctx: null,
    raf: 0,
    width: 0,
    height: 0,
    terminals: [],
    streams: [],
    glyphs: []
  };

  const clearFrame = () => {
    if (state.ctx) {
      state.ctx.clearRect(0, 0, state.width, state.height);
    }
  };

  const stop = () => {
    if (state.raf) {
      cancelAnimationFrame(state.raf);
      state.raf = 0;
    }

    state.terminals = [];
    state.streams = [];
    state.glyphs = [];
    clearFrame();
  };

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    state.width = window.innerWidth;
    state.height = window.innerHeight;

    canvas.width = Math.floor(state.width * ratio);
    canvas.height = Math.floor(state.height * ratio);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;

    state.ctx = canvas.getContext("2d");
    if (state.ctx) {
      state.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      state.ctx.textBaseline = "top";
      state.ctx.textAlign = "left";
    }
  };

  const pick = (items) => items[Math.floor(Math.random() * items.length)];

  const buildScene = () => {
    const area = state.width * state.height;
    const terminalCount = Math.min(6, Math.max(3, Math.floor(area / 260000)));
    const streamCount = Math.min(18, Math.max(8, Math.floor(area / 95000)));
    const glyphCount = Math.min(42, Math.max(18, Math.floor(area / 48000)));

    state.terminals = Array.from({ length: terminalCount }, (_, index) => {
      const width = 230 + Math.random() * 180;
      const height = 92 + Math.random() * 62;
      const lineCount = 2 + Math.floor(Math.random() * 3);

      return {
        x: Math.random() * (state.width - width),
        y: Math.random() * state.height,
        width,
        height,
        speed: 0.035 + Math.random() * 0.045,
        alpha: 0.08 + Math.random() * 0.06,
        phase: index * 18,
        lines: Array.from({ length: lineCount }, () => pick(codeLines))
      };
    });

    state.streams = Array.from({ length: streamCount }, () => ({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      speed: 0.08 + Math.random() * 0.12,
      alpha: 0.045 + Math.random() * 0.055,
      text: pick(codeLines),
      size: 10 + Math.random() * 2
    }));

    state.glyphs = Array.from({ length: glyphCount }, () => ({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      vx: (Math.random() - 0.5) * 0.08,
      vy: 0.025 + Math.random() * 0.055,
      glyph: pick(glyphs),
      alpha: 0.05 + Math.random() * 0.08,
      size: 10 + Math.random() * 5
    }));
  };

  const drawTerminal = (terminal, tick) => {
    const { ctx } = state;
    if (!ctx) {
      return;
    }

    terminal.y += terminal.speed;
    if (terminal.y > state.height + terminal.height) {
      terminal.y = -terminal.height;
      terminal.x = Math.random() * Math.max(1, state.width - terminal.width);
    }

    const pulse = 0.75 + Math.sin((tick + terminal.phase) / 80) * 0.25;
    const alpha = terminal.alpha * pulse;

    ctx.fillStyle = `rgba(10, 18, 23, ${alpha})`;
    ctx.strokeStyle = `rgba(111, 231, 220, ${alpha * 1.6})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(terminal.x, terminal.y, terminal.width, terminal.height, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = `rgba(111, 231, 220, ${alpha * 1.4})`;
    ctx.font = "500 10px Cascadia Mono, Cascadia Code, Consolas, monospace";
    ctx.fillText("> runtime", terminal.x + 14, terminal.y + 13);

    ctx.fillStyle = `rgba(219, 235, 237, ${alpha * 1.7})`;
    ctx.font = "400 10px Cascadia Mono, Cascadia Code, Consolas, monospace";
    terminal.lines.forEach((line, index) => {
      const clipped = line.length > 42 ? `${line.slice(0, 39)}...` : line;
      ctx.fillText(clipped, terminal.x + 14, terminal.y + 36 + index * 19);
    });
  };

  const draw = (tick = 0) => {
    const { ctx } = state;
    if (!ctx) {
      return;
    }

    clearFrame();

    for (const terminal of state.terminals) {
      drawTerminal(terminal, tick);
    }

    for (const stream of state.streams) {
      stream.x -= stream.speed;
      if (stream.x < -420) {
        stream.x = state.width + Math.random() * 180;
        stream.y = Math.random() * state.height;
        stream.text = pick(codeLines);
      }

      ctx.font = `400 ${stream.size}px Cascadia Mono, Cascadia Code, Consolas, monospace`;
      ctx.fillStyle = `rgba(167, 180, 189, ${stream.alpha})`;
      ctx.fillText(stream.text, stream.x, stream.y);
    }

    for (const node of state.glyphs) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < -30) node.x = state.width + 30;
      if (node.x > state.width + 30) node.x = -30;
      if (node.y > state.height + 30) node.y = -30;

      ctx.font = `600 ${node.size}px Cascadia Mono, Cascadia Code, Consolas, monospace`;
      ctx.fillStyle = `rgba(111, 231, 220, ${node.alpha})`;
      ctx.fillText(node.glyph, node.x, node.y);
    }

    state.raf = requestAnimationFrame((nextTick) => draw(nextTick));
  };

  const start = () => {
    if (shouldReduceMotion()) {
      stop();
      return;
    }

    stop();
    resizeCanvas();
    buildScene();
    draw();
  };

  let resizeTimer = 0;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(start, 180);
  };

  start();
  window.addEventListener("resize", handleResize);
  reducedMotionMedia.addEventListener("change", start);
  mobileMedia.addEventListener("change", start);
};

const setupTerminalTyping = () => {
  const output = document.querySelector("[data-terminal-output]");
  if (!(output instanceof HTMLElement)) {
    return;
  }

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
};

setupBackgroundCanvas();
setupTerminalTyping();
