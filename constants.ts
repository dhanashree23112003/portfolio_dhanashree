
import { ExperienceItem, ProjectItem, SkillCategory, AchievementItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "ISRO (Indian Space Research Organisation)",
    role: "Machine Learning Intern",
    period: "Current",
    isFeatured: true,
    highlights: [
      "Radar signal processing and feature extraction",
      "Discrete Fourier Transform (DFT) transformations on geospatial datasets",
      "ML-based signal quality evaluation and noise reduction",
      "Researching physical-mathematical models for atmospheric correction"
    ]
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
    title: "Smart AI Inbox",
    description: "AI-powered email assistant that classifies, scores and extracts deadlines from your Gmail using a 4-model ML pipeline. Features XGBoost + Random Forest ensemble for priority voting, K-Means clustering for inbox organization, and pgvector semantic search. Achieved 72% accuracy on real-world data with automated deadline extraction and one-click Gmail management.",
    tech: ["Python", "FastAPI", "React", "XGBoost", "Random Forest", "sentence-transformers", "pgvector", "Supabase", "Google OAuth"],
    link: "https://smart-ai-inbox.vercel.app"
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
  },
  {
    title: "Medical Insurance Cost Prediction",
    description: "Developed a predictive model to estimate insurance premiums based on demographics and health metrics. Includes a Flask web application and comprehensive EDA for feature selection.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Flask", "Matplotlib"],
    link: "https://github.com/dhanashree23112003/Medical-Insurance-Cost-Prediction"
  },
  {
    title: "Gold Price Prediction",
    description: "Leveraged Random Forest Regressor and historical time-series data to forecast gold prices. Implemented real-time input processing for instantaneous price estimations.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Visualization"],
    link: "https://github.com/dhanashree23112003/gold_price_prediction"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Anomaly detection system designed to identify fraudulent transactions with high precision. Utilized advanced feature engineering and model evaluation (Accuracy/RMSE) to minimize false positives.",
    tech: ["Machine Learning", "Python", "Data Preparation", "Feature Engineering", "Model Evaluation"],
    link: "https://github.com/dhanashree23112003/Credit-card-fraud-detection"
  },
  {
    title: "Adaptive AI Security Simulation",
    description: "Smart city threat detection system utilizing heatmaps and behavioral ML models to predict and mitigate security risks.",
    tech: ["TensorFlow", "D3.js", "Flask", "OpenCV"],
    link: "https://github.com/dhanashree23112003"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core AI",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Signal Processing", "Computer Vision"]
  },
  {
    title: "Technical",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "Supabase", "Git", "LaTeX", "Chrome Extensions", "DOM Scraping", "Data Structures", "Flask", "Pandas"]
  },
  {
    title: "Research",
    skills: ["Data Analysis", "Mathematical Modeling", "Scientific Writing", "DFT"]
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
