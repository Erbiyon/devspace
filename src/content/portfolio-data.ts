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
  name: "Alex Dev",
  title: "Full-Stack Engineer & UI Architect",
  role: "Crafting resilient web applications, modern design systems & cloud-native backends.",
  bio: "Senior software engineer with 6+ years of experience specializing in Next.js, TypeScript, React 19, and cloud architectures. Passionate about developer tooling, performance engineering, and accessible UI.",
  location: "Bangkok, Thailand (Available Worldwide)",
  status: "Available for Projects & Tech Leadership",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "alex.dev@example.com",
  },
}

export const featuredProjects: Project[] = [
  {
    id: "turboflow",
    title: "TurboFlow Cloud Orchestrator",
    description: "Cloud-native event streaming and microservice orchestration dashboard built with React 19, Next.js App Router, and Tailwind CSS v4.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "Docker", "Server Actions"],
    stars: 342,
    href: "https://github.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "zenith-ui",
    title: "Zenith Design System",
    description: "Ultra-accessible, WCAG 2.2 AA compliant component architecture featuring tokenized color systems and micro-interactions.",
    tags: ["React 19", "shadcn/ui", "Radix UI", "Motion", "CSS Variables"],
    stars: 512,
    href: "https://github.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "edge-pulse",
    title: "EdgePulse Telemetry",
    description: "Real-time edge performance metrics and distributed tracing collector built with serverless edge workers and zero-latency caching.",
    tags: ["TypeScript", "Next.js ISR", "Vercel Edge", "Web Vitals"],
    stars: 189,
    href: "https://github.com",
    github: "https://github.com",
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

