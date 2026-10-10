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
      {/* Soft blue, violet and pink light behind the globe */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -right-40 -top-24 h-[42rem] w-[42rem] rounded-full opacity-30 blur-3xl dark:opacity-40"
          style={{ background: "radial-gradient(circle, var(--grad-a), transparent 62%)" }}
        />
        <div
          className="absolute right-[4%] top-[18%] h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl dark:opacity-30"
          style={{ background: "radial-gradient(circle, var(--grad-mid), transparent 62%)" }}
        />
        <div
          className="absolute right-[16%] top-[22%] h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl dark:opacity-35"
          style={{ background: "radial-gradient(circle, var(--grad-b), transparent 62%)" }}
        />
      </div>

      {/* Top padding clears the fixed header. The globe gives up height on short screens so the pitch stays in view. */}
      <section className="mx-auto flex min-h-[min(100svh,62rem)] max-w-page flex-col justify-center px-4 pb-16 pt-16 sm:px-8 sm:pb-20">
        <div className="grid items-center gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-6">
          <div className="order-1 h-[300px] sm:h-[380px] lg:order-2 lg:h-[clamp(300px,48svh,460px)]">
            <HeroGlobe />
          </div>
          <h1
            aria-label={personalInfo.name}
            className="text-gradient order-2 w-fit pb-[0.08em] font-wordmark text-[clamp(3rem,12vw,9rem)] font-light leading-[0.92] tracking-[-0.04em] lg:order-1"
          >
            {LINES.map((line, i) => (
              <DenoisedLine key={line} text={line} delay={i * 180} />
            ))}
          </h1>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-line px-3 py-1 text-sm transition-colors hover:border-ink"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {personalInfo.availability}
          </a>
          <p className="mt-5 max-w-[34ch] text-xl leading-snug sm:text-2xl">{personalInfo.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              View resume
            </a>
            <a href="#work" className="link-underline text-sm font-medium">
              See my projects
            </a>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 text-sm md:grid-cols-4">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1">{personalInfo.title.replace(" | ", ", ")}</dd>
          </div>
          <div>
            <dt className="text-muted">Based in</dt>
            <dd className="mt-1">{personalInfo.location}</dd>
          </div>
          <div>
            <dt className="text-muted">Studied at</dt>
            <dd className="mt-1">
              {education.shortSchool}, {education.period.split("–")[1].trim()}
            </dd>
          </div>
          <div>
            <dt className="text-muted">Contact</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              <a href={`mailto:${personalInfo.email}`} className="link-underline">
                Email
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-underline">
                GitHub
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
