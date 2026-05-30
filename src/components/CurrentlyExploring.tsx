"use client";

import { motion } from "framer-motion";

export function CurrentlyExploring() {
  const exploring = [
    "Agentic AI",
    "Multi-Agent Systems",
    "AI Trading Systems",
    "Quantitative Finance",
    "RAG Architectures",
    "LLM Fine-Tuning"
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container px-6 mx-auto flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md w-full p-8 rounded-2xl border border-violet-500/20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] bg-black/40 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 blur-[50px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-mono font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Currently Exploring
            </h3>
            <ul className="space-y-4">
              {exploring.map((topic, index) => (
                <li key={index} className="flex items-center gap-3 text-white/70 font-mono text-sm">
                  <span className="text-white/20">—</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
