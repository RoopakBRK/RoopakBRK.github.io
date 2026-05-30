"use client";

import { motion } from "framer-motion";
import { impactMetrics, nowBuilding } from "@/lib/data";

export function Impact() {
  return (
    <section className="py-24 bg-black/50 border-y border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {impactMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-bold mb-2 text-gradient">
                {metric.value}
              </h3>
              <p className="text-xs md:text-sm text-white/40 tracking-widest">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-12 tracking-tight text-center">Currently Building & Exploring</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nowBuilding.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
