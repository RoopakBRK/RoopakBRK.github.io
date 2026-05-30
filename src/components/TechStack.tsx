"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cloud, Database, Cpu, Layout } from "lucide-react";

export function TechStack() {
  const stack = [
    {
      category: "AI & ML",
      icon: <Brain className="w-5 h-5" />,
      skills: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "OpenCV", "Scikit-Learn"]
    },
    {
      category: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "MLOps",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Kubeflow", "MLflow", "Docker", "Model Serving", "CI/CD"]
    },
    {
      category: "Cloud",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS", "Vercel", "Serverless", "S3", "EC2"]
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "MongoDB", "Vector DBs", "Redis"]
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">What I Work With</h2>
          <p className="text-white/50 max-w-xl">
            A comprehensive ecosystem of technologies I use to build robust and scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 blur-[40px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 rounded-lg bg-white/5 text-white/80 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-white/60 px-3 py-1.5 rounded-md bg-white/5 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
