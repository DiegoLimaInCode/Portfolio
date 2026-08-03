import { Fragment } from "react";
import { useTerminalTyping } from "../../hooks/useTerminalTyping";

export function Terminal() {
  const { text } = useTerminalTyping();
  return <code className="terminal-cursor">{text.split("\n").map((line, index, values) => <Fragment key={`${index}-${line}`}>{line.startsWith("$") ? <span>{line}</span> : line}{index < values.length - 1 ? "\n" : null}</Fragment>)}</code>;
}
