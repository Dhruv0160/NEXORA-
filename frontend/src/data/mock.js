// Mock data for Nexora AI Solutions

export const heroRotatingTexts = [
  "Generative AI",
  "AI Agents & Automation",
  "Predictive Analytics",
  "Computer Vision",
  "Conversational AI"
];

export const heroStats = [
  { value: "50+", label: "AI Models Deployed", icon: "Brain" },
  { value: "3x", label: "Avg. ROI Uplift", icon: "TrendingUp" },
  { value: "24/7", label: "AI Agent Uptime", icon: "Activity" },
  { value: "100%", label: "Custom Built", icon: "Sparkles" }
];

export const brandLogos = [
  "InvestFirm", "RealtyOne", "MediCore", "EduSphere", "FinHub",
  "ShopGrid", "HealthAI", "PropTech", "LearnIQ", "BankWise",
  "AutoFlow", "RetailX", "CareNet", "AgriSense", "LogiAI"
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

export const caseStudies = [
  {
    id: "realty-lead-ai",
    client: "InvestFirm Realty",
    title: "Realty Lead Qualifier: AI Agent That Books Site Visits",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    industry: "Real Estate",
    challenge:
      "A real-estate developer was spending heavily on paid leads but only 4% reached a site-visit—agents were buried under unqualified calls and WhatsApp messages.",
    solution:
      "We built a conversational AI agent that triages every lead in English, Hindi and Gujarati on WhatsApp, scores intent, books visits and hands hot leads to humans.",
    results: [
      "Lead-to-site-visit rate jumped from 4% to 17%",
      "68% reduction in sales team response time",
      "3.1x improvement in marketing ROAS",
      "24/7 multilingual conversations across 5 projects"
    ]
  },
  {
    id: "retail-recsys",
    client: "ShopGrid",
    title: "ShopGrid: Personalized Recommendation Engine",
    image: "https://images.unsplash.com/photo-1556742400-b5b7c5121f1f?w=1200&q=80",
    industry: "Retail",
    challenge:
      "A growing D2C marketplace needed personalized product recommendations to lift average order value and reduce paid-acquisition dependence.",
    solution:
      "We engineered a hybrid (collaborative + semantic) recommendation engine running on vector search, served behind a 40ms API on AWS.",
    results: [
      "22% lift in average order value",
      "38% increase in repeat purchase rate",
      "P99 latency held under 45ms at 5k RPS",
      "$140k annualized infra cost savings"
    ]
  },
  {
    id: "healthcare-vision",
    client: "MediCore Labs",
    title: "MediCore: Vision AI for Radiology Triage",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    industry: "Healthcare",
    challenge:
      "A diagnostics chain wanted to prioritize urgent chest X-rays in a queue of thousands of scans per day to reduce reporting turnaround.",
    solution:
      "A computer-vision triage model flags 14 critical findings and reorders the radiologist worklist—deployed on-prem to meet data-residency norms.",
    results: [
      "Critical-case turnaround down from 6h to 38min",
      "94% sensitivity on validation cohort",
      "Zero PHI ever left customer premises",
      "FDA Class II audit-ready documentation"
    ]
  },
  {
    id: "fin-copilot",
    client: "FinHub",
    title: "FinHub: AI Copilot for Wealth Advisors",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    industry: "FinTech",
    challenge:
      "Wealth advisors spent 60% of their week summarizing portfolios and drafting client emails instead of advising.",
    solution:
      "A secure GenAI copilot that drafts personalized portfolio reviews, answers regulatory questions and auto-schedules client check-ins.",
    results: [
      "Advisor productivity up 2.4x",
      "AUM per advisor grew 31% in 6 months",
      "All responses cite source documents (audit-ready)",
      "SOC 2 Type II compliant deployment"
    ]
  }
];

export const testimonials = [
  {
    name: "Aman Mehta",
    title: "Head of Sales, InvestFirm Realty",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    quote:
      "Nexora's AI agent now handles every inbound lead before our sales team sees it. Site-visit bookings tripled in 60 days—this is the most useful AI we have shipped."
  },
  {
    name: "Dr. Priya Iyer",
    title: "Chief Radiologist, MediCore Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    quote:
      "Their vision model integrated cleanly into our PACS without disrupting workflows. Reporting turnaround on critical cases dropped from hours to minutes."
  },
  {
    name: "Rohan Khurana",
    title: "CTO, FinHub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    quote:
      "Dhruv and the Nexora team don't just demo AI—they engineer it for production, with security, evaluation and observability built-in from day one."
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
  { city: "Remote First", address: "Distributed team across India, UAE & SE Asia", phone: "hello@nexora.ai" }
];

export const blogPosts = [
  { id: "genai-marketing", title: "How Generative AI Is Transforming B2B Marketing in 2026", category: "Generative AI", date: "Today", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", excerpt: "From hyper-personalised outbound to self-improving content engines, GenAI is rewriting the modern marketing stack." },
  { id: "ai-agents-prod", title: "Building AI Agents That Actually Work in Production", category: "AI Agents", date: "Yesterday", image: "https://images.pexels.com/photos/5833779/pexels-photo-5833779.jpeg?w=800", excerpt: "A practitioner's guide to evaluation, guardrails and observability for agentic systems—lessons from 12 real deployments." },
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
  { name: "Case Studies", href: "/case-studies" },
  { name: "Our Clients", href: "/clients" },
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
  bio: "Dhruv founded Nexora to bridge the gap between AI's promise and real business outcomes. With a background in performance marketing and machine learning, he focuses on shipping AI that compounds value—one production deployment at a time.",
  location: "Vadodara, India"
};

export const social = {
  linkedin: "https://www.linkedin.com/in/nexora-digital-63893b3a4/",
  twitter: "https://twitter.com/Nexoradigitall",
  instagram: "https://www.instagram.com/nexoradigital92",
  email: "hello@nexora.ai",
  phone: "+91 99042 56613",
  whatsapp: "https://wa.me/919904256613"
};
