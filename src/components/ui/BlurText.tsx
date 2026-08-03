import { useEffect, useRef, useState, type ReactNode } from "react";

interface BlurTextProps { as: "h1" | "h2"; children: string; className?: string }

export function BlurText({ as: Element, children, className }: BlurTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const words: ReactNode[] = children.split(/\s+/).map((word, index, values) => <span className={`blur-word${visible ? " is-visible" : ""}`} style={{ "--blur-delay": `${index * 80}ms` } as React.CSSProperties} key={`${word}-${index}`}>{word}{index < values.length - 1 ? " " : null}</span>);
  return <Element ref={ref} className={className} data-blur-text>{words}</Element>;
}


