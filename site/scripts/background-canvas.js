// background-canvas.js - Animação de fundo sutil de engenharia de software

function setupBackgroundCanvas() {
  const canvas = document.querySelector("[data-bg-canvas]");
  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileMedia = window.matchMedia("(max-width: 960px)");
  const shouldReduceMotion = () => reducedMotionMedia.matches || mobileMedia.matches;
  const shouldPause = () => document.hidden || shouldReduceMotion();

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
        speed: 0.015 + Math.random() * 0.025, // Velocidade reduzida para maior sobriedade
        alpha: 0.03 + Math.random() * 0.03, // Opacidade muito sutil
        phase: index * 18,
        lines: Array.from({ length: lineCount }, () => pick(codeLines))
      };
    });

    state.streams = Array.from({ length: streamCount }, () => ({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      speed: 0.03 + Math.random() * 0.06, // Movimento lento
      alpha: 0.012 + Math.random() * 0.018, // Quase imperceptível no fundo
      text: pick(codeLines),
      size: 10 + Math.random() * 2
    }));

    state.glyphs = Array.from({ length: glyphCount }, () => ({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      vx: (Math.random() - 0.5) * 0.04,
      vy: 0.01 + Math.random() * 0.025, // Movimento sutil
      glyph: pick(glyphs),
      alpha: 0.02 + Math.random() * 0.03, // Muito sutil
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

    // Fundo do card terminal flutuante
    ctx.fillStyle = `rgba(3, 7, 18, ${alpha})`;
    ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 1.5})`; // Ciano sutil
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(terminal.x, terminal.y, terminal.width, terminal.height, 8);
    ctx.fill();
    ctx.stroke();

    // Texto de cabeçalho
    ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 1.4})`;
    ctx.font = "500 10px JetBrains Mono, Cascadia Code, Consolas, monospace";
    ctx.fillText("> runtime", terminal.x + 14, terminal.y + 13);

    // Linhas de código do terminal
    ctx.fillStyle = `rgba(241, 245, 249, ${alpha * 1.7})`;
    ctx.font = "400 10px JetBrains Mono, Cascadia Code, Consolas, monospace";
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

      ctx.font = `400 ${stream.size}px JetBrains Mono, Cascadia Code, Consolas, monospace`;
      ctx.fillStyle = `rgba(148, 163, 184, ${stream.alpha})`;
      ctx.fillText(stream.text, stream.x, stream.y);
    }

    for (const node of state.glyphs) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < -30) node.x = state.width + 30;
      if (node.x > state.width + 30) node.x = -30;
      if (node.y > state.height + 30) node.y = -30;

      ctx.font = `600 ${node.size}px JetBrains Mono, Cascadia Code, Consolas, monospace`;
      ctx.fillStyle = `rgba(34, 211, 238, ${node.alpha})`;
      ctx.fillText(node.glyph, node.x, node.y);
    }

    state.raf = requestAnimationFrame((nextTick) => draw(nextTick));
  };

  const start = () => {
    if (shouldPause()) {
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
  document.addEventListener("visibilitychange", start);
  reducedMotionMedia.addEventListener("change", start);
  mobileMedia.addEventListener("change", start);
}
