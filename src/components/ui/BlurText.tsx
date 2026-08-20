import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";

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

  const words = children.split(/\s+/);

  return (
    <Element ref={ref} className={className} data-blur-text>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className={`blur-word${visible ? " is-visible" : ""}`}
            style={{ "--blur-delay": `${index * 80}ms` } as CSSProperties}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Element>
  );
}
