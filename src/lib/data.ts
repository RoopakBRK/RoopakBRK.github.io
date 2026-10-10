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
  resume: "/Roopak_AI_CV.pdf",
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
      "Built and productionized a multimodal AI proctoring platform using computer vision and AI agents.",
      "Detects faces, voices, gaze, phones, keystroke patterns and browser activity.",
      "Reached 93% detection accuracy on a 500+ image benchmark, generating 30+ risk reports daily.",
      "Cut per-interview processing cost by 50% (INR 8 to INR 4) with AWS EC2 Spot Instances and parallel analysis.",
      "Reduced report time for 30-minute sessions from 5.5 to 4 minutes.",
      "Built a production KYC pipeline for 1,000+ Aadhaar and PAN verifications using OCR, OpenAI and document-to-face matching.",
      "Deployed on AWS EC2 with GitHub Actions CI/CD.",
    ],
  },
  {
    company: "Mobius by Gaian",
    location: "Hyderabad",
    role: "Machine Learning Intern",
    period: "Jun 2025 – Sep 2025",
    phase: "Fine-tuning",
    highlights: [
      "Improved knowledge graph link prediction by 33% by migrating from R-GCN to CompGCN.",
      "Productionized a reusable Kubeflow Pipelines workflow for GNN training, evaluation, experiment tracking and model versioning.",
      "Fine-tuned Mistral LLMs on proprietary domain datasets using PEFT.",
      "Gained 1.4 percentage points of accuracy while cutting inference latency by 300 ms.",
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
    title: "Multi-Agent Market Intelligence System",
    shortTitle: "Market intelligence",
    period: "Aug 2026 – Sep 2026",
    github: "https://github.com/RoopakBRK/Market_Analysis",
    description:
      "A multi-agent RAG system that automates daily market intelligence reports for NIFTY 50 companies. LangGraph, LangChain and Groq orchestrate the agents and their tools in parallel, Qdrant hybrid search (dense + BM25, RRF and cross-encoder reranking) retrieves across 20 years of market data, and a Firecrawl and Tavily pipeline ingests full-text news from 8 sources.",
    metrics: [
      "9 agents and 25 tools running in parallel",
      "25,497 chunks spanning 20 years of NIFTY 50 data",
      "Thin or missing article summaries cut from 25% to 0%",
      "3-tier LLM fallback chain, a fact-checking agent and 137 automated pytest tests",
    ],
    tech: ["LangGraph", "LangChain", "Groq", "Qdrant", "Firecrawl", "Tavily", "Logfire", "Python"],
  },
  {
    id: "compgcn-link-prediction",
    capabilities: ["graph", "ml", "mlops"],
    period: "Jun 2025 – Sep 2025",
    title: "Knowledge Graph Link Prediction with CompGCN",
    shortTitle: "CompGCN",
    github: "https://github.com/RoopakBRK",
    description:
      "My internship project at Mobius by Gaian. I replaced the existing R-GCN model with CompGCN and fine-tuned it to predict missing links in a knowledge graph, then shipped it as a reusable Kubeflow Pipelines workflow covering GNN training, evaluation, experiment tracking and model versioning.",
    metrics: ["33% better link prediction than R-GCN", "Reusable end-to-end MLOps workflow on Kubeflow Pipelines"],
    tech: ["PyTorch", "CompGCN", "R-GCN", "Kubeflow Pipelines"],
  },
  {
    id: "clinexa-voice-agent",
    capabilities: ["voice", "agents", "rag", "backend"],
    title: "Clinexa: RAG-Powered Healthcare Voice Agent",
    shortTitle: "Clinexa voice agent",
    period: "Sep 2026 – Oct 2026",
    github: "https://github.com/RoopakBRK/Clinexa_Voice_Agent",
    description:
      "A real-time voice assistant for primary care, built in Python with FastAPI WebSockets, Twilio Media Streams and Deepgram streaming STT/TTS. It answers from a safety-aware RAG pipeline over clinical guidelines, using Qdrant, BGE embeddings, BM25/RRF hybrid search, cross-encoder reranking and age- and pregnancy-aware filters, plus a phonetic sparse-vector search over medicine names.",
    metrics: [
      "121 ms p95 retrieval latency over 4,200+ clinical-guideline chunks",
      "87% recall@10 across 252K+ medicine names on 4,000 synthetic noisy queries",
      "Retrieval tools at ~300 ms p95 latency, traced with OpenTelemetry in Pydantic Logfire",
      "356 automated tests and an evaluation harness for Hits@k, MRR and NDCG",
    ],
    tech: ["Python", "FastAPI", "WebSockets", "Twilio", "Deepgram", "Qdrant", "BGE", "Logfire", "OpenTelemetry"],
    image: "/clinexsa.png",
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
    metrics: [
      "93% detection accuracy on a 500+ image benchmark of simulated cheating scenarios",
      "30+ risk reports generated daily",
      "Processing cost per interview cut by 50% with AWS EC2 Spot Instances and parallel analysis",
      "Report time for 30-minute sessions down from 5.5 to 4 minutes",
    ],
    tech: ["Python", "FastAPI", "OpenCV", "TensorFlow", "PostgreSQL", "Next.js", "AWS EC2"],
  },
  {
    id: "kyc-verification",
    capabilities: ["vision", "ocr", "agents", "backend"],
    period: "Nov 2025 – Jul 2026",
    title: "Automated KYC Verification Platform",
    shortTitle: "KYC",
    github: "https://github.com/RoopakBRK/kyc-verification-platform",
    description:
      "Extracts details from Aadhaar and PAN documents with OCR, uses OpenAI to resolve unclear or incomplete fields, and matches document photos against candidate faces to cut manual identity checks.",
    metrics: ["1,000+ production verifications", "97% face-match accuracy", "Deployed on AWS EC2 with GitHub Actions CI/CD"],
    tech: ["Python", "FastAPI", "OpenCV", "PyTorch", "OpenAI", "React"],
  },
  {
    id: "skillkendra",
    capabilities: ["ocr", "agents", "backend"],
    title: "Certificate Verification Platform (SkillKendra)",
    shortTitle: "SkillKendra",
    period: "Jul 2026 – Aug 2026",
    github: "https://github.com/RoopakBRK/CAFS_Website",
    description:
      "An asynchronous certificate-verification API built with Python and FastAPI. It runs PaddleOCR, EasyOCR and Tesseract in parallel with consensus voting to improve extraction accuracy, then uses Playwright to cross-check the details against official provider records. Mistral and Qwen vision-language models handle difficult fields in the background, and TruFor image forensics detects tampered or forged certificates.",
    metrics: [
      "72 certification providers",
      "3 OCR engines in parallel with consensus voting",
      "Up to 2 s saved per document with background vision-language models",
      "TruFor image forensics for tampered or forged certificates",
    ],
    tech: ["Python", "FastAPI", "PaddleOCR", "EasyOCR", "Tesseract", "Playwright", "Mistral", "Qwen", "TruFor"],
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
    image: "/finacls.png",
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
  { label: "AI / ML", items: ["PyTorch", "Scikit-Learn", "TensorFlow", "PEFT", "LoRA", "NLP", "Computer Vision", "LLM Fine\u2011Tuning", "OCR"] },
  { label: "LLM / GenAI", items: ["RAG", "Embeddings", "Hybrid Search", "Agentic AI", "Multi-Agent Systems", "LangChain", "LangGraph", "Qdrant", "vLLM", "Groq", "OpenAI API"] },
  { label: "MLOps & Cloud", items: ["Kubeflow", "MLflow", "Docker", "GitHub Actions", "AWS", "Logfire", "OpenTelemetry"] },
  { label: "Backend / Web", items: ["React", "Next.js", "FastAPI", "Flask", "REST APIs", "WebSockets", "Twilio", "Deepgram"] },
  { label: "Data & Tools", items: ["PostgreSQL", "MySQL", "Git/GitHub", "Jupyter", "Postman", "Playwright", "pytest", "Firecrawl", "Tavily"] },
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
