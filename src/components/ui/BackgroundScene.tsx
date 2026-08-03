import { useEffect, useRef } from "react";

interface TerminalNode { x: number; y: number; width: number; height: number; speed: number; alpha: number; phase: number; lines: string[] }
interface StreamNode { x: number; y: number; speed: number; alpha: number; text: string; size: number }
interface GlyphNode { x: number; y: number; vx: number; vy: number; glyph: string; alpha: number; size: number }
const codeLines = ["dotnet build --configuration Release", "aspnet pipeline: authenticated", "SELECT * FROM skills WHERE stack = '.NET'", "git commit -m \"refine web app\"", "blazor render components", "api/status 200 OK", "services.AddControllersWithViews()", "workflow n8n: synchronized", "public async Task<IActionResult>", "migration applied successfully"];
const glyphValues = ["{}", "<>", "//", ";", "01", "=>", "[]"];
const pick = <T,>(values: readonly T[]): T => values[Math.floor(Math.random() * values.length)]!;

export function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; const context = canvas?.getContext("2d"); if (!canvas || !context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)"); const mobile = window.matchMedia("(max-width: 960px)");
    let width = 0; let height = 0; let frame = 0; let timer = 0; let terminals: TerminalNode[] = []; let streams: StreamNode[] = []; let glyphs: GlyphNode[] = [];
    const resize = () => { const ratio = Math.min(window.devicePixelRatio || 1, 1.5); width = window.innerWidth; height = window.innerHeight; canvas.width = Math.floor(width * ratio); canvas.height = Math.floor(height * ratio); canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; context.setTransform(ratio, 0, 0, ratio, 0, 0); context.textBaseline = "top"; };
    const scene = () => { const area = width * height;
      terminals = Array.from({ length: Math.min(6, Math.max(3, Math.floor(area / 260000))) }, (_, phase) => { const nodeWidth = 230 + Math.random() * 180; return { x: Math.random() * Math.max(1, width - nodeWidth), y: Math.random() * height, width: nodeWidth, height: 92 + Math.random() * 62, speed: .015 + Math.random() * .025, alpha: .03 + Math.random() * .03, phase: phase * 18, lines: Array.from({ length: 2 + Math.floor(Math.random() * 3) }, () => pick(codeLines)) }; });
      streams = Array.from({ length: Math.min(18, Math.max(8, Math.floor(area / 95000))) }, () => ({ x: Math.random() * width, y: Math.random() * height, speed: .03 + Math.random() * .06, alpha: .012 + Math.random() * .018, text: pick(codeLines), size: 10 + Math.random() * 2 }));
      glyphs = Array.from({ length: Math.min(42, Math.max(18, Math.floor(area / 48000))) }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .04, vy: .01 + Math.random() * .025, glyph: pick(glyphValues), alpha: .02 + Math.random() * .03, size: 10 + Math.random() * 5 }));
    };
    const draw = (tick = 0) => { context.clearRect(0, 0, width, height);
      terminals.forEach((node) => { node.y += node.speed; if (node.y > height + node.height) { node.y = -node.height; node.x = Math.random() * Math.max(1, width - node.width); } const alpha = node.alpha * (.75 + Math.sin((tick + node.phase) / 80) * .25); context.fillStyle = `rgba(3,7,18,${alpha})`; context.strokeStyle = `rgba(34,211,238,${alpha * 1.5})`; context.beginPath(); context.roundRect(node.x, node.y, node.width, node.height, 8); context.fill(); context.stroke(); context.fillStyle = `rgba(34,211,238,${alpha * 1.4})`; context.font = "500 10px JetBrains Mono, monospace"; context.fillText("> runtime", node.x + 14, node.y + 13); context.fillStyle = `rgba(241,245,249,${alpha * 1.7})`; node.lines.forEach((line, index) => context.fillText(line.length > 42 ? `${line.slice(0, 39)}...` : line, node.x + 14, node.y + 36 + index * 19)); });
      streams.forEach((node) => { node.x -= node.speed; if (node.x < -420) { node.x = width + Math.random() * 180; node.y = Math.random() * height; node.text = pick(codeLines); } context.font = `400 ${node.size}px JetBrains Mono, monospace`; context.fillStyle = `rgba(148,163,184,${node.alpha})`; context.fillText(node.text, node.x, node.y); });
      glyphs.forEach((node) => { node.x += node.vx; node.y += node.vy; if (node.x < -30) node.x = width + 30; if (node.x > width + 30) node.x = -30; if (node.y > height + 30) node.y = -30; context.font = `600 ${node.size}px JetBrains Mono, monospace`; context.fillStyle = `rgba(34,211,238,${node.alpha})`; context.fillText(node.glyph, node.x, node.y); });
      frame = requestAnimationFrame(draw);
    };
    const stop = () => { if (frame) cancelAnimationFrame(frame); frame = 0; context.clearRect(0, 0, width, height); };
    const start = () => { stop(); resize(); scene(); if (!document.hidden && !reduced.matches && !mobile.matches) draw(); };
    const onResize = () => { clearTimeout(timer); timer = window.setTimeout(start, 180); };
    start(); window.addEventListener("resize", onResize); document.addEventListener("visibilitychange", start); reduced.addEventListener("change", start); mobile.addEventListener("change", start);
    return () => { stop(); clearTimeout(timer); window.removeEventListener("resize", onResize); document.removeEventListener("visibilitychange", start); reduced.removeEventListener("change", start); mobile.removeEventListener("change", start); };
  }, []);
  return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}

