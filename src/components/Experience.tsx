"use client";

import { motion } from "framer-motion";
import { workExperience, education } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/50">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Work Experience</h2>
            <div className="space-y-12">
              {workExperience.map((work, index) => (
                <motion.div
                  key={work.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-white" />
                  <span className="text-xs font-medium text-white/40 tracking-widest mb-2 block">
                    {work.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{work.role}</h3>
                  <p className="text-white/60 mb-4">{work.company}</p>
                  <ul className="space-y-2">
                    {work.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-white/50 leading-relaxed">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Education</h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-2">{education.school}</h3>
              <p className="text-lg text-white/80 mb-4">{education.degree}</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/50">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {education.major}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {education.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-bold text-white/80">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
