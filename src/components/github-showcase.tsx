"use client"

import { GitHubRepo } from "@/lib/github"
import { GithubIcon } from "@/components/social-icons"
import { GitFork, Star, ArrowUpRight, FolderGit2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GitHubShowcaseProps {
  repos: GitHubRepo[]
}

export function GitHubShowcase({ repos }: GitHubShowcaseProps) {
  return (
    <section id="github" className="space-y-6">
      <div className="flex items-end justify-between border-b border-border/40 pb-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>OPEN SOURCE &amp; REPOSITORIES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
            GitHub Showcase
          </h2>
        </div>
        <a
          href="https://github.com/Erbiyon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-muted-foreground hover:text-emerald-400 flex items-center gap-1 transition"
        >
          View GitHub Profile <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo: GitHubRepo) => (
          <Card
            key={repo.id}
            className="group flex flex-col justify-between border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:shadow-md"
          >
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-sm font-bold text-foreground group-hover:text-emerald-400 transition"
                >
                  <GithubIcon className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400" />
                  {repo.name}
                </a>
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400/80 text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
              <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {repo.description || "Public repository and open source contribution."}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between pt-3 border-t border-border/30">
                <div className="flex items-center gap-1.5">
                  {repo.language && (
                    <Badge variant="secondary" className="font-mono text-[10px] bg-secondary/40 text-muted-foreground">
                      {repo.language}
                    </Badge>
                  )}
                  {repo.topics?.slice(0, 2).map((topic) => (
                    <Badge key={topic} variant="outline" className="font-mono text-[10px] text-muted-foreground border-border/40">
                      #{topic}
                    </Badge>
                  ))}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono text-[11px] text-emerald-400 hover:text-emerald-300"
                >
                  Repo <ArrowUpRight className="ml-0.5 h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
