
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
    company: "Coding Jr",
    role: "AI/ML Developer",
    period: "Feb 2025 - Apr 2025",
    highlights: [
      "Developed an enterprise-grade AI Copilot for automated codebase generation and management",
      "Engineered secure data handling protocols for private enterprise LLM integration",
      "Implemented advanced Data Structures to optimize code parsing and generation efficiency",
      "Designed enterprise-specific customization layers for secure proprietary environments"
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
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Git", "LaTeX", "Data Structures", "Flask", "Pandas"]
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
  medium: "https://medium.com/@dhanashree2311",
  substack: "https://dhanopanno.substack.com",
  email: "dhanashree.professional@gmail.com"
};
