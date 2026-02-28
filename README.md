<div align="center">

```
██████╗ ██╗  ██╗ █████╗ ███╗   ██╗ █████╗ ███████╗██╗  ██╗██████╗ ███████╗███████╗
██╔══██╗██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔════╝██║  ██║██╔══██╗██╔════╝██╔════╝
██║  ██║███████║███████║██╔██╗ ██║███████║███████╗███████║██████╔╝█████╗  █████╗  
██║  ██║██╔══██║██╔══██║██║╚██╗██║██╔══██║╚════██║██╔══██║██╔══██╗██╔══╝  ██╔══╝  
██████╔╝██║  ██║██║  ██║██║ ╚████║██║  ██║███████║██║  ██║██║  ██║███████╗███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝
```

### I translate human problems into machine solutions.

*Machine Learning Intern @ ISRO · Final Year CS · Pune, India*

[![Portfolio](https://img.shields.io/badge/Portfolio-7c3aed?style=for-the-badge&logo=vercel&logoColor=white)](https://portfoliodhanashree.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/dhanashree2311)
[![Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@dhanashreebansode416)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dhanashreebansode70@gmail.com)

</div>

---

## Who I am

I'm a final-year AIML student who builds AI systems that actually ship.

Not notebook experiments. Not Colab demos. Deployed. Real users. Real data.

Currently working as a Machine Learning Intern at **ISRO** — processing radar signal data, running FFT pipelines, and turning raw frequency-domain representations into ML-ready features used by actual researchers.

When I'm not at ISRO, I'm shipping side projects, writing on Medium, and collecting Best Paper Awards at international conferences.

---

## What I'm working on right now

```python
current_status = {
    "role":     "ML Intern @ ISRO",
    "building": "AI systems that make it to production",
    "learning": ["Signal Processing", "Transformer Fine-tuning", "MLOps"],
    "open_to":  "ML Engineer / AI Engineer / SWE (AI) roles — 2026",
}
```

---

## Featured Projects

### Smart AI Inbox
> The inbox assistant I built because I had 4,000 unread emails and kept missing deadlines.

**What it does:** Connects to your real Gmail via OAuth. Runs emails through a 4-model ML pipeline. Tells you what's urgent. Lets you ask your inbox questions in plain English. One click cleans up the noise.

**The ML part that actually matters:**
- XGBoost + Random Forest **ensemble voting** — both models vote on priority, disagreements logged as `both_agree` / `classifier_override` / `scorer_wins`
- Started at **91.67% accuracy** — looked great, was lying (overfitted on 60 synthetic samples)
- Manually labeled **65 real emails**, retrained on **125 total samples**
- Landed at **72% on real held-out data** — the honest number
- pgvector semantic search, NLP deadline extraction, K-Means clustering

**Stack:** Python · FastAPI · XGBoost · Random Forest · sentence-transformers · pgvector · Supabase · React · Google OAuth · Hugging Face Spaces · Vercel

[![Live](https://img.shields.io/badge/LIVE-smart--ai--inbox.vercel.app-22c55e?style=flat-square&logo=vercel)](https://smart-ai-inbox.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-GitHub-181717?style=flat-square&logo=github)](https://github.com/dhanashree23112003/smart-ai-inbox-backend)
[![Frontend](https://img.shields.io/badge/Frontend-GitHub-181717?style=flat-square&logo=github)](https://github.com/dhanashree23112003/smart-ai-inbox-frontend)

---

### Good News Only
> Fine-tuned RoBERTa to filter live RSS news and surface only positive, constructive stories.

70.5% → **75.6% accuracy** after fine-tuning. **F1-score: 0.80.** Async ingestion pipeline. DistilBERT for memory-efficient production hosting.

[![Live](https://img.shields.io/badge/LIVE-good--news--only--app.vercel.app-22c55e?style=flat-square&logo=vercel)](https://good-news-only-app.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)](https://github.com/dhanashree23112003/good-news-only-app)

---

### Hint AI
> LLM-powered hint generator for LeetCode. Gives you nudges, not answers.

Chain-of-thought prompt engineering to teach problem-solving without enabling answer copying.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)](https://github.com/dhanashree23112003/hint_ai)

---

### Museum Heist ML
> AI guards that learn from thief movement patterns using probabilistic modeling and heatmaps.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)](https://github.com/dhanashree23112003/museum-heist-ml)

---

## Skills

```
Machine Learning    ████████████████████  XGBoost, Random Forest, Ensemble Methods,
                                          Scikit-learn, PyTorch, K-Means, Feature Eng.

NLP                 ███████████████░░░░░  RoBERTa, DistilBERT, sentence-transformers,
                                          pgvector, Semantic Search, Sentiment Analysis

Signal Processing   ████████████░░░░░░░░  FFT, Spectral Analysis, MMT Plots (@ ISRO)

Backend             ████████████████░░░░  FastAPI, REST APIs, Google OAuth2, Gmail API

Databases           ████████████░░░░░░░░  PostgreSQL, Supabase, pgvector, ChromaDB

Deployment          ████████████░░░░░░░░  HF Spaces, Vercel, Render, Docker

Frontend            █████████░░░░░░░░░░░  React, Tailwind CSS
```

---

## One thing I believe strongly

> A model that's honest about what it doesn't know is more valuable than one that confidently gets everything wrong.

That's why I report 72% instead of 91%. That's why I document failure modes. That's why I build things that actually deploy instead of things that only work in notebooks.

---

## Recognition

**Best Paper Presentation Award — AI & ML Track**
ICRETETM 2024 International Conference
*"Enhancing the Recommendation of Amazon with AI"*

---

## GitHub Stats

<div align="center">

![Dhanashree's GitHub stats](https://github-readme-stats.vercel.app/api?username=dhanashree23112003&show_icons=true&theme=tokyonight&hide_border=true&count_private=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=dhanashree23112003&layout=compact&theme=tokyonight&hide_border=true)

</div>

---

## Writing

I write about ML, AI systems, and building things on Medium.

[![Medium](https://img.shields.io/badge/Read_on_Medium-@dhanashreebansode416-000000?style=for-the-badge&logo=medium)](https://medium.com/@dhanashreebansode416)

---

<div align="center">

*"I'm a translator — I translate our language into machine's language."*

**Currently open to ML Engineer / AI Engineer roles for 2026.**
Reach me at [dhanashreebansode70@gmail.com](mailto:dhanashreebansode70@gmail.com)

</div>
