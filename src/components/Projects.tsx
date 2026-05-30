"use client";

import { motion } from "framer-motion";
import { featuredProjects, additionalProjects } from "@/lib/data";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Featured Work</h2>
          <p className="text-white/50 max-w-xl">
            A selection of production-grade AI systems and scalable SaaS applications.
          </p>
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Preview */}
              <div className="w-full lg:w-1/2 aspect-video bg-gradient-premium rounded-2xl border border-white/10 relative overflow-hidden group">
                {project.image ? (
                   <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                   <>
                      <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                         <p className="text-sm font-mono tracking-widest">{project.title}</p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                      </div>
                   </>
                )}
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-mono border border-white/10 rounded-full bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {project.id === "calsify" && (
                  <div className="mb-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] inline-block">
                    <p className="text-xs text-white/40 tracking-widest mb-1">Domain</p>
                    <a href="https://calsify.in" target="_blank" className="text-sm font-semibold text-white/90 hover:text-violet-400 transition-colors">Calsify.in</a>
                  </div>
                )}

                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="mt-32">
           <h2 className="text-2xl font-bold mb-12 tracking-tight">Additional Work</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalProjects.map((project) => (
                <div key={project} className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 flex items-center justify-between group cursor-default hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{project}</span>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
