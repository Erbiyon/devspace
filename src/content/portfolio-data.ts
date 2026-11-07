export interface Profile {
  name: string
  title: string
  role: string
  bio: string
  location: string
  status: string
  avatar: string
  resumeUrl: string
  socials: {
    github: string
    linkedin: string
    twitter: string
    email: string
  }
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  stars?: number
  href?: string
  github?: string
  featured: boolean
}

export interface SkillCategory {
  category: string
  skills: { name: string; level?: string }[]
}

export const profileData: Profile = {
  name: "Mattana Kanlapa",
  title: "Full-Stack Engineer & Software Developer",
  role: "Crafting resilient web applications, modern frontend systems & developer tooling.",
  bio: "Software developer with strong expertise in TypeScript, Next.js, React, Dart/Flutter, and modern web architectures. Passionate about building fast, accessible, and user-centric digital experiences.",
  location: "Thailand",
  status: "Available for Projects & Engineering Roles",
  avatar: "https://avatars.githubusercontent.com/u/168989620?v=4",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/Erbiyon",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "contact@erbiyon.dev",
  },
}

export const featuredProjects: Project[] = [
  {
    id: "insightflow",
    title: "InsightFlow Analytics",
    description: "Modern data analytics and visualization platform built with TypeScript, Next.js, and interactive dashboard components.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    stars: 0,
    href: "https://github.com/Erbiyon/insightflow",
    github: "https://github.com/Erbiyon/insightflow",
    featured: true,
  },
  {
    id: "cpetak-timetable",
    title: "CPETAK Timetable System",
    description: "Academic timetable and course scheduling management tool developed with TypeScript and modern web technologies.",
    tags: ["TypeScript", "React", "Scheduling", "Next.js"],
    stars: 0,
    href: "https://github.com/Erbiyon/cpetak-timetable",
    github: "https://github.com/Erbiyon/cpetak-timetable",
    featured: true,
  },
  {
    id: "vocap-app",
    title: "Vocap Mobile App",
    description: "Cross-platform mobile application for vocabulary building and active learning built with Dart & Flutter.",
    tags: ["Dart", "Flutter", "Mobile", "Cross-Platform"],
    stars: 0,
    href: "https://github.com/Erbiyon/vocap_app",
    github: "https://github.com/Erbiyon/vocap_app",
    featured: true,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript (ESNext)" },
      { name: "Go / Golang" },
      { name: "SQL & Relational DBs" },
      { name: "Node.js v24" },
    ],
  },
  {
    category: "Frontend & UI Systems",
    skills: [
      { name: "Next.js (App Router)" },
      { name: "React 19 (Server Components)" },
      { name: "Tailwind CSS v4" },
      { name: "shadcn/ui & Radix" },
      { name: "Motion Animations" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Vercel & Edge Network" },
      { name: "Docker & Containers" },
      { name: "CI/CD & GitHub Actions" },
      { name: "PostgreSQL & Prisma" },
      { name: "pnpm Supply Chain" },
    ],
  },
]

