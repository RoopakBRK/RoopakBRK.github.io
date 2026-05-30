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
    <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 relative overflow-hidden">
      {/* Ambient Violet Background Effects (80% Black / 20% Violet Theme) */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-900/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-[50%] w-[40vw] h-[40vw] bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-screen opacity-40 -translate-x-1/2" />
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
