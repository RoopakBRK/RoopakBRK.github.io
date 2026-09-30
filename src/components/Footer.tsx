import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-page scroll-mt-20 px-4 pb-10 pt-24 sm:px-8 sm:pt-32">
      <p className="mb-6 text-muted">Want to build something together? My inbox is open.</p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="block break-all font-display text-[clamp(1.35rem,5.2vw,4.25rem)] font-light leading-none tracking-[-0.03em] transition-opacity hover:opacity-80 text-gradient w-fit pb-[0.15em]"
      >
        {personalInfo.email}
      </a>

      <div className="mt-20 flex flex-col gap-4 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-underline">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
            LinkedIn
          </a>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="link-underline">
            Resume
          </a>
        </div>
        <p className="text-muted">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
