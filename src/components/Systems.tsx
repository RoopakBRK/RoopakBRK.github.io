"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

interface NodeItem {
  id: string;
  label: string;
  category: "ai-ml" | "mlops" | "backend" | "frontend";
}

export function Systems() {
  const [reducedMotion] = useReducedMotion();
  
  const allCategories: { name: string; key: keyof typeof techStack; category: NodeItem["category"]; color: string }[] = [
    { name: "AI & ML", key: "aiMl", category: "ai-ml", color: "bg-accent border-accent/40 text-white" },
    { name: "MLOps", key: "mlops", category: "mlops", color: "bg-purple-500/80 border-purple-500/40 text-white" },
    { name: "Backend", key: "backend", category: "backend", color: "bg-blue-500/80 border-blue-500/40 text-white" },
    { name: "Frontend", key: "frontend", category: "frontend", color: "bg-indigo-500/80 border-indigo-500/40 text-white" },
  ];

  return (
    <section id="systems" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Systems</h2>
          <p className="text-white/50 max-w-xl">
            An interactive map of the technologies I work with and how they connect across the full stack.
          </p>
        </div>
        
        <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-8 overflow-hidden backdrop-blur-xl">
          {/* Background grid */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(186,104,200,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(186,104,200,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px' 
            }} 
          />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : catIdx * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                  <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <h3 className="font-semibold text-lg text-white/90">{cat.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {techStack[cat.key].map((item, i) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default shadow-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center footer label */}
          <div className="mt-12 pt-6 border-t border-white/5 text-center">
            <span className="text-xs tracking-widest text-white/40 font-mono uppercase">
              INTERCONNECTED TECHNOLOGY ECOSYSTEM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hook for reduced motion
function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener ? mq.addEventListener("change", listener) : mq.addListener(listener);

    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", listener) : mq.removeListener(listener);
    };
  }, []);

  return [reducedMotion];
}