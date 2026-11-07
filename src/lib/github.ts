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
    name: "insightflow",
    description: "Modern data analytics and visualization platform built with TypeScript and Next.js.",
    html_url: "https://github.com/Erbiyon/insightflow",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    topics: ["typescript", "nextjs", "analytics"],
    updated_at: "2026-11-01T00:00:00Z",
  },
  {
    id: 2,
    name: "cpetak-timetable",
    description: "Academic timetable and course scheduling management tool developed with TypeScript.",
    html_url: "https://github.com/Erbiyon/cpetak-timetable",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    topics: ["typescript", "react", "timetable"],
    updated_at: "2026-10-25T00:00:00Z",
  },
  {
    id: 3,
    name: "vocap_app",
    description: "Cross-platform mobile application for vocabulary building and active learning built with Dart & Flutter.",
    html_url: "https://github.com/Erbiyon/vocap_app",
    stargazers_count: 0,
    forks_count: 0,
    language: "Dart",
    topics: ["dart", "flutter", "mobile"],
    updated_at: "2026-10-18T00:00:00Z",
  },
  {
    id: 4,
    name: "devspace",
    description: "Modern Dark + Bento Grid developer portfolio built with Next.js 16, React 19, and Tailwind CSS v4.",
    html_url: "https://github.com/Erbiyon/devspace",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    topics: ["portfolio", "nextjs", "tailwind-v4", "shadcn-ui"],
    updated_at: "2026-11-07T00:00:00Z",
  },
]

export async function getFeaturedRepos(username = "Erbiyon"): Promise<GitHubRepo[]> {
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

