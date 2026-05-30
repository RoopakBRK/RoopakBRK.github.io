"use client";

import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-black/20 backdrop-blur-lg">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-white to-violet-400 bg-clip-text text-transparent">Let&apos;s Build Something Interesting Together.</h2>
            <div className="space-y-6 mb-12 mt-8">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-4 text-lg text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-white/40" />
                    {personalInfo.email}
                </a>
            </div>

            <div className="flex gap-6 justify-center">
                <Link href={personalInfo.linkedin} target="_blank" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-white/80">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </Link>
                <Link href={personalInfo.github} target="_blank" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-white/80">
                    <Github className="w-5 h-5" />
                    GitHub
                </Link>
                <Link href="/roopak_ml_cv.pdf" target="_blank" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-white/80">
                    Resume
                </Link>
            </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6">
            <p className="text-xs text-white/30 tracking-[0.2em]">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
