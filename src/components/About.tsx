"use client";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* About Text */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">About Me</h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                My journey into tech started at <strong className="text-white">IIT Hyderabad</strong>, where I developed a strong foundation in analytical problem-solving and software engineering.
              </p>
              <p>
                What started as an interest in data and algorithms quickly evolved into a passion for <strong className="text-white">building production AI systems</strong>. I transitioned deep into the world of Machine Learning, realizing that the real impact of AI lies not just in training models, but in deploying them robustly at scale.
              </p>
              <p>
                Over the past few years, I have worked extensively with <strong className="text-white">LLMs, MLOps, Computer Vision, and Full Stack Development</strong>. My experience ranges from fine-tuning open-source models (like Mistral) and building complex MLOps pipelines at Mobius Networks, to architecting an AI Interview Proctoring System with 93% accuracy at Net Connect Global.
              </p>
              <p>
                I am deeply passionate about solving real-world business problems. Whether it&apos;s automating KYC verifications, creating agentic workflows, or detecting arbitrage in financial markets, I focus on building reliable, scalable, and impactful solutions.
              </p>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Career Timeline</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-violet-500/50 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10 ml-[1px]">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:pr-4 md:group-odd:pl-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">2021</span>
                    <span className="font-semibold text-white/80">Started IIT Hyderabad</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10 ml-[1px]">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:pr-4 md:group-odd:pl-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">2025</span>
                    <span className="font-semibold text-white/80">ML Intern, Mobius Networks</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10 ml-[1px]">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:pr-4 md:group-odd:pl-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">2025</span>
                    <span className="font-semibold text-white/80">Graduated from IIT Hyderabad</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10 ml-[1px]">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:pr-4 md:group-odd:pl-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">2025 - 2026</span>
                    <span className="font-semibold text-white/80">Full Stack AI Developer</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-black text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10 ml-[1px]">
                   <div className="w-2 h-2 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] ml-4 md:ml-0 md:group-even:pr-4 md:group-odd:pl-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-violet-400 font-mono mb-1">Present</span>
                    <span className="font-semibold text-white">Building AI Products</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
