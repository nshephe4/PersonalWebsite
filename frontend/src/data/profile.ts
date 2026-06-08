export const contact = {
  name: "Nathaniel J. Shepherd",
  email: "nathaniel.shepherd@utk.edu",
  github: "https://github.com/nshephe4",
  avatar: "https://avatars.githubusercontent.com/u/177554629?v=4",
  role: "Ph.D. student at the University of Tennessee, Knoxville",
};

export const focusAreas = [
  "LLM systems for policy",
  "RAG for procedures",
  "Contract intelligence",
  "Model evaluation and benchmarking",
];

export const mainProjectLanes = [
  {
    name: "LLM Policy Systems",
    summary:
      "Designing and evaluating language-model workflows for policy-heavy domains where answers need traceable evidence and careful interpretation.",
  },
  {
    name: "RAG for Procedures",
    summary:
      "Building retrieval-augmented pipelines that connect procedural questions to relevant source documents, benchmark results, and reproducible evaluation.",
  },
  {
    name: "Contracts",
    summary:
      "Exploring how LLMs can support contract review, clause understanding, obligation tracking, and comparison across structured legal or procurement text.",
  },
];

export const projects = [
  {
    name: "LLM RAG Policy and Procedures",
    repo: "dse697_LU_NS",
    href: "https://github.com/nshephe4/dse697_LU_NS",
    language: "Python",
    status: "Primary project",
    summary:
      "Benchmarks baseline retrieval-augmented generation against graph-based RAG for policy and procedure question answering over nuclear regulatory documents.",
    details: [
      "Compares LLM response quality across baseline RAG and graph-based RAG approaches.",
      "Uses metrics including exact match, ROUGE, BLEU, and cosine similarity.",
      "Frames policy and procedure retrieval as an evaluation problem, not just a chatbot interface.",
    ],
  },
  {
    name: "Policy and Procedure Verification",
    repo: "dse697_finetune",
    href: "https://github.com/nshephe4/dse697_finetune",
    language: "Python",
    status: "Primary project",
    summary:
      "Fine-tunes and evaluates Meta Llama 3 8B-Instruct for policy and procedure verification tasks using a policy alignment dataset.",
    details: [
      "Covers dataset loading, model loading, fine-tuning, and evaluation scripts.",
      "Compares base and fine-tuned model outputs in CSV result files.",
      "Focuses on practical evaluation of AI behavior in procedure-centered workflows.",
    ],
  },
  {
    name: "Contract Intelligence Workstream",
    repo: "Contracts",
    href: "https://github.com/nshephe4",
    language: "LLM / RAG",
    status: "Primary focus",
    summary:
      "A developing project lane for applying LLM and RAG methods to contract understanding, clause retrieval, and obligation-oriented review.",
    details: [
      "Targets contracts as a document-heavy domain where retrieval quality and source grounding matter.",
      "Connects clause-level search, summarization, and comparison with evaluation-first workflows.",
      "Designed to grow into public artifacts as contract datasets, demos, or notebooks are ready to share.",
    ],
  },
];

export const supportingProjects = [
  {
    name: "Fantasy Football Data Analysis",
    repo: "dse511_project",
    href: "https://github.com/nshephe4/dse511_project",
    language: "Jupyter Notebook",
    status: "Applied analytics project",
    summary:
      "Uses Sleeper API data, SQL storage, MATLAB analysis, and regression-based predictions to evaluate fantasy football team performance.",
    details: [
      "Builds a data pipeline from API collection into a SQL-backed workflow.",
      "Visualizes team trends and predicted scores for league comparison.",
      "Connects a personal interest with statistics and reproducible analysis.",
    ],
  },
  {
    name: "Personal Website",
    repo: "PersonalWebsite",
    href: "https://github.com/nshephe4/PersonalWebsite",
    language: "React + FastAPI",
    status: "Active build",
    summary:
      "A full-stack portfolio site built with React, Vite, TypeScript, and FastAPI to present research, projects, and photography.",
    details: [
      "Uses a React frontend with routed pages and shared profile data.",
      "Includes a FastAPI backend for metadata and photo uploads.",
      "Designed for local development and deployment on a Debian VM.",
    ],
  },
];

export const labProjects = [
  {
    name: "Demo PhysioTwin",
    repo: "UTK-ASL/Demo_PhysioTwin",
    href: "https://github.com/UTK-ASL/Demo_PhysioTwin",
    language: "Python",
    summary: "A physics-informed deep learning demo for disease prediction.",
  },
  {
    name: "Digital Twin Predictive Maintenance Dataset",
    repo: "UTK-ASL/Dataset_digital_twin_predictive_maintenance",
    href: "https://github.com/UTK-ASL/Dataset_digital_twin_predictive_maintenance",
    language: "Dataset",
    summary:
      "Public dataset materials for cross-domain digital twin predictive maintenance research using machine learning and large language models.",
  },
  {
    name: "AI/ML Learning Notes",
    repo: "UTK-ASL/AI_ML_Learning_Notes",
    href: "https://github.com/UTK-ASL/AI_ML_Learning_Notes",
    language: "Jupyter Notebook",
    summary: "Shared AI and machine learning notes, play code, math, and exploratory examples.",
  },
  {
    name: "Demo Personal Website",
    repo: "UTK-ASL/Demo_Personal_Webiste",
    href: "https://github.com/UTK-ASL/Demo_Personal_Webiste",
    language: "JavaScript",
    summary: "A demo repository for quickly building a personal website for a student.",
  },
];
