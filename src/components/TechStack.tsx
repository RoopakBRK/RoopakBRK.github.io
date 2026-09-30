import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="mx-auto max-w-page px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center font-display text-3xl font-light tracking-tight sm:text-5xl">
          Skills and tools
        </h2>
        <dl className="border-t border-line">
          {techStack.map((row) => (
            <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3 sm:grid-cols-[9rem_1fr]">
              <dt className="text-sm text-muted">{row.label}</dt>
              <dd>{row.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
