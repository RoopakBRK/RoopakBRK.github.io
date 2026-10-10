"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { capabilities, featuredProjects, type CapabilityId } from "@/lib/data";

type Selection = { kind: "project"; id: string } | { kind: "capability"; id: CapabilityId };

const ROW = 52;
const HEIGHT = featuredProjects.length * ROW;
const CAP_ROW = HEIGHT / capabilities.length;
// The wires get a wider lane on large screens; on phones the labels need the room.
const COLUMNS =
  "grid-cols-[minmax(0,1fr)_minmax(2.5rem,0.6fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(2.5rem,0.85fr)_minmax(0,1fr)]";

const projectY = (i: number) => (i + 0.5) * ROW;
const capabilityY = (j: number) => (j + 0.5) * CAP_ROW;

const edges = featuredProjects.flatMap((project, i) =>
  project.capabilities.map((capId) => {
    const j = capabilities.findIndex((c) => c.id === capId);
    const y1 = projectY(i);
    const y2 = capabilityY(j);
    return { project: project.id, capability: capId, d: `M0,${y1} C50,${y1} 50,${y2} 100,${y2}` };
  }),
);

function isEdgeLit(edge: (typeof edges)[number], s: Selection) {
  return s.kind === "project" ? edge.project === s.id : edge.capability === s.id;
}

function nodeClass(isSelected: boolean, isLit: boolean) {
  if (isSelected) return "bg-gradient-brand halo-brand scale-125";
  if (isLit) return "bg-ink";
  return "border border-muted bg-bg";
}

export function Projects() {
  const [selection, setSelection] = useState<Selection>({ kind: "project", id: featuredProjects[0].id });
  const [hover, setHover] = useState<Selection | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  // Hover previews connections; the panel follows the committed selection.
  const lit = hover ?? selection;
  const litEdges = edges.filter((e) => isEdgeLit(e, lit));
  const litProjects = new Set(litEdges.map((e) => e.project));
  const litCapabilities = new Set<CapabilityId>(litEdges.map((e) => e.capability));
  if (lit.kind === "project") litProjects.add(lit.id);
  else litCapabilities.add(lit.id);

  // On narrow screens the panel sits below the map, so a pick has to bring it into view.
  const revealDetail = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    detailRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const selectProject = (id: string) => {
    setSelection({ kind: "project", id });
    revealDetail();
  };
  const selectCapability = (id: CapabilityId) => {
    setSelection({ kind: "capability", id });
    revealDetail();
  };

  return (
    <section id="work" className="mx-auto max-w-page scroll-mt-14 px-4 py-24 sm:px-8 sm:py-32">
      <h2 className="mb-12 font-display text-3xl font-light tracking-tight sm:text-5xl">Projects</h2>

      <div className="grid gap-12 lg:grid-cols-[1.75fr_1fr] lg:gap-14">
        {/* Graph */}
        <div onMouseLeave={() => setHover(null)}>
          <div className={`mb-3 grid ${COLUMNS} text-sm font-medium text-muted`}>
            <span className="pr-6 text-right">Project</span>
            <span />
            <span className="pl-6">Capability</span>
          </div>

          <div className={`relative grid ${COLUMNS} border-y border-line`} style={{ height: HEIGHT }}>
            <ul>
              {featuredProjects.map((project) => {
                const isSelected = selection.kind === "project" && selection.id === project.id;
                const isLit = litProjects.has(project.id);
                return (
                  <li key={project.id} style={{ height: ROW }}>
                    <button
                      type="button"
                      onClick={() => selectProject(project.id)}
                      onMouseEnter={() => setHover({ kind: "project", id: project.id })}
                      onFocus={() => setHover({ kind: "project", id: project.id })}
                      onBlur={() => setHover(null)}
                      aria-pressed={isSelected}
                      className={`flex h-full w-full items-center justify-end gap-3 text-right text-sm leading-tight text-ink transition-colors sm:text-base ${
                        isLit ? "font-semibold" : "hover:font-medium"
                      }`}
                    >
                      <span className={isSelected ? "text-gradient" : undefined}>{project.shortTitle}</span>
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${nodeClass(isSelected, isLit)}`}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <svg className="h-full w-full" viewBox={`0 0 100 ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
              <defs>
                {/* userSpaceOnUse so perfectly horizontal edges still get the gradient */}
                <linearGradient id="edge-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
                  <stop offset="0" stopColor="var(--grad-a)" />
                  <stop offset="0.5" stopColor="var(--grad-mid)" />
                  <stop offset="1" stopColor="var(--grad-b)" />
                </linearGradient>
              </defs>
              {edges.map((edge) => (
                <path
                  key={`${edge.project}-${edge.capability}`}
                  d={edge.d}
                  fill="none"
                  stroke="var(--muted)"
                  strokeOpacity={0.35}
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              {litEdges.map((edge) => (
                <g key={`lit-${edge.project}-${edge.capability}`}>
                  <path
                    d={edge.d}
                    fill="none"
                    stroke="url(#edge-gradient)"
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Gaps travelling from project to capability, like signal along a wire */}
                  <path
                    d={edge.d}
                    fill="none"
                    stroke="var(--bg)"
                    strokeWidth={3}
                    strokeDasharray="2 14"
                    vectorEffect="non-scaling-stroke"
                    className="edge-flow"
                  />
                </g>
              ))}
            </svg>

            <ul>
              {capabilities.map((cap) => {
                const isSelected = selection.kind === "capability" && selection.id === cap.id;
                const isLit = litCapabilities.has(cap.id);
                return (
                  <li key={cap.id} style={{ height: CAP_ROW }}>
                    <button
                      type="button"
                      onClick={() => selectCapability(cap.id)}
                      onMouseEnter={() => setHover({ kind: "capability", id: cap.id })}
                      onFocus={() => setHover({ kind: "capability", id: cap.id })}
                      onBlur={() => setHover(null)}
                      aria-pressed={isSelected}
                      className={`flex h-full w-full items-center gap-3 text-left text-sm leading-tight text-ink transition-colors sm:text-base ${
                        isLit ? "font-semibold" : "hover:font-medium"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rotate-45 transition-all duration-300 ${nodeClass(isSelected, isLit)}`}
                        aria-hidden="true"
                      />
                      <span className={isSelected ? "text-gradient" : undefined}>{cap.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Detail. Beside the map it rises into the space next to the heading. */}
        <div ref={detailRef} className="scroll-mt-20 lg:sticky lg:top-20 lg:-mt-12 lg:self-start" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${selection.kind}-${selection.id}`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
            >
              {selection.kind === "project" ? (
                <ProjectDetail id={selection.id} onSelectCapability={selectCapability} />
              ) : (
                <CapabilityDetail id={selection.id} onSelectProject={selectProject} />
              )}
            </motion.div>
          </AnimatePresence>
          <a href="#work" className="link-underline mt-10 inline-block text-sm text-muted lg:hidden">
            Back to the project map
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ id, onSelectCapability }: { id: string; onSelectCapability: (id: CapabilityId) => void }) {
  const project = featuredProjects.find((p) => p.id === id) ?? featuredProjects[0];
  return (
    <article>
      {project.period && <p className="mb-3 text-xs text-muted">{project.period}</p>}
      <h3 className="font-display text-2xl font-normal leading-tight tracking-tight sm:text-3xl">{project.title}</h3>
      <p className="mt-5 max-w-[52ch] leading-relaxed">{project.description}</p>

      {project.image && (
        <div className="relative mt-6 aspect-video overflow-hidden border border-line">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <ul className="mt-6 border-t border-line">
        {project.metrics.map((metric) => (
          <li key={metric} className="border-b border-line py-2.5">
            {metric}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-muted">{project.tech.join(", ")}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.capabilities.map((capId) => (
          <button
            key={capId}
            type="button"
            onClick={() => onSelectCapability(capId)}
            className="rounded-full border border-line px-3 py-1 text-sm transition-colors hover:border-ink"
          >
            {capabilities.find((c) => c.id === capId)?.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-sm">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-underline font-medium">
            View on GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-underline font-medium">
            Visit {new URL(project.live).host}
          </a>
        )}
        {project.sourceNote && <p className="text-muted">{project.sourceNote}</p>}
      </div>
    </article>
  );
}

function CapabilityDetail({ id, onSelectProject }: { id: CapabilityId; onSelectProject: (id: string) => void }) {
  const cap = capabilities.find((c) => c.id === id);
  const used = featuredProjects.filter((p) => p.capabilities.includes(id));
  if (!cap) return null;
  return (
    <article>
      <p className="mb-3 text-sm text-muted">
        Used in {used.length} {used.length === 1 ? "project" : "projects"}
      </p>
      <h3 className="font-display text-2xl font-normal leading-tight tracking-tight sm:text-3xl">{cap.label}</h3>
      <p className="mt-5 max-w-[52ch] leading-relaxed">{cap.description}</p>
      <ul className="mt-6 border-t border-line">
        {used.map((project) => (
          <li key={project.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => onSelectProject(project.id)}
              className="w-full py-2.5 text-left transition-colors hover:text-signal"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
