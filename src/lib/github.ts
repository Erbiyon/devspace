export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

export const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "turboflow-orchestrator",
    description: "Cloud-native event streaming and microservice orchestration dashboard built with React 19 and Next.js App Router.",
    html_url: "https://github.com",
    stargazers_count: 342,
    forks_count: 48,
    language: "TypeScript",
    topics: ["nextjs", "react19", "tailwind-v4", "docker"],
    updated_at: "2026-11-01T00:00:00Z",
  },
  {
    id: 2,
    name: "zenith-design-system",
    description: "Ultra-accessible, WCAG 2.2 AA compliant component architecture featuring tokenized color systems.",
    html_url: "https://github.com",
    stargazers_count: 512,
    forks_count: 89,
    language: "TypeScript",
    topics: ["design-system", "shadcn-ui", "accessibility", "radix"],
    updated_at: "2026-10-25T00:00:00Z",
  },
  {
    id: 3,
    name: "edge-pulse-telemetry",
    description: "Real-time edge performance metrics and distributed tracing collector built with serverless edge workers.",
    html_url: "https://github.com",
    stargazers_count: 189,
    forks_count: 23,
    language: "TypeScript",
    topics: ["edge-computing", "vercel", "telemetry"],
    updated_at: "2026-10-18T00:00:00Z",
  },
  {
    id: 4,
    name: "developer-portfolio-template",
    description: "Modern Dark + Bento Grid portfolio built with Next.js 16, React 19, and Tailwind CSS v4.",
    html_url: "https://github.com",
    stargazers_count: 145,
    forks_count: 19,
    language: "TypeScript",
    topics: ["portfolio", "nextjs", "tailwind-css"],
    updated_at: "2026-11-07T00:00:00Z",
  },
]

export async function getFeaturedRepos(username = "octocat"): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_READ_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_READ_TOKEN}`,
        }),
      },
    })

    if (!res.ok) {
      return fallbackRepos
    }

    const data: GitHubRepo[] = await res.json()
    if (!Array.isArray(data) || data.length === 0) {
      return fallbackRepos
    }

    return data
  } catch {
    return fallbackRepos
  }
}
