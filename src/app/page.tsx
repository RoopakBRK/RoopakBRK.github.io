import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
