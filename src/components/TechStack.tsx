"use client";

import { useState } from "react";
import { techStack } from "@/lib/data";

// Foundations sit near the core, the frontier on the outer rings.
const ORDER = ["Languages", "Data & Tools", "Backend / Web", "MLOps & Cloud", "AI / ML", "LLM / GenAI"];
const rings = ORDER.map((label) => techStack.find((g) => g.label === label)!).filter(Boolean);

const RADII = [13, 20, 27, 34, 41, 48]; // % of the orbit's width
const DURATIONS = [70, 90, 110, 130, 150, 170]; // seconds per revolution
const total = rings.reduce((n, g) => n + g.items.length, 0);

// Each ring takes its colour from the dark blue to dark pink gradient.
const ringColor = (i: number) => {
  const t = Math.round((i / (rings.length - 1)) * 100);
  return `color-mix(in srgb, var(--grad-b) ${t}%, var(--grad-a))`;
};

export function TechStack() {
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const focus = hovered ?? active;

  return (
    <section className="mx-auto max-w-page px-4 py-24 sm:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-light tracking-tight sm:text-5xl">Skills and tools</h2>
        <p className="mt-4 text-muted">
          Foundations at the core, the frontier on the outside. Hover the orbit to pause it, or pick a group to
          highlight it.
        </p>
      </div>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap justify-center gap-2" onMouseLeave={() => setHovered(null)}>
        {rings.map((group, i) => {
          const isActive = active === group.label;
          const dimmed = focus !== null && focus !== group.label;
          return (
            <button
              key={group.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(isActive ? null : group.label)}
              onMouseEnter={() => setHovered(group.label)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-all ${
                isActive ? "border-ink" : "border-line"
              } ${dimmed ? "opacity-45" : ""}`}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: ringColor(i) }} aria-hidden="true" />
              {group.label}
              <span className="font-mono text-[0.7rem] text-muted">{group.items.length}</span>
            </button>
          );
        })}
      </div>

      {/* Orbit, desktop */}
      <div
        className="orbit group/orbit relative mx-auto hidden aspect-square w-full max-w-[46rem] lg:block"
        aria-hidden="true"
      >
        {/* Core */}
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-brand text-white shadow-[0_0_60px_-10px_var(--grad-b)]">
          <span className="font-display text-2xl font-light leading-none">{total}</span>
          <span className="mt-1 text-xs opacity-80">skills</span>
        </div>

        {rings.map((group, i) => {
          const color = ringColor(i);
          const r = RADII[i];
          const dimmed = focus !== null && focus !== group.label;
          const lit = focus === group.label;
          const duration = `${DURATIONS[i]}s`;
          const direction = i % 2 === 0 ? "normal" : "reverse";
          const offset = i * 23; // stagger starting angles so rings don't line up
          return (
            <div
              key={group.label}
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{ opacity: dimmed ? 0.18 : 1 }}
            >
              {/* Ring */}
              <div
                className="absolute rounded-full transition-all duration-500"
                style={{
                  left: `${50 - r}%`,
                  top: `${50 - r}%`,
                  width: `${r * 2}%`,
                  height: `${r * 2}%`,
                  border: `1px ${lit ? "solid" : "dashed"} ${color}`,
                  opacity: lit ? 0.9 : 0.35,
                }}
              />
              {/* Rotating layer carrying the skills */}
              <div className="orbit-spin absolute inset-0" style={{ animationDuration: duration, animationDirection: direction }}>
                {group.items.map((item, k) => {
                  const angle = ((k / group.items.length) * 360 + offset) * (Math.PI / 180);
                  return (
                    <span
                      key={item}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${50 + r * Math.cos(angle)}%`, top: `${50 + r * Math.sin(angle)}%` }}
                    >
                      {/* Counter-rotate so labels stay upright */}
                      <span
                        className="orbit-spin pointer-events-auto flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-bg px-2.5 py-1 text-[0.8rem] shadow-sm transition-colors"
                        style={{
                          animationDuration: duration,
                          animationDirection: direction === "normal" ? "reverse" : "normal",
                          borderColor: lit ? color : "var(--line)",
                        }}
                        onMouseEnter={() => setHovered(group.label)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
                        {item}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Grouped list: the layout on smaller screens, and the accessible version everywhere */}
      <div className="mx-auto grid max-w-3xl gap-6 lg:sr-only">
        {rings.map((group, i) => {
          const dimmed = focus !== null && focus !== group.label;
          return (
            <div key={group.label} className={`transition-opacity ${dimmed ? "opacity-40" : ""}`}>
              <h3 className="mb-2 flex items-center gap-2 text-sm text-muted">
                <span className="h-2 w-2 rounded-full" style={{ background: ringColor(i) }} aria-hidden="true" />
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
