export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  secondaryTagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export const personalInfo: PersonalInfo = {
  name: "Roopak Krishna",
  title: "Full Stack AI Developer | Machine Learning Engineer | AI Product Builder",
  tagline: "Building AI Products That Scale",
  secondaryTagline: "From Machine Learning Models to Production-Ready AI Systems.",
  location: "Hyderabad, India",
  email: "roopak2804@gmail.com",
  github: "https://github.com/RoopakBRK",
  linkedin: "https://linkedin.com/in/roopak-krishna-32958425a",
};

export interface AboutMe {
  description: string;
}

export const aboutMe: AboutMe = {
  description: "I am a Full Stack AI Developer specializing in Machine Learning, LLM Engineering, Agentic AI, MLOps, and scalable SaaS applications. My experience spans Production AI Systems, Computer Vision, Generative AI, Agentic AI, LLM Fine-Tuning, Full Stack Development, MLOps Pipelines, Knowledge Graphs, and Quantitative Trading Systems. I enjoy taking products from idea → prototype → production.",
};

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  cgpa: string;
}

export const education: Education = {
  school: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
  degree: "Bachelor of Technology",
  major: "Materials Science and Metallurgical Engineering",
  period: "2021 – 2025",
  cgpa: "7.34 / 10",
};

export interface Service {
  title: string;
  items: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "AI Application Development",
    items: ["LLM Applications", "RAG Systems", "AI Agents", "Chatbots", "Workflow Automation"],
    icon: "Bot",
  },
  {
    title: "Machine Learning Solutions",
    items: ["Classification Models", "Predictive Analytics", "Recommendation Systems", "Computer Vision"],
    icon: "Brain",
  },
  {
    title: "Full Stack Development",
    items: ["SaaS Platforms", "Dashboards", "Enterprise Applications", "APIs"],
    icon: "Code",
  },
  {
    title: "MLOps & Deployment",
    items: ["Kubeflow", "Docker", "AWS", "CI/CD", "Monitoring"],
    icon: "Cpu",
  },
];

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Net Connect Global Pvt. Ltd.",
    role: "Full Stack AI Developer",
    period: "November 2025 – May 2026",
    highlights: [
      "Built AI Interview Proctoring System.",
      "93% detection accuracy.",
      "Automated KYC verification workflows.",
      "Processed 1000+ candidate verifications.",
      "Achieved 97% face-match accuracy.",
      "Developed enterprise-grade dashboards.",
      "Integrated AI systems into production.",
    ],
  },
  {
    company: "Mobius Networks Pvt. Ltd.",
    role: "Machine Learning Intern",
    period: "June 2025 – August 2025",
    highlights: [
      "Improved knowledge graph link prediction by 33%.",
      "Built reusable Kubeflow Pipelines.",
      "Fine-tuned Mistral LLMs using PEFT.",
      "Reduced inference latency.",
      "Built end-to-end MLOps workflows.",
    ],
  },
];

export interface FeaturedProject {
  id: string;
  title: string;
  github: string;
  description: string;
  metrics: string[];
  tech: string[];
  image?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-proctoring",
    title: "AI Interview Proctoring System",
    github: "https://github.com/RoopakBRK/ai-proctoring-system",
    description: "An enterprise AI-powered remote examination monitoring platform utilizing computer vision, audio analysis, and behavioral analytics.",
    metrics: ["93% detection accuracy", "30+ reports generated daily", "Multi-modal monitoring"],
    tech: ["Python", "FastAPI", "OpenCV", "TensorFlow", "PostgreSQL", "Next.js"],
  },
  {
    id: "skillkendra",
    title: "SkillKendra",
    github: "https://github.com/RoopakBRK/skillkendra",
    description: "A multi-agent certificate verification and fraud detection platform.",
    metrics: ["50+ certificate providers", "87% OCR accuracy"],
    tech: ["LangChain", "OpenAI", "Next.js", "PostgreSQL"],
    image: "/skUI.jpg"
  },
  {
    id: "kyc-verification",
    title: "Automated KYC Verification Platform",
    github: "https://github.com/RoopakBRK/kyc-verification-platform",
    description: "An automated KYC pipeline engineering Aadhaar/PAN OCR extraction and facial similarity models to significantly reduce manual identity validation effort.",
    metrics: ["1000+ verifications", "97% face-match accuracy"],
    tech: ["Python", "FastAPI", "OpenCV", "PyTorch", "React"],
  },
  {
    id: "options-trading",
    title: "Options Trading Arbitrage Detection Engine",
    github: "https://github.com/RoopakBRK/options-arbitrage-engine",
    description: "A machine learning-powered quantitative trading system for identifying arbitrage opportunities in options markets.",
    metrics: ["71% directional accuracy", "0.84 F1 Score"],
    tech: ["Python", "Scikit-Learn", "Pandas", "QuantConnect"],
  },
  {
    id: "fincalify",
    title: "FinCalify",
    github: "https://github.com/RoopakBRK",
    description: "A comprehensive financial calculation platform offering precision tools for investment planning, loan amortization, and risk analysis.",
    metrics: ["Advanced calculators", "Intuitive dashboard"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "calsify",
    title: "Calsify.in",
    github: "https://github.com/RoopakBRK",
    description: "A versatile SaaS application featuring utility and conversion calculators for daily productivity.",
    metrics: ["Multiple utility tools", "High performance"],
    tech: ["Next.js", "React", "Node.js"],
    image: "/CalsifyUI.jpg"
  },
  {
    id: "validation-platform",
    title: "Validation Platform",
    github: "https://github.com/RoopakBRK",
    description: "A robust data validation engine designed to enforce schema rules, ensure data integrity, and maintain compliance at scale.",
    metrics: ["High throughput", "Custom rulesets"],
    tech: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: "bgc-dashboard",
    title: "BGC Dashboard",
    github: "https://github.com/RoopakBRK",
    description: "A background check monitoring dashboard for real-time tracking of candidate verification statuses and compliance metrics.",
    metrics: ["Real-time updates", "Enterprise tracking"],
    tech: ["React", "TypeScript", "Tailwind CSS"],
  }
];

export const additionalProjects: string[] = [
  "Knowledge Graph Ranking Research",
];

export interface TechStack {
  aiMl: string[];
  mlops: string[];
  backend: string[];
  frontend: string[];
}

export const techStack: TechStack = {
  aiMl: ["PyTorch", "TensorFlow", "HuggingFace", "PEFT", "LoRA", "LangChain", "RAG", "OpenCV"],
  mlops: ["Kubeflow", "MLflow", "Docker", "AWS"],
  backend: ["FastAPI", "Flask", "Node.js", "PostgreSQL"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
};

export interface ImpactMetric {
  label: string;
  value: string;
}

export const impactMetrics: ImpactMetric[] = [
  { label: "Identity Verifications Processed", value: "1000+" },
  { label: "AI Detection Accuracy", value: "93%" },
  { label: "Face Match Accuracy", value: "97%" },
  { label: "Certificate Providers Verified", value: "50+" },
  { label: "DSA Problems Solved", value: "300+" },
  { label: "Major AI & SaaS Projects", value: "8+" },
];

export const nowBuilding: string[] = [
  "Agentic AI Systems",
  "Multi-Agent Workflows",
  "LLM Fine-Tuning",
  "AI Trading Systems",
  "RAG Applications",
  "AI SaaS Products",
  "Workflow Automation",
  "Quantitative Finance",
];

export interface Testimonial {
  name: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Founder, AI Startup",
    text: "Roopak delivered a high-quality AI proctoring system that exceeded our expectations in both accuracy and performance.",
  },
  {
    name: "Engineering Manager",
    text: "His deep understanding of MLOps and LLM engineering was crucial for our latest feature rollout.",
  },
];

export interface BlogPost {
  title: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  { title: "Fine-Tuning Mistral with PEFT", slug: "fine-tuning-mistral" },
  { title: "Building Production AI Systems", slug: "production-ai-systems" },
  { title: "Kubeflow for ML Engineers", slug: "kubeflow-ml-engineers" },
  { title: "Lessons from Building AI Products", slug: "building-ai-products" },
  { title: "Agentic AI Architecture Patterns", slug: "agentic-ai-patterns" },
];

