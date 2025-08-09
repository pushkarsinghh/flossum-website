"use client";

import React, { useState, useRef, useEffect } from "react";
import { parseCommandAndRun } from "@/utils/commandParser";

export const VirtualTerminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [liveLine, setLiveLine] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, `@flossum.io ➜ ${trimmed}`]);
    setInput("");
    setLiveLine(""); // Start live output line

    await parseCommandAndRun(trimmed, setLiveLine);

    setHistory((prev) => [...prev, liveLine ?? ""]);
    setLiveLine(null);
  };

  return (
    <div className="bg-[#1e1e1e] text-white font-mono rounded-lg shadow-lg p-4 w-full max-w-3xl h-[400px] overflow-y-auto" ref={terminalRef}>
      <div className="space-y-1">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
        {liveLine !== null && (
          <div className="whitespace-pre-wrap">{liveLine}</div>
        )}
        <form onSubmit={handleSubmit}>
          <span className="text-purple-400">@flossum.io</span>{" "}
          <span className="text-gray-400">➜</span>{" "}
          <input
            className="bg-transparent outline-none text-white w-full"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
