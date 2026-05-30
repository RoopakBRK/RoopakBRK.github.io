"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Bot, Brain, Code, Cpu } from "lucide-react";

const icons = {
  Bot: Bot,
  Brain: Brain,
  Code: Code,
  Cpu: Cpu,
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">How I Can Help</h2>
          <p className="text-white/50 max-w-xl">
            Specializing in end-to-end AI solutions, from model development to production-grade deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col gap-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm text-white/50 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
