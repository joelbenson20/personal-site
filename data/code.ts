export type Tag = "software" | "data-science" | "data-analysis" | "web" | "research";

export type Repo = {
  title: string;
  years: string;
  description: string;
  stack: string[];
  tags: Tag[];
  links: { label: string, href: string }[];
};

export const repos: Repo[] = [
  {
    title: "Stllr",
    years: "2026 – present",
    description:
      "A full-stack social web app I designed, built, and deployed independently: star any webpage, post to a per-page forum, and join a per-page live chat room. Backed by a production PostgreSQL database with Redis and Celery for async tasks, on a DigitalOcean Linux server, paired with a Chrome extension published to the Web Store.",
    stack: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Docker", "Linux", "JavaScript", "Chrome Extension"],
    tags: ["software", "web"],
    links: [
      { label: "stllr.io", href: "https://stllr.io" },
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/stllr/hmpgjgepcimfdojfbffhaedmkndomfml" },
      { label: "github/stllr", href: "https://github.com/joelbenson20/stllr" },
      { label: "github/stllr-extension", href: "https://github.com/joelbenson20/stllr-chrome-extension" },
    ],
  },
  {
    title: "Smartphone Addiction Prediction",
    years: "2026",
    description:
      "An end-to-end machine-learning pipeline (for a Kaggle competition) predicting problematic smartphone and internet use from survey and behavioral data: cleaning and quality checks, feature engineering, a logistic-regression baseline and a tuned LightGBM model, evaluated with ROC-AUC.",
    stack: ["Python", "pandas", "scikit-learn", "LightGBM", "Jupyter", "Git"],
    tags: ["data-science", "data-analysis", "research"],
    links: [
      { label: "github/SmartphoneAddictionPrediction", href: "https://github.com/joelbenson20/SmartphoneAddictionPrediction" },
    ],
  },
  {
    title: "Personal Site",
    years: "2026",
    description:
      "A personal website and blog built in Next.js and React, hosted on Vercel with continuous deployment from GitHub. Home/bio, CV, and writing.",
    stack: ["Next.js", "React", "TypeScript", "Vercel", "Git"],
    tags: ["software", "web"],
    links: [
      { label: "joelbenson.com", href: "https://joelbenson.com" },
      { label: "github/personal-site", href: "https://github.com/joelbenson20/personal-site" },
    ],
  },
  {
    title: "Dawn Hypermedia",
    years: "2026",
    description:
      'A Django web application publishing experimental "hyperfiction": creative writing that incorporates internal and external hyperlinks, popups, sound, and images.',
    stack: ["Python", "Django", "JavaScript"],
    tags: ["software", "web"],
    links: [
      { label: "dawnhyper.media", href: "https://dawnhyper.media" },
      { label: "github/dawn", href: "https://github.com/joelbenson20/dawn" },
    ],
  },
  {
    title: "Music Genre Network Analysis",
    years: "2019",
    description:
      "Used similarity-based networks to analyze existing music genres and construct new ones: built a network from song audio features, then applied spectral clustering and modularity maximization, validating communities against ground-truth genre labels.",
    stack: ["Python", "NetworkX", "NumPy", "Jupyter"],
    tags: ["data-science", "data-analysis"],
    links: [
      { label: "github/MusicNetworkAnalysis", href: "https://github.com/joelbenson20/Music-Network-Analysis" },
    ],
  },
  {
    title: "Algorithmic Fairness in Recidivism Prediction",
    years: "2020",
    description:
      "Reproduced ProPublica's analysis of racial bias in the COMPAS recidivism algorithm, then trained Decision Tree and SVM classifiers to compare fairness across multiple metrics (false-positive/false-negative rates, cost-based formulations), showing how competing fairness definitions yield conflicting conclusions.",
    stack: ["Python", "scikit-learn", "Jupyter"],
    tags: ["data-science", "research"],
    links: [],
  },
  {
    title: "EmotiMaps",
    years: "2019",
    description:
      "A Python application that streams tweets and scores their sentiment against a crowdsourced lexicon to visualize real-time, state-by-state emotional conditions across the United States, rendered onto a US map.",
    stack: ["Python", "Tweepy", "Plotly", "NumPy", "HTML"],
    tags: ["data-science", "software", "web"],
    links: [
      { label: "github/EmotiMaps", href: "https://github.com/joelbenson20/EmotiMaps" },
    ],
  },
  {
    title: "Epidemic Simulator",
    years: "2020",
    description:
      "A graphical simulation of disease spread across a population, with customizable transmission rate and range, incubation/illness/convalescence periods, death rate, and virus mutation rate.",
    stack: ["Python", "Tkinter"],
    tags: ["software", "data-science"],
    links: [
      { label: "github/Epidemic-Simulator", href: "https://github.com/joelbenson20/Epidemic-Simulator" },
    ],
  },
  {
    title: "Language Graph Generator",
    years: "2020",
    description:
      "Generates and saves a word graph from a corpus of text files, storing each word with its frequency and co-occurrence counts: a foundation for NLP and network analysis of language.",
    stack: ["Python", "NLP", "Jupyter"],
    tags: ["data-science", "software"],
    links: [
      { label: "github/language-graph-generator", href: "https://github.com/joelbenson20/language-graph-generator" },
    ],
  },
  {
    title: "Statistical Spell Checker & Word Recommender",
    years: "2020",
    description:
      "Scans text documents to flag misspelled words with suggested fixes and recommends synonyms based on each word's context.",
    stack: ["Python", "NLP"],
    tags: ["software", "data-science"],
    links: [
      { label: "github/word-checker-and-recommender", href: "https://github.com/joelbenson20/word-checker-and-recommender" },
    ],
  },
  {
    title: "Object Rotation",
    years: "2020",
    description:
      "Generates random 3D objects based on a chosen number of vertices and lets the user inspect them interactively through rotation: a graphics and computational-geometry exercise.",
    stack: ["Python", "Graphics", "Geometry"],
    tags: ["software"],
    links: [
      { label: "github/Object-Rotation", href: "https://github.com/joelbenson20/Object-Rotation" },
    ],
  },
];
