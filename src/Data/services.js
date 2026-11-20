import {
  Server,
  Code2,
  Database,
  Package,
  Cloud,
  Cpu,
  ShieldCheck,
  HelpCircle
} from "lucide-react";

export const services = [
  {
    icon: Server,
    title: "Backend Development & REST APIs",
    description:
      "Robust, scalable server architectures built with Node.js, Express.js, and TypeScript, engineered for speed, reliability, and security.",
    features: [
      "Scalable RESTful API design & implementation",
      "Authentication & authorization (JWT, RBAC)",
      "Real-time event streaming via WebSockets / Socket.IO",
      "Input validation, error handling & structured logging",
      "API documentation and testing workflows"
    ],
    price: "Custom Scope",
  },
  {
    icon: Code2,
    title: "Full Stack Web Engineering",
    description:
      "End-to-end web applications seamlessly connecting responsive React and Next.js user interfaces with high-performance Node.js backends.",
    features: [
      "Dynamic web applications with Next.js & React",
      "State management and reactive client interactions",
      "Integration of frontend with backend microservices",
      "Mobile-first, responsive, and accessible UI",
      "Clean architecture principles and maintainable code"
    ],
    price: "Custom Scope",
  },
  {
    icon: Database,
    title: "Database Modeling & Redis Caching",
    description:
      "Comprehensive relational and NoSQL database design with optimized queries, indexing, and high-speed Redis caching layers.",
    features: [
      "PostgreSQL, MongoDB, and MySQL schema design",
      "In-memory caching and session stores with Redis",
      "Data normalization, relationship integrity & indexing",
      "Aggregation pipelines and complex query tuning",
      "Data migration and backup management"
    ],
    price: "Custom Scope",
  },
  {
    icon: Package,
    title: "Docker Containerization & DevOps",
    description:
      "Standardizing software runtime environments and deploying isolated, multi-container architectures using Docker and CI/CD pipelines.",
    features: [
      "Multi-stage Dockerfile configurations",
      "Multi-service Docker Compose orchestrations",
      "Automated CI/CD workflows with GitHub Actions",
      "Linux server setup and Nginx reverse proxying",
      "Environment isolation for staging and production"
    ],
    price: "Custom Scope",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & AWS Deployment",
    description:
      "Deploying scalable, reliable applications in cloud environments (primarily AWS), including compute, managed databases, and object storage.",
    features: [
      "AWS cloud architecture planning and setup",
      "Cloud database provisioning and access control",
      "Static and dynamic asset hosting with SSL certificates",
      "Automated deployment strategies and health checks",
      "Resource monitoring and availability optimization"
    ],
    price: "Custom Scope",
  },
  {
    icon: Cpu,
    title: "AI Integration & Intelligent Features",
    description:
      "Integrating cutting-edge AI capabilities, LLMs, and intelligent algorithms into real-world business and healthcare applications.",
    features: [
      "Conversational AI assistants and domain coaches",
      "AI-driven classification and symptom analysis pipelines",
      "Automated threat scoring and heuristic evaluation",
      "Prompt engineering and model API integrations",
      "Intelligent recommendation engines"
    ],
    price: "Custom Scope",
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening & Protection",
    description:
      "Implementing defensive software engineering practices, security headers, rate limiting, and protection against unauthorized access.",
    features: [
      "Granular Role-Based Access Control (RBAC)",
      "API rate limiting, bot protection, and origin checks",
      "Data sanitization and injection prevention",
      "CORS, Helmet, and secure HTTP cookies",
      "Security audit and vulnerability mitigation"
    ],
    price: "Custom Scope",
  },
  {
    icon: HelpCircle,
    title: "Technical Consulting & System Design",
    description:
      "Architectural guidance, code reviews, technology stack selection, and scalability planning to align software engineering with product goals.",
    features: [
      "Backend system design and API contract definition",
      "Monolith to microservices migration planning",
      "Database selection (SQL vs NoSQL trade-offs)",
      "Clean code standards and engineering mentoring",
      "Production readiness and performance auditing"
    ],
    price: "Hourly / Advisory",
  },
];
