"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  // Over the hero the bar is bare links; once the page moves it gains a backdrop and the name the hero no longer shows.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "nav-glass border-line" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-page items-center gap-8 px-4 sm:px-8">
        <a
          href="#top"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? undefined : -1}
          className={`hidden font-wordmark text-sm tracking-tight transition-opacity duration-300 md:block ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {personalInfo.name}
        </a>
        <ul className="flex flex-1 items-center justify-between text-sm sm:justify-end sm:gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="link-underline">
                {link.label}
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-4 py-1.5 font-medium transition-colors hover:border-ink"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
