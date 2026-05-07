
import { ExperienceItem, ProjectItem, SkillCategory, AchievementItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "ISRO (Indian Space Research Organisation)",
    role: "Machine Learning Intern",
    period: "Jan 2026 — Apr 2026",
    isFeatured: true,
    highlights: [
      "Built an ML pipeline for spurious signal detection in Wind Profiler Radar IQ data using spike masking, narrowband detection, and Isolation Forest on 27,000+ samples.",
      "Implemented DC removal (mean subtraction and EMD) with Doppler interpolation for vertical spike correction.",
      "Developed a Flask web application with real-time parameter tuning, beam-wise visualization, and cleaned .dat file export.",
      "Proactively identified a data leakage bug that corrected accuracy from a false 92% to an honest 72%, receiving commendation for integrity."
    ],
    certificateLink: "https://drive.google.com/file/d/1DQZJH-X3xOyYd2SOMc4Up77GJ1AzrjBf/view?usp=sharing"
  },
  {
    company: "Medium",
    role: "Writer (Women in Technology)",
    period: "2023 - Present",
    highlights: [
      "Authoring technical deep-dives for major publications",
      "Simplifying complex ML concepts (RAG, CNNs, Transformers)",
      "Advocating for diversity and inclusion in the tech industry"
    ]
  },
  {
    company: "Infosys Springboard",
    role: "Pragat: Path to Future",
    period: "2023",
    highlights: [
      "Specialized training in Python and emerging technologies",
      "Hands-on project work in automation and system design",
      "Certification in Advanced Python for Data Science"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Nyay AI",
    description: "Multilingual voice AI legal intake system (Hindi/English/Hinglish) using LLaMA 3.3 70B. Resolves unstructured legal complaints into structured FIRs with auto-identified IPC sections, reducing filing time by ~80%. Solved complex state serialization and language-enforcement bugs to ensure production reliability.",
    tech: ["FastAPI", "React", "Groq", "LLaMA 3.3", "PostgreSQL", "Voice AI"],
    link: "https://nyay-ai-nine.vercel.app/"
  },
  {
    title: "Smart AI Inbox",
    description: "Full-stack email manager with a 4-model ML pipeline: XGBoost importance scorer, Random Forest classifier, regex+dateutil deadline extractor, and K-Means topic clustering. Features real-time feedback loops and cosine similarity search on pgvector embeddings.",
    tech: ["Python", "FastAPI", "XGBoost", "Sentence-Transformers", "pgvector", "Supabase", "React"],
    link: "https://smart-ai-inbox.vercel.app"
  },
  {
    title: "TradeGuard AI",
    description: "3-agent compliance monitor (Analyst → Mapper → Reporter) optimized for 63% token reduction. Detects fraud via cross-transaction reversal window analysis and same-IP patterns. Built with human-in-the-loop constraints and exponential backoff retry logic.",
    tech: ["Python", "FastAPI", "LLaMA 3.3", "Groq API", "Agentic Workflows", "SQLite"],
    link: "https://github.com/dhanashree23112003/tradeguard-ai"
  },
  {
    title: "Hinglish ML Tutor",
    description: "LLaMA 3.2-1B fine-tuned using LoRA on 164 hand-crafted Marathlish/Hinglish pairs for Indian engineering students. Quantized to 4-bit for zero-cost T4 inference, delivering technically accurate explanations in native dialects.",
    tech: ["Unsloth", "LoRA", "LLaMA 3.2", "HuggingFace", "Python"],
    link: "https://huggingface.co/dhanashree2311/hinglish-ml-llama-1b"
  },
  {
    title: "Good News Only",
    description: "Built a full-stack AI news platform (FastAPI + Vercel) that filters live RSS feeds using a fine-tuned RoBERTa model (75.6% accuracy). Features asynchronous ingestion, background caching, and a lightweight deployment strategy on HuggingFace Spaces to optimize memory and latency.",
    tech: ["FastAPI", "RoBERTa", "HuggingFace", "RSS Ingestion", "Asynchronous Caching"],
    link: "https://good-news-only-app.vercel.app/"
  },
  {
    title: "Hint.ai for LeetCode",
    description: "A Chrome Extension built with Claude's assistance that provides progressive, Socratic hints for LeetCode problems. Designed to guide user thinking through 4 levels of depth (Intuition to Edge Cases) without spoiling solutions. Features a lightweight MV3 architecture with DOM scraping and automated state management.",
    tech: ["JavaScript", "Chrome API", "MV3", "DOM Scraping", "MutationObserver"],
    link: "https://github.com/dhanashree23112003/hint_ai"
  },
  {
    title: "Document Q&A System",
    description: "A robust RAG (Retrieval Augmented Generation) pipeline using NLP embeddings and vector databases to query complex documentation.",
    tech: ["Python", "LangChain", "OpenAI", "FAISS", "Streamlit"],
    link: "https://github.com/dhanashree23112003"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Gen AI & NLP",
    skills: ["LLaMA 3.2", "LoRA Fine-tuning", "Groq API", "Multi-Agent Pipelines", "RAG", "pgvector", "Prompt Engineering", "HuggingFace"]
  },
  {
    title: "Machine Learning",
    skills: ["XGBoost", "Random Forest", "Isolation Forest", "LSTM", "K-Means", "Scikit-Learn", "PyTorch", "Signal Processing"]
  },
  {
    title: "Backend & Systems",
    skills: ["FastAPI", "Flask", "Python", "SQL", "Docker", "Vercel", "Git", "Supabase"]
  },
  {
    title: "Research",
    skills: ["Mathematical Modeling", "Scientific Writing", "DFT", "Data Analysis"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Best Paper Presentation Award",
    event: "ICRETETM-2024",
    topic: "Amazon Recommendation Systems: Analyzing Cold-Start Problems"
  }
];

export const SOCIALS = {
  github: "https://github.com/dhanashree23112003",
  linkedin: "https://linkedin.com/in/dhanashree2311",
  email: "dhanashree.professional@gmail.com"
};
