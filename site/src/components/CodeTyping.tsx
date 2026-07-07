"use client";

import { useEffect, useRef, useState } from "react";

interface CodeTypingProps {
  code: string;
  language?: string;
  speed?: number;
  className?: string;
}

const TOKEN_COLORS: Record<string, string> = {
  keyword: "text-purple-500 dark:text-purple-400",
  string: "text-emerald-500 dark:text-emerald-400",
  comment: "text-slate-400 dark:text-slate-500 italic",
  function: "text-blue-500 dark:text-blue-400",
  number: "text-amber-500 dark:text-amber-400",
  default: "text-slate-700 dark:text-slate-300",
};

const KEYWORDS = new Set([
  "def", "return", "import", "from", "class", "if", "else", "elif", "for",
  "while", "try", "except", "with", "as", "async", "await", "const", "let",
  "var", "function", "export", "default", "new", "true", "false", "None",
  "null", "undefined", "self", "this",
]);

function tokenizeLine(line: string) {
  const tokens: { text: string; type: keyof typeof TOKEN_COLORS }[] = [];
  let i = 0;

  if (line.trim().startsWith("#") || line.trim().startsWith("//")) {
    return [{ text: line, type: "comment" as const }];
  }

  while (i < line.length) {
    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i];
      let j = i + 1;
      while (j < line.length && line[j] !== quote) j++;
      tokens.push({ text: line.slice(i, j + 1), type: "string" });
      i = j + 1;
      continue;
    }

    if (/[a-zA-Z_]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) j++;
      const word = line.slice(i, j);
      if (KEYWORDS.has(word)) {
        tokens.push({ text: word, type: "keyword" });
      } else if (line[j] === "(") {
        tokens.push({ text: word, type: "function" });
      } else {
        tokens.push({ text: word, type: "default" });
      }
      i = j;
      continue;
    }

    if (/[0-9]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[0-9.]/.test(line[j])) j++;
      tokens.push({ text: line.slice(i, j), type: "number" });
      i = j;
      continue;
    }

    tokens.push({ text: line[i], type: "default" });
    i++;
  }

  return tokens;
}

export default function CodeTyping({
  code,
  language = "python",
  speed = 25,
  className = "",
}: CodeTypingProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const allLines = code.split("\n");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLines(allLines);
      setCurrentLine(allLines.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let line = 0;
          let char = 0;

          function typeNext() {
            if (line >= allLines.length) return;
            const fullLine = allLines[line];
            if (char <= fullLine.length) {
              setLines((prev) => {
                const next = [...prev];
                next[line] = fullLine.slice(0, char);
                return next;
              });
              setCurrentLine(line);
              setCurrentChar(char);
              char++;
              setTimeout(typeNext, speed);
            } else {
              line++;
              char = 0;
              setTimeout(typeNext, speed * 3);
            }
          }
          typeNext();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [code, speed]);

  const isTyping = currentLine < allLines.length;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-2 dark:border-slate-700">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 font-mono text-xs text-slate-400">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:text-sm">
        <code className="font-mono">
          {allLines.map((fullLine, idx) => {
            const lineText = lines[idx] ?? "";
            const isCurrentLine = idx === currentLine && isTyping;
            return (
              <div key={idx} className="flex">
                <span className="mr-3 inline-block w-6 shrink-0 select-none text-right text-slate-300 dark:text-slate-700">
                  {idx + 1}
                </span>
                <span className="flex-1">
                  {isCurrentLine ? (
                    <>
                      {tokenizeLine(lineText).map((tok, ti) => (
                        <span key={ti} className={TOKEN_COLORS[tok.type]}>
                          {tok.text}
                        </span>
                      ))}
                      <span className="typewriter-cursor" />
                    </>
                  ) : lineText ? (
                    tokenizeLine(lineText).map((tok, ti) => (
                      <span key={ti} className={TOKEN_COLORS[tok.type]}>
                        {tok.text}
                      </span>
                    ))
                  ) : (
                    "\u00A0"
                  )}
                </span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
