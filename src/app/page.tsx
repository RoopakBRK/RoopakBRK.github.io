import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05000a] text-white selection:bg-violet-500/30 relative overflow-hidden">
      {/* Supercool Violet Ambient Background with Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-violet-600/15 blur-[120px] rounded-full mix-blend-screen opacity-60" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-purple-600/15 blur-[120px] rounded-full mix-blend-screen opacity-60" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <CurrentlyExploring />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
