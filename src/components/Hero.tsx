"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                Hi, I&apos;m <span className="text-white font-bold">{personalInfo.name.split(" ")[0]}</span> 👋
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Full Stack AI Developer <br />
                <span className="text-white/40">Building Production AI Systems</span>
              </h1>
              
              <p className="max-w-2xl text-lg md:text-xl text-white/50 mb-8 leading-relaxed">
                I build AI products, machine learning pipelines, LLM applications, and scalable web platforms.
                <br /><br />
                Currently working on AI Agents, Quantitative Trading Systems, and Enterprise AI Applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 border-none text-white text-sm font-semibold rounded-full hover:from-violet-400 hover:to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all flex items-center gap-2 group">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/roopak_ml_cv.pdf" target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#contact" className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image and Badges */}
          <div className="w-full lg:w-2/5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Supercool pulsing glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/40 via-purple-500/40 to-fuchsia-500/40 rounded-full blur-[80px] -z-10 animate-pulse" />
              
              {/* Image container with glowing border */}
              <div className="w-full h-full rounded-full border-2 border-violet-500/30 bg-black overflow-hidden relative shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <Image src="/roopiee_image.jpg" alt="Roopak Krishna" fill className="object-cover" priority />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Row Below Hero */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-24 lg:mt-32 border-y border-white/5 py-8"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-white/5">
                <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold">1+</span>
                    <span className="text-xs text-white/40 tracking-wider">Year Experience</span>
                </div>
                <div className="flex flex-col gap-1 border-l-0 md:border-l">
                    <span className="text-2xl font-bold">8+</span>
                    <span className="text-xs text-white/40 tracking-wider">Major Projects</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold">300+</span>
                    <span className="text-xs text-white/40 tracking-wider">DSA Problems Solved</span>
                </div>
                <div className="flex flex-col gap-1 border-l-0 md:border-l">
                    <span className="text-2xl font-bold">Graduated</span>
                    <span className="text-xs text-white/40 tracking-wider">from IIT Hyderabad</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
