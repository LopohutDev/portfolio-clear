export const personalInfo = {
  name: "Louie Sarraga",
  title: "Full Stack Software Engineer",
  bio: "Senior Full Stack Developer based in the Philippines with 5+ years of experience building production web applications using React, Next.js, Node.js, and NestJS — for clients in the US and Southeast Asia.",
  email: "johnlouie.sarraga@gmail.com",
  github: "https://github.com/LopohutDev",
  linkedin: "https://www.linkedin.com/in/louie-jay-sarraga-8a941a155/",
  location: "Philippines",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn-ui", "Vite", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "Supabase", "JWT", "REST APIs", "Google Cloud Storage", "Gmail OAuth"],
  },
  {
    category: "DevOps & Tools",
    items: ["GCP Cloud Run", "Firebase Hosting", "Cloud Build", "Docker", "Git", "GitHub Actions"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Ticketnation",
    description:
      "A production-ready ticketing platform for events, concerts, and music festivals in the Philippines. Supports event discovery, seat selection, and end-to-end ticket purchasing — serving real users at scale.",
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "https://ticketnation.ph",
    githubUrl: "",
    privateRepo: true,
    production: true,
    featured: true,
  },
  {
    id: 2,
    title: "Spins Service",
    description:
      "An internal data aggregation platform that enables clients to compare their products against competitors and extract actionable market insights. Features dynamic dashboards, data visualizations, and automated reporting.",
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "GraphQL", "Python"],
    liveUrl: "",
    githubUrl: "",
    privateRepo: false,
    production: true,
    featured: true,
  },
  {
    id: 3,
    title: "Acqua Park Me",
    description:
      "A full-stack parking marketplace platform where owners list parking spaces and renters discover and book them. Features JWT auth, real-time booking management, payment processing via Experia PG, Gmail OAuth integration, admin approval workflows, and GCP cloud infrastructure.",
    techStack: [
      "React 18",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "shadcn-ui",
      "TanStack Query",
      "GCP Cloud Run",
      "Firebase Hosting",
    ],
    liveUrl: "https://park.altev.tech",
    githubUrl: "https://github.com/LopohutDev/acq-fe",
    privateRepo: true,
    production: false,
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "A production-ready analytics dashboard for content creators to track and visualize engagement metrics from Instagram and TikTok posts. Features multi-tenant data isolation with Supabase RLS, server-side aggregation, interactive charts, and 30-day rolling trend analysis.",
    techStack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "shadcn-ui", "TanStack Query", "Zustand", "Recharts", "Framer Motion"],
    liveUrl: "https://socmed-analytics.vercel.app",
    githubUrl: "https://github.com/LopohutDev/socmed-analytics",
    privateRepo: false,
    production: false,
    featured: true,
  },
  {
    id: 5,
    title: "PDF Annotator",
    description:
      "A browser-based PDF annotation tool for viewing, marking up, and editing PDF documents without any server uploads. Supports text and drawing annotations with layer management for organized markup.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "pdf-lib", "react-pdf"],
    liveUrl: "https://pdf-annotator-nftvyp998-lopohutdevs-projects.vercel.app",
    githubUrl: "https://github.com/LopohutDev/pdf-annotator",
    privateRepo: false,
    production: false,
    featured: false,
  },
  {
    id: 6,
    title: "React Chat",
    description:
      "A real-time chat application built with React and Firebase. Features live messaging with Firebase as the backend, deployed via Firebase Hosting with a CI/CD pipeline through GitHub Actions.",
    techStack: ["React", "TypeScript", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/LopohutDev/react-chat",
    privateRepo: false,
    production: false,
    featured: false,
  },
  {
    id: 7,
    title: "Budget Management App",
    description:
      "A personal finance web app for tracking and managing budgets. Built with Next.js App Router, NextAuth.js for authentication, and Tailwind CSS for a clean, responsive UI.",
    techStack: ["Next.js", "TypeScript", "NextAuth.js", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/LopohutDev/budget-management-app",
    privateRepo: false,
    production: false,
    featured: false,
  },
  {
    id: 9,
    title: "Motomate AI",
    description:
      "An AI-powered motorcycle recommendation app that suggests motorcycle types and riding routes based on the user's location. Integrates Google Maps, XAI, and Vercel AI for intelligent, location-aware suggestions.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Google Maps API", "XAI SDK", "Vercel AI", "Zod"],
    liveUrl: "",
    githubUrl: "https://github.com/LopohutDev/motomate-ai",
    privateRepo: false,
    production: false,
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "Eclaro",
    role: "Senior Full Stack Developer",
    duration: "Apr 2025 – Present",
    description: [
      "Architected and built the Spins mobile application from the ground up using React Native, delivering a seamless cross-platform user experience.",
      "Integrated backend APIs and reshaped endpoints to align with specific Spins business requirements, ensuring optimal data flow and performance.",
      "Managed the connectivity layer between Node.js backend services and React.js front-end applications to ensure system stability.",
      "Deployed and managed full-stack infrastructure, including the Spins User Portal and administrative dashboards.",
    ],
  },
  {
    id: 2,
    company: "Fabletics",
    role: "Senior Full Stack Developer",
    duration: "Jun 2024 – Apr 2025",
    description: [
      "Developed full-stack solutions using React.js, Next.js, Node.js, Nest.js, and ASP.NET Core.",
      "Built scalable, reusable components with TypeScript and Tailwind CSS.",
      "Managed cloud deployments with AWS and containerized applications using Docker.",
      "Integrated backend REST APIs and optimized performance of client-facing applications.",
      "Actively contributed to Agile sprints and cross-functional team collaborations.",
    ],
  },
  {
    id: 3,
    company: "Prosple",
    role: "Senior Frontend Developer",
    duration: "Jun 2024 – Nov 2024",
    description: [
      "Collaborated with UI/UX teams to build scalable components using React Native and Next.js.",
      "Integrated multi-factor authentication via third-party services.",
      "Automated deployment pipelines with GitHub Actions (CI/CD).",
      "Participated in Agile ceremonies and resolved performance issues.",
    ],
  },
  {
    id: 4,
    company: "Cartera",
    role: "Full Stack Developer",
    duration: "Dec 2023 – Jun 2024",
    description: [
      "Created reusable front-end components and redesigned API endpoints.",
      "Developed new API endpoints and resolved backend bugs.",
      "Built solutions with React.js, TypeScript, and AWS services.",
    ],
  },
  {
    id: 5,
    company: "Ticketnation.ph",
    role: "Full Stack Developer",
    duration: "Jul 2022 – Dec 2023",
    description: [
      "Built the Partner Dashboard and started v2 development using Next.js from scratch.",
      "Integrated backend APIs and reshaped endpoints to meet business needs.",
      "Managed the connection between Node.js APIs and React.js applications.",
    ],
  },
  {
    id: 6,
    company: "Altev Tech",
    role: "Mid Front-End Developer",
    duration: "Sep 2021 – Jun 2022",
    description: [
      "Developed reusable UI components based on UX designs.",
      "Created CRUD endpoints and consumed backend APIs.",
      "Integrated frontend (React) with REST API.",
    ],
  },
  {
    id: 7,
    company: "Pahiram.ph",
    role: "Front-End Developer",
    duration: "Sep 2019 – Sep 2021",
    description: [
      "Designed and built reusable front-end components.",
      "Developed an inventory management system and user profile dashboard.",
      "Integrated Node.js APIs with React.js for client-side functionality.",
    ],
  },
];
