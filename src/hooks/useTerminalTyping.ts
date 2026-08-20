import { useEffect, useRef, useState } from "react";

const lines = [
  "$ diego --stack",
  "backend   C# | .NET | ASP.NET MVC",
  "frontend  React | TypeScript",
  "dados     PostgreSQL | SQL | EF Core",
  "",
  "$ diego --entregas",
  "9 módulos no CRM da Saturnia",
  "1 PDV em 4 camadas, código aberto",
];

export function useTerminalTyping() {
  const [text, setText] = useState(lines.join("\n"));
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 960px)").matches) return;
    let line = 0;
    let character = 0;
    let cancelled = false;
    setText("");
    const tick = () => {
      if (cancelled || line >= lines.length) return;
      const current = lines[line] ?? "";
      if (character < current.length) character += 1;
      else { line += 1; character = 0; }
      setText([...lines.slice(0, line), lines[line]?.slice(0, character) ?? ""].join("\n"));
      timeoutRef.current = window.setTimeout(tick, character ? 24 : line === 5 ? 360 : 120);
    };
    timeoutRef.current = window.setTimeout(tick, 450);
    return () => {
      cancelled = true;
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return { text };
}
