"use client";

import { useEffect, useState } from "react";
import { personalInfo, education } from "@/lib/data";
import { HeroGlobe } from "@/components/HeroGlobe";

const NOISE = "#%+=/<>0123456789";
const LINES = personalInfo.name.split(" ");

// The name resolves out of noise once on load, like a diffusion model denoising.
function useDenoised(text: string, delay: number) {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const duration = 1100;
    // Each character settles at its own moment, so the word sharpens unevenly.
    const settleAt = Array.from(
      text,
      (_, i) => delay + (i / text.length) * duration * 0.6 + Math.random() * duration * 0.4,
    );
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = now - start;
      let done = true;
      const next = Array.from(text, (ch, i) => {
        if (t >= settleAt[i] || ch === " ") return ch;
        done = false;
        return NOISE[Math.floor(Math.random() * NOISE.length)];
      }).join("");
      setOutput(next);
      if (!done) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, delay]);

  return output;
}

function DenoisedLine({ text, delay }: { text: string; delay: number }) {
  const output = useDenoised(text, delay);
  return (
    <span className="block" aria-hidden="true">
      {output}
    </span>
  );
}

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Soft dark blue and dark pink light behind the globe */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -right-40 -top-24 h-[42rem] w-[42rem] rounded-full opacity-30 blur-3xl dark:opacity-40"
          style={{ background: "radial-gradient(circle, var(--grad-a), transparent 62%)" }}
        />
        <div
          className="absolute right-[18%] top-[30%] h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl dark:opacity-35"
          style={{ background: "radial-gradient(circle, var(--grad-b), transparent 62%)" }}
        />
      </div>

      <section className="mx-auto flex min-h-[min(100svh,62rem)] max-w-page flex-col justify-center px-4 pb-16 pt-10 sm:px-8 sm:pb-20">
        <div className="grid items-center gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-6">
          <div className="order-1 h-[300px] sm:h-[380px] lg:order-2 lg:h-[460px]">
            <HeroGlobe />
          </div>
          <h1
            aria-label={personalInfo.name}
            className="text-gradient order-2 w-fit pb-[0.08em] font-display text-[clamp(3rem,12vw,9rem)] font-light leading-[0.92] tracking-[-0.04em] lg:order-1"
          >
            {LINES.map((line, i) => (
              <DenoisedLine key={line} text={line} delay={i * 180} />
            ))}
          </h1>
        </div>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 sm:mt-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="max-w-[34ch] text-xl leading-snug sm:text-2xl">{personalInfo.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-brand rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                View resume
              </a>
              <a href="#work" className="link-underline text-sm font-medium">
                See my projects
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 self-end text-sm">
            <dt className="text-muted">Role</dt>
            <dd>AI/ML engineer, full stack AI developer</dd>
            <dt className="text-muted">Based in</dt>
            <dd>{personalInfo.location}</dd>
            <dt className="text-muted">Studied at</dt>
            <dd>
              {education.shortSchool}, {education.period.split("–")[1].trim()}
            </dd>
            <dt className="text-muted">Elsewhere</dt>
            <dd className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-underline">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
                LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`} className="link-underline">
                Email
              </a>
            </dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
