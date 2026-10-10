"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { achievements, education, workExperience } from "@/lib/data";

const W = 1000;
const H = 220;

// A training-accuracy curve: fast early gains, noisy, still climbing at the end.
// Returns an SVG y coordinate, so high accuracy sits near the top.
function accuracyAt(t: number) {
  const gain = (1 - Math.exp(-1.6 * t)) / (1 - Math.exp(-1.6));
  const accuracy = 24 + 155 * gain;
  const noise = (7 * Math.sin(t * 57) + 4 * Math.sin(t * 143 + 1.3)) * Math.exp(-1.6 * t);
  return H - (accuracy + noise);
}

function pathBetween(from: number, to: number) {
  const steps = Math.round((to - from) * 160);
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = from + ((to - from) * i) / steps;
    d += `${i === 0 ? "M" : "L"}${(t * W).toFixed(1)},${accuracyAt(t).toFixed(1)}`;
  }
  return d;
}

// The solid part of the curve closed down to the baseline, for the wash beneath it.
function areaUnder(to: number) {
  return `${pathBetween(0, to)}L${(to * W).toFixed(1)},${H}L0,${H}Z`;
}

const [netConnect, mobius] = workExperience;

type Checkpoint = {
  phase: string;
  step: string;
  org: string;
  role: string;
  period: string;
  notes: string[];
  future?: boolean;
};

const checkpoints: Checkpoint[] = [
  {
    phase: "Pre-training",
    step: "2021",
    org: education.shortSchool,
    role: `${education.degree}, ${education.major}`,
    period: education.period,
    notes: achievements,
  },
  {
    phase: mobius.phase,
    step: "2025.06",
    org: mobius.company,
    role: `${mobius.role}, ${mobius.location}`,
    period: mobius.period,
    notes: mobius.highlights,
  },
  {
    phase: netConnect.phase,
    step: "2025.11",
    org: netConnect.company,
    role: `${netConnect.role}, ${netConnect.location}`,
    period: netConnect.period,
    notes: netConnect.highlights,
  },
  {
    phase: "Next checkpoint",
    step: "next",
    org: "Open to new roles",
    role: "AI/ML Engineer and AI Full Stack Developer roles",
    period: "",
    notes: [
      "Excited to join a team shipping AI products to real users.",
      "Happy to talk about roles, collaborations or ideas.",
    ],
    future: true,
  },
];

// Checkpoints sit at the centre of each column so the curve lines up with the text below.
const positions = checkpoints.map((_, i) => (i + 0.5) / checkpoints.length);
const SOLID_UNTIL = 0.75;
const DRAW_SECONDS = 1.6;

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = usePrefersReducedMotion();
  const drawn = inView || reduceMotion;

  return (
    <section id="experience" className="mx-auto max-w-page scroll-mt-20 px-4 py-24 sm:px-8 sm:py-32">
      <h2 className="mb-12 font-display text-3xl font-light tracking-tight sm:text-5xl">Experience</h2>

      <div ref={ref} className="relative h-[140px] w-full sm:h-[220px]">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {positions.map((t) => (
            <line
              key={t}
              x1={t * W}
              x2={t * W}
              y1={accuracyAt(t)}
              y2={H}
              stroke="var(--line)"
              strokeDasharray="2 4"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {/* Reveal with a growing clip rather than pathLength, which misbehaves with non-scaling strokes. */}
          <defs>
            <linearGradient id="accuracy-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
              <stop offset="0" stopColor="var(--grad-a)" />
              <stop offset="0.5" stopColor="var(--grad-mid)" />
              <stop offset="1" stopColor="var(--grad-b)" />
            </linearGradient>
            {/* Fades the wash out towards the baseline */}
            <linearGradient id="accuracy-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity={0.24} />
              <stop offset="1" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <mask id="accuracy-fade-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={W} height={H}>
              <rect x={0} y={0} width={W} height={H} fill="url(#accuracy-fade)" />
            </mask>
            <clipPath id="accuracy-reveal">
              <motion.rect
                x={0}
                y={-20}
                height={H + 40}
                initial={{ width: 0 }}
                animate={{ width: drawn ? SOLID_UNTIL * W + 2 : 0 }}
                transition={{ duration: reduceMotion ? 0 : DRAW_SECONDS * SOLID_UNTIL, ease: "linear" }}
              />
            </clipPath>
          </defs>
          <g clipPath="url(#accuracy-reveal)">
            <path d={areaUnder(SOLID_UNTIL)} fill="url(#accuracy-gradient)" mask="url(#accuracy-fade-mask)" />
          </g>
          <path
            d={pathBetween(0, SOLID_UNTIL)}
            fill="none"
            stroke="url(#accuracy-gradient)"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            clipPath="url(#accuracy-reveal)"
          />
          <motion.path
            d={pathBetween(SOLID_UNTIL, 1)}
            fill="none"
            stroke="var(--grad-b)"
            strokeWidth={1.5}
            strokeDasharray="5 6"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={{ opacity: drawn ? 1 : 0 }}
            transition={{ delay: reduceMotion ? 0 : DRAW_SECONDS * SOLID_UNTIL, duration: reduceMotion ? 0 : 0.4 }}
          />
        </svg>

        {/* Markers are HTML so they stay round while the SVG stretches. */}
        {checkpoints.map((c, i) => {
          const t = positions[i];
          return (
            <motion.div
              key={c.step}
              className="absolute"
              // Centre with motion's x/y: its scale animation writes the transform and would drop Tailwind's translate.
              // top is rounded because Node and browsers differ in the last digit of Math.exp and Math.sin.
              style={{
                left: `${t * 100}%`,
                top: `${((accuracyAt(t) / H) * 100).toFixed(4)}%`,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={drawn ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: reduceMotion ? 0 : t * DRAW_SECONDS, duration: reduceMotion ? 0 : 0.3 }}
            >
              <span
                className={`block h-3 w-3 rounded-full ${
                  c.future ? "border border-grad-b bg-bg" : i === checkpoints.length - 2 ? "bg-gradient-brand halo-brand" : "bg-ink"
                }`}
              />
              <span
                className={`absolute bottom-full left-1/2 mb-2 -translate-x-1/2 text-[0.65rem] sm:text-xs ${
                  c.future ? "text-grad-b" : "text-muted"
                }`}
              >
                {c.step}
              </span>
            </motion.div>
          );
        })}
      </div>

      <ol className="grid gap-10 border-t border-line pt-8 md:grid-cols-4 md:gap-6">
        {checkpoints.map((c) => (
          <li key={c.step}>
            <p className={`text-sm ${c.future ? "text-grad-b" : "text-muted"}`}>{c.phase}</p>
            <h3 className="mt-2 font-display text-lg font-normal leading-snug tracking-tight">{c.org}</h3>
            <p className="mt-1 text-sm">{c.role}</p>
            {c.period && <p className="mt-1 text-xs text-muted">{c.period}</p>}
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-snug marker:text-muted">
              {c.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            {c.future && (
              <a href="#contact" className="link-underline mt-4 inline-block text-sm font-medium text-ink">
                Get in touch
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
