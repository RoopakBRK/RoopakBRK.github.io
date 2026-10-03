export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  secondaryTagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export const personalInfo: PersonalInfo = {
  name: "Roopak Krishna",
  title: "AI/ML Engineer | AI FullStack Developer",
  summary: "I build and ship production AI systems end to end, from model development to deployment.",
  secondaryTagline:
    "AI/ML engineer building computer vision, OCR verification and agentic LLM systems, from prototype to production.",
  location: "Hyderabad, India",
  email: "roopak2804@gmail.com",
  github: "https://github.com/RoopakBRK",
  linkedin: "https://linkedin.com/in/roopak-krishna-32958425a",
  resume: "/Roopak_Bhukya_CV.pdf",
};

export interface Education {
  school: string;
  shortSchool: string;
  degree: string;
  major: string;
  period: string;
}

export const education: Education = {
  school: "Indian Institute of Technology (IIT) Hyderabad",
  shortSchool: "IIT Hyderabad",
  degree: "B.Tech",
  major: "Materials Science & Metallurgical Engineering",
  period: "2021 – 2025",
};

export const achievements: string[] = [
  "Contributed code fixes and improvements to 2 public open source ML and AI repositories.",
  "Solved 300+ DSA problems across LeetCode, GeeksforGeeks and Codeforces.",
];

export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  phase: string;
  highlights: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Net Connect Global",
    location: "Bengaluru",
    role: "AI Full Stack Developer",
    period: "Nov 2025 – Jul 2026",
    phase: "Inference, in production",
    highlights: [
      "Built an AI interview proctoring system using computer vision and AI agents.",
      "Detects suspicious faces and voices, gaze direction and mobile devices during interviews.",
      "Flags keystroke patterns and unauthorized browser activity.",
      "Generates 30+ proctoring reports daily for review.",
      "Designed a KYC pipeline that extracts Aadhaar and PAN details with OCR.",
      "Used Mistral AI to resolve unclear or incomplete document fields.",
      "Matched document photos to candidate faces across 1,000+ production verifications.",
    ],
  },
  {
    company: "Mobius by Gaian",
    location: "Hyderabad",
    role: "Machine Learning Intern",
    period: "Jun 2025 – Sep 2025",
    phase: "Fine-tuning",
    highlights: [
      "Improved knowledge graph link prediction by 33% by replacing R-GCN with CompGCN.",
      "Deployed a reusable MLOps workflow on Kubeflow Pipelines for GNN training, evaluation and versioning.",
      "Fine-tuned Mistral and other LLMs on proprietary domain datasets using PEFT.",
      "Gained 1.4% task accuracy while cutting inference latency by 0.3 seconds.",
    ],
  },
];

export type CapabilityId =
  | "vision"
  | "ocr"
  | "voice"
  | "agents"
  | "rag"
  | "graph"
  | "ml"
  | "mlops"
  | "backend"
  | "web"
  | "finance";

export interface Capability {
  id: CapabilityId;
  label: string;
  description: string;
}

export const capabilities: Capability[] = [
  { id: "vision", label: "Computer vision", description: "Seeing faces, gaze and objects in images and live video." },
  { id: "ocr", label: "OCR & documents", description: "Reading text from IDs, certificates and scanned documents." },
  { id: "voice", label: "Voice AI", description: "Speech recognition and real-time conversations over the phone." },
  { id: "agents", label: "LLMs & agents", description: "Language models and agents that reason, extract and decide." },
  { id: "rag", label: "RAG & retrieval", description: "Vector search that grounds model answers in real sources." },
  { id: "graph", label: "Graph ML", description: "Graph neural networks that learn from knowledge graphs." },
  { id: "ml", label: "Predictive ML", description: "Models that predict, detect and score from data." },
  { id: "mlops", label: "MLOps", description: "Pipelines that train, evaluate, version and track models." },
  { id: "backend", label: "Backend & APIs", description: "FastAPI services, pipelines and databases behind the product." },
  { id: "web", label: "Web products", description: "Dashboards and apps people use every day." },
  { id: "finance", label: "Finance & markets", description: "Markets, trading signals and money tools." },
];

export interface FeaturedProject {
  id: string;
  title: string;
  /** Name used on the project map where space is tight. */
  shortTitle: string;
  /** Capability ids this project is wired to in the project graph. */
  capabilities: CapabilityId[];
  period?: string;
  github: string;
  live?: string;
  description: string;
  metrics: string[];
  tech: string[];
  image?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "market-intelligence",
    capabilities: ["agents", "rag", "finance"],
    title: "Market Intelligence RAG System",
    shortTitle: "Market intelligence",
    period: "Jul 2026 – Sep 2026",
    github: "https://github.com/RoopakBRK",
    description:
      "A multi-agent RAG system that turns real-time market news into structured daily intelligence for NIFTY 50 companies. LangGraph orchestrates the agents, LangChain handles retrieval and tooling, Qdrant powers vector search, and Grok analyses sentiment, events and market impact.",
    metrics: [
      "9 specialized agents",
      "21 tools for ingestion, retrieval and event extraction",
      "Covers all NIFTY 50 companies",
    ],
    tech: ["LangGraph", "LangChain", "Qdrant", "Grok", "Python"],
  },
  {
    id: "compgcn-link-prediction",
    capabilities: ["graph", "ml", "mlops"],
    period: "Jun 2025 – Sep 2025",
    title: "Knowledge Graph Link Prediction with CompGCN",
    shortTitle: "CompGCN",
    github: "https://github.com/RoopakBRK",
    description:
      "My internship project at Mobius by Gaian. I replaced the existing R-GCN model with CompGCN and fine-tuned it to predict missing links in a knowledge graph, then shipped it as a reusable Kubeflow Pipelines workflow covering GNN training, evaluation and versioning.",
    metrics: ["33% better link prediction than R-GCN", "Reusable end-to-end MLOps workflow on Kubeflow Pipelines"],
    tech: ["PyTorch", "CompGCN", "R-GCN", "Kubeflow Pipelines"],
  },
  {
    id: "clinexa-voice-agent",
    capabilities: ["voice", "agents", "rag", "backend"],
    title: "Clinexa Voice Agent",
    shortTitle: "Clinexa voice agent",
    github: "https://github.com/RoopakBRK",
    description:
      "An AI voice agent that talks with callers over the phone in real time. Twilio handles the calls and audio streaming, and Deepgram converts speech to text as the caller speaks.",
    metrics: ["Handles live phone calls", "Real-time speech-to-text with Deepgram", "Call handling and audio streaming with Twilio"],
    tech: ["Twilio", "Deepgram"],
  },
  {
    id: "ai-proctoring",
    capabilities: ["vision", "agents", "backend", "web"],
    period: "Nov 2025 – Jul 2026",
    title: "AI Interview Proctoring System",
    shortTitle: "Proctoring",
    github: "https://github.com/RoopakBRK/ai-proctoring-system",
    description:
      "Monitors live interviews with computer vision and AI agents. It detects suspicious faces and voices, gaze direction and mobile devices, and flags keystroke patterns and unauthorized browser activity.",
    metrics: ["30+ proctoring reports generated daily", "93% detection accuracy", "Face, voice, gaze and device detection"],
    tech: ["Python", "FastAPI", "OpenCV", "TensorFlow", "PostgreSQL", "Next.js"],
  },
  {
    id: "kyc-verification",
    capabilities: ["vision", "ocr", "agents", "backend"],
    period: "Nov 2025 – Jul 2026",
    title: "Automated KYC Verification Platform",
    shortTitle: "KYC",
    github: "https://github.com/RoopakBRK/kyc-verification-platform",
    description:
      "Extracts details from Aadhaar and PAN documents with OCR, uses Mistral AI to resolve unclear or incomplete fields, and matches document photos against candidate faces to cut manual identity checks.",
    metrics: ["1,000+ production verifications", "97% face-match accuracy"],
    tech: ["Python", "FastAPI", "OpenCV", "PyTorch", "Mistral", "React"],
  },
  {
    id: "skillkendra",
    capabilities: ["ocr", "agents", "backend"],
    title: "Certificate Verification Platform (SkillKendra)",
    shortTitle: "SkillKendra",
    period: "May 2026 – Jul 2026",
    github: "https://github.com/RoopakBRK/skillkendra",
    description:
      "Reads uploaded certificates with PaddleOCR, EasyOCR and Tesseract in parallel, then cross-checks the details against official provider records with Selenium. A Mistral-based layer normalizes inconsistent fields and flags potential fraud, with manual review when the OCR output is unclear.",
    metrics: ["50+ certification providers", "3 OCR engines running in parallel", "AI fraud flagging with manual review"],
    tech: ["FastAPI", "PaddleOCR", "EasyOCR", "Tesseract", "Selenium", "Mistral"],
    image: "/skUI.jpg",
  },
  {
    id: "options-trading",
    capabilities: ["ml", "mlops", "finance"],
    title: "Options Trading System: Arbitrage Detection",
    shortTitle: "Options arbitrage",
    period: "Jan 2026 – Apr 2026",
    github: "https://github.com/RoopakBRK/options-arbitrage-engine",
    description:
      "Models volatility across strikes and expiries with yfinance data and spots pricing discrepancies across options chains, feeding an end-to-end data processing and visualization pipeline. Experiments are tracked in MLflow.",
    metrics: ["71% directional accuracy on historical data", "0.84 F1 score for arbitrage detection"],
    tech: ["Python", "yfinance", "Scikit-Learn", "Pandas", "MLflow"],
  },
  {
    id: "finacls",
    capabilities: ["web", "finance", "backend"],
    title: "Finacls",
    shortTitle: "Finacls",
    github: "https://github.com/RoopakBRK",
    description:
      "A financial calculation platform with tools for investment planning, loan amortization and risk analysis.",
    metrics: ["Advanced calculators", "Intuitive dashboard"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/fincalifyUI.jpg",
  },
  {
    id: "calsify",
    capabilities: ["web", "finance", "backend"],
    title: "Calsify.in",
    shortTitle: "Calsify",
    github: "https://github.com/RoopakBRK",
    live: "https://calsify.in",
    description: "A SaaS app of utility and conversion calculators for everyday productivity.",
    metrics: ["Multiple utility tools", "High performance"],
    tech: ["Next.js", "React", "Node.js"],
    image: "/CalsifyUI.jpg",
  },
  {
    id: "validation-platform",
    capabilities: ["backend", "web"],
    title: "Project Validation Platform",
    shortTitle: "Project validation",
    github: "https://github.com/RoopakBRK",
    description:
      "A platform where people get the projects they worked on validated by their managers, colleagues and team leads. Each reviewer rates the project from one to five stars and writes a personalised review of the person's work.",
    metrics: [
      "One to five star ratings per project",
      "Personalised reviews from managers, colleagues and team leads",
      "A verified record of the work someone has done",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: "bgc-dashboard",
    capabilities: ["web", "backend", "agents"],
    title: "BGC Dashboard",
    shortTitle: "BGC Dashboard",
    github: "https://github.com/RoopakBRK",
    description:
      "A background check dashboard for tracking candidate verification status and compliance metrics in real time.",
    metrics: ["Real-time updates", "Enterprise tracking"],
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export const techStack: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "C", "C++", "JavaScript", "TypeScript"] },
  { label: "AI / ML", items: ["PyTorch", "Scikit-Learn", "TensorFlow", "PEFT", "LoRA", "NLP", "Computer Vision", "LLM Fine\u2011Tuning"] },
  { label: "LLM / GenAI", items: ["RAG", "Agentic AI", "Multi-Agent Systems", "LangChain", "LangGraph", "Qdrant", "FAISS"] },
  { label: "MLOps & Cloud", items: ["Kubeflow", "Kubeflow Pipelines", "MLflow", "Docker", "GitHub Actions", "AWS"] },
  { label: "Backend / Web", items: ["React", "Next.js", "FastAPI", "Flask", "REST APIs"] },
  { label: "Data & Tools", items: ["PostgreSQL", "MySQL", "Git", "GitHub", "Jupyter", "Postman"] },
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
