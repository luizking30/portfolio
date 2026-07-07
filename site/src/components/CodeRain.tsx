"use client";

import { useEffect, useRef, useState } from "react";

const snippets = [
  "const ai = await model.generate({\n  prompt: 'build future',\n  agents: true,\n});",
  "function* pipeline() {\n  yield preprocess(data);\n  yield inference(model);\n  yield postprocess(result);\n}",
  "class NeuralAgent {\n  async think(input) {\n    return this.model\n      .embed(input)\n      .then(r => r.decode());\n  }\n}",
  "export const deploy = () => {\n  const app = createAIApp({\n    autonomous: true,\n    scalable: true,\n  });\n  return app.run();\n};",
  "interface Solution {\n  type: 'ai-agent';\n  autonomous: boolean;\n  deploy(): Promise<void>;\n}",
];

export default function CodeRain({ className = "" }: { className?: string }) {
  const [lines, setLines] = useState<{ text: string; top: number; left: number; delay: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generated = snippets.map((snippet, idx) => ({
      text: snippet,
      top: 5 + idx * 18 + Math.random() * 5,
      left: idx % 2 === 0 ? 2 + Math.random() * 10 : 65 + Math.random() * 10,
      delay: idx * 800,
    }));
    setLines(generated);
  }, []);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {lines.map((line, idx) => (
        <pre
          key={idx}
          className="absolute font-mono text-[10px] leading-relaxed text-blue-500/10 dark:text-blue-400/10 whitespace-pre"
          style={{ top: `${line.top}%`, left: `${line.left}%` }}
        >
          {line.text.split("\n").map((l, i) => (
            <div key={i} className="code-rain-line" style={{ animationDelay: `${line.delay + i * 200}ms` }}>
              {l}
            </div>
          ))}
        </pre>
      ))}
    </div>
  );
}
