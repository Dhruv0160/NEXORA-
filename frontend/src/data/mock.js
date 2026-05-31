// Mock data for Nexora AI Solutions — honest content for a new boutique AI studio

export const heroRotatingTexts = [
  "Generative AI",
  "AI Agents & Automation",
  "Predictive Analytics",
  "Computer Vision",
  "Conversational AI"
];

// Capabilities we offer (not inflated numbers)
export const heroBadges = [
  { label: "Discovery", desc: "In 1 week", icon: "Search" },
  { label: "Prototype", desc: "In 2–3 weeks", icon: "Layers" },
  { label: "Engineer", desc: "Production-ready", icon: "Code2" },
  { label: "Operate", desc: "24/7 monitored", icon: "Activity" }
];

export const coreServices = [
  {
    id: "generative-ai",
    icon: "Sparkles",
    title: "Generative AI",
    headline: "Custom LLM applications, copilots and content engines",
    description:
      "From private ChatGPT-style assistants to retrieval-augmented systems on your data—we ship production-grade GenAI you can trust.",
    techStack: ["OpenAI", "Claude", "Gemini", "LangChain", "LlamaIndex"],
    cta: "Build Your AI Copilot"
  },
  {
    id: "ai-agents",
    icon: "Bot",
    title: "AI Agents & Automation",
    headline: "Autonomous agents that execute multi-step business workflows",
    description:
      "Sales SDRs, support triage, ops co-pilots and research agents that read, decide and act—integrated into the tools you already use.",
    techStack: ["LangGraph", "CrewAI", "AutoGen", "n8n", "Zapier AI"],
    cta: "Deploy AI Agents"
  },
  {
    id: "ml-engineering",
    icon: "Brain",
    title: "ML Engineering",
    headline: "Predictive models tailored to your data and KPIs",
    description:
      "Forecasting, recommendation engines, churn prediction and risk scoring—engineered, deployed and monitored on modern MLOps stacks.",
    techStack: ["PyTorch", "TensorFlow", "scikit-learn", "MLflow", "Vertex AI"],
    cta: "Engineer Smart Models"
  },
  {
    id: "computer-vision",
    icon: "Eye",
    title: "Computer Vision",
    headline: "See, classify and understand the physical world in real-time",
    description:
      "Quality inspection, OCR, video analytics and visual search—deployed at the edge or in the cloud with millisecond latency.",
    techStack: ["YOLO", "OpenCV", "Detectron2", "AWS Rekognition", "Roboflow"],
    cta: "Activate Vision AI"
  }
];

export const technologyDomains = [
  {
    id: "generative-ai",
    name: "Generative AI",
    icon: "Sparkles",
    subtitle: "Foundation models, RAG systems and AI assistants",
    platforms: [
      { name: "OpenAI GPT", icon: "Sparkles" },
      { name: "Anthropic Claude", icon: "MessageSquare" },
      { name: "Google Gemini", icon: "Gem" },
      { name: "Meta Llama", icon: "Cpu" },
      { name: "LangChain", icon: "Link" },
      { name: "LlamaIndex", icon: "Layers" },
      { name: "Pinecone", icon: "Database" },
      { name: "Weaviate", icon: "Boxes" }
    ]
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    icon: "Bot",
    subtitle: "Multi-agent orchestration and autonomous workflows",
    platforms: [
      { name: "LangGraph", icon: "GitBranch" },
      { name: "CrewAI", icon: "Users" },
      { name: "AutoGen", icon: "Workflow" },
      { name: "n8n", icon: "Network" },
      { name: "Make", icon: "Settings" },
      { name: "Temporal", icon: "Clock" },
      { name: "Inngest", icon: "Zap" },
      { name: "Zapier AI", icon: "Bolt" }
    ]
  },
  {
    id: "ml-engineering",
    name: "ML Engineering",
    icon: "Brain",
    subtitle: "Production-grade ML pipelines and MLOps",
    platforms: [
      { name: "PyTorch", icon: "Flame" },
      { name: "TensorFlow", icon: "Brain" },
      { name: "scikit-learn", icon: "Code2" },
      { name: "MLflow", icon: "GitMerge" },
      { name: "Vertex AI", icon: "Cloud" },
      { name: "SageMaker", icon: "Box" },
      { name: "Databricks", icon: "Database" },
      { name: "Weights & Biases", icon: "BarChart3" }
    ]
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    icon: "Eye",
    subtitle: "Real-time visual intelligence at the edge or cloud",
    platforms: [
      { name: "YOLO", icon: "ScanLine" },
      { name: "OpenCV", icon: "Camera" },
      { name: "Detectron2", icon: "Focus" },
      { name: "Roboflow", icon: "Aperture" },
      { name: "AWS Rekognition", icon: "Cloud" },
      { name: "Hugging Face", icon: "Smile" },
      { name: "NVIDIA Triton", icon: "Server" },
      { name: "ONNX", icon: "Hexagon" }
    ]
  },
  {
    id: "data-platform",
    name: "Data Platform",
    icon: "Database",
    subtitle: "Modern data stack feeding your AI workloads",
    platforms: [
      { name: "Snowflake", icon: "Snowflake" },
      { name: "Databricks", icon: "Database" },
      { name: "BigQuery", icon: "Cloud" },
      { name: "dbt", icon: "GitBranch" },
      { name: "Airflow", icon: "Wind" },
      { name: "Kafka", icon: "Radio" },
      { name: "Fivetran", icon: "Plug" },
      { name: "Apache Spark", icon: "Zap" }
    ]
  },
  {
    id: "cloud-infra",
    name: "Cloud & Infra",
    icon: "Cloud",
    subtitle: "Scalable, secure cloud foundations for AI workloads",
    platforms: [
      { name: "AWS", icon: "Cloud" },
      { name: "Azure", icon: "CloudCog" },
      { name: "Google Cloud", icon: "Cloudy" },
      { name: "Kubernetes", icon: "Container" },
      { name: "Docker", icon: "Package2" },
      { name: "Terraform", icon: "Boxes" },
      { name: "Modal", icon: "Rocket" },
      { name: "Replicate", icon: "Copy" }
    ]
  }
];

// Example AI solutions we build — clearly framed as capabilities, not past clients
export const useCases = [
  {
    id: "lead-qualifier",
    industry: "Real Estate / Sales",
    title: "Lead Qualifier AI Agent",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    problem:
      "Sales teams drown in unqualified inbound leads from ads and WhatsApp—high-intent buyers slip through the cracks.",
    approach:
      "A conversational AI agent on WhatsApp / web that triages every lead in multiple languages, scores intent, books site visits and hands hot leads to humans.",
    deliverables: [
      "Multilingual conversational agent (EN / Hindi / Gujarati)",
      "CRM + calendar integration (HubSpot, Zoho, Google Calendar)",
      "Intent scoring & priority routing",
      "Dashboards for sales & marketing"
    ]
  },
  {
    id: "private-copilot",
    industry: "Knowledge Work / Professional Services",
    title: "Private Knowledge Copilot",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80",
    problem:
      "Teams spend hours searching internal documents, contracts and SOPs—every answer is locked in a different drive or PDF.",
    approach:
      "A secure ChatGPT-style assistant trained on your private documents with citations, role-based access and zero data leakage outside your tenant.",
    deliverables: [
      "RAG pipeline over your private documents",
      "Source citations on every answer",
      "Role-based access control",
      "Self-hosted or private-cloud deployment"
    ]
  },
  {
    id: "vision-qa",
    industry: "Manufacturing / Retail",
    title: "Visual Inspection & Analytics",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    problem:
      "Manual visual inspection is slow, inconsistent and expensive—defects and shrinkage cost margin every shift.",
    approach:
      "Custom computer-vision models for defect detection, OCR or footfall analytics—deployed at the edge for millisecond inference.",
    deliverables: [
      "Custom-trained CV model on your imagery",
      "Edge or cloud deployment",
      "Real-time alerts & dashboard",
      "Continuous learning pipeline"
    ]
  },
  {
    id: "recommendation",
    industry: "D2C / eCommerce",
    title: "Personalized Recommendation Engine",
    image: "https://images.unsplash.com/photo-1556742400-b5b7c5121f1f?w=1200&q=80",
    problem:
      "Generic merchandising kills conversion—shoppers want a store that knows them but cohort-based rules can't scale.",
    approach:
      "A hybrid (collaborative + semantic) recommendation engine on vector search—served under a 50ms API to your storefront.",
    deliverables: [
      "Recommendation model trained on your catalog & behavior",
      "Sub-50ms inference API",
      "A/B testing framework",
      "Lift reporting dashboard"
    ]
  }
];

export const values = [
  { title: "Outcome over Hype", icon: "Target", color: "bg-violet-100 text-violet-600", desc: "We ship AI that moves a business metric—not slide-deck demos." },
  { title: "Data Discipline", icon: "ShieldCheck", color: "bg-indigo-100 text-indigo-600", desc: "Privacy, lineage and evaluation baked into every model and pipeline." },
  { title: "Craft", icon: "Award", color: "bg-fuchsia-100 text-fuchsia-600", desc: "From prompts to infrastructure, we obsess over the details that matter." },
  { title: "Transparency", icon: "Eye", color: "bg-cyan-100 text-cyan-600", desc: "Honest timelines, weekly demos and clear pricing—always." },
  { title: "Partnership", icon: "Handshake", color: "bg-emerald-100 text-emerald-600", desc: "We grow with our clients—your KPI is our success metric." },
  { title: "Continuous Learning", icon: "BookOpen", color: "bg-amber-100 text-amber-600", desc: "In a field moving this fast, learning is the only durable advantage." }
];

export const processSteps = [
  { step: "01", title: "Discovery", desc: "Workshops with stakeholders to identify the highest-ROI AI opportunity grounded in your data." },
  { step: "02", title: "Prototype", desc: "A working prototype in 2–3 weeks to validate value before committing to production." },
  { step: "03", title: "Engineer", desc: "Production architecture, evals, guardrails, security and observability—built right." },
  { step: "04", title: "Launch", desc: "Phased rollout with feedback loops, A/B testing and human-in-the-loop where it matters." },
  { step: "05", title: "Operate & Scale", desc: "Monitoring, fine-tuning and continuous improvement as your data and needs evolve." }
];

export const offices = [
  { city: "Vadodara, India (HQ)", address: "FF-26 Sunmilan Complex, Near Waghodia Chowkdi, Waghodia Road, Vadodara - 390019", phone: "+91 99042 56613" },
  { city: "Remote First", address: "Distributed team across India, UAE & SE Asia", phone: "help@nexora-digital.in" }
];

export const blogPosts = [
  { id: "genai-marketing", title: "How Generative AI Is Transforming B2B Marketing in 2026", category: "Generative AI", date: "Today", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", excerpt: "From hyper-personalised outbound to self-improving content engines, GenAI is rewriting the modern marketing stack." },
  { id: "ai-agents-prod", title: "Building AI Agents That Actually Work in Production", category: "AI Agents", date: "Yesterday", image: "https://images.pexels.com/photos/5833779/pexels-photo-5833779.jpeg?w=800", excerpt: "A practitioner's guide to evaluation, guardrails and observability for agentic systems." },
  { id: "rag-patterns", title: "5 RAG Patterns We Use to Cut Hallucinations to Near Zero", category: "LLM Engineering", date: "Last Week", image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800&q=80", excerpt: "Hybrid retrieval, query rewriting, reranking, citation enforcement and structured outputs—our production playbook." }
];

export const navServices = [
  { name: "Generative AI", href: "/services/generative-ai" },
  { name: "AI Agents & Automation", href: "/services/ai-agents" },
  { name: "ML Engineering", href: "/services/ml-engineering" },
  { name: "Computer Vision", href: "/services/computer-vision" },
  { name: "Data Platform", href: "/services/data-platform" },
  { name: "AI Strategy & Advisory", href: "/services/ai-strategy" }
];

export const navSolutions = [
  { name: "What We Build", href: "/case-studies" },
  { name: "Our Approach", href: "/about#culture" },
  { name: "Industries", href: "/industries" }
];

export const navAbout = [
  { name: "About Nexora", href: "/about" },
  { name: "Our Approach", href: "/about#culture" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export const founder = {
  name: "Dhruv Patel",
  title: "Founder & CEO",
  image: "https://customer-assets.emergentagent.com/job_nexora-ai-25/artifacts/k7cew7mh_image.png",
  bio: "Dhruv founded Nexora to bridge the gap between AI's promise and real business outcomes. With a background in performance marketing and machine learning, he focuses on shipping AI that compounds value—one production deployment at a time.",
  location: "Vadodara, India"
};

export const social = {
  linkedin: "https://www.linkedin.com/in/nexora-digital-63893b3a4/",
  twitter: "https://twitter.com/Nexoradigitall",
  instagram: "https://www.instagram.com/nexoradigital92",
  email: "help@nexora-digital.in",
  phone: "+91 99042 56613",
  whatsapp: "https://wa.me/919904256613"
};

// Kept for backward compatibility — empty arrays so legacy sections don't crash
export const brandLogos = [];
export const heroStats = [];
export const caseStudies = useCases;
export const testimonials = [];
