"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {
  ExternalLink,
  Code2,
  Terminal,
  Sparkles,
  Layers,
  ArrowUpRight,
  Star,
  CheckCircle2,
} from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { CopyEmailButton } from "@/components/copy-email-button"
import { GitHubShowcase } from "@/components/github-showcase"
import { profileData, featuredProjects, skillCategories } from "@/content/portfolio-data"
import { GitHubRepo } from "@/lib/github"

interface PortfolioViewProps {
  githubRepos: GitHubRepo[]
}

export function PortfolioView({ githubRepos }: PortfolioViewProps) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />
      
      {/* Floating Navigation Dock */}
      <header className="sticky top-6 z-50 mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between rounded-full border border-border/40 bg-background/70 px-4 backdrop-blur-md shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <Code2 className="h-4 w-4" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-tight">devspace<span className="text-emerald-500">.io</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium text-muted-foreground">
            <a href="#about" className="transition hover:text-emerald-400">About</a>
            <a href="#projects" className="transition hover:text-emerald-400">Projects</a>
            <a href="#github" className="transition hover:text-emerald-400">GitHub</a>
            <a href="#skills" className="transition hover:text-emerald-400">Skills</a>
            <a href="#contact" className="transition hover:text-emerald-400">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <CopyEmailButton email={profileData.socials.email} />
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-20 space-y-16">
        
        {/* Section 1: Hero & Bento Introduction */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Hero Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8"
          >
            <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm shadow-sm transition-all hover:border-emerald-500/30">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <Badge variant="outline" className="border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-[11px] font-mono">
                    {profileData.status}
                  </Badge>
                </div>
                <CardTitle className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  Hi, I&apos;m <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">{profileData.name}</span>
                </CardTitle>
                <CardDescription className="text-base md:text-lg font-medium text-foreground/80 leading-relaxed">
                  {profileData.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {profileData.bio}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 font-mono text-xs font-semibold text-zinc-950 shadow-sm transition hover:bg-emerald-400"
                  >
                    Explore Works <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border/50 px-3.5 py-2 font-mono text-xs transition hover:border-emerald-500/50 hover:bg-accent"
                  >
                    <GithubIcon className="mr-1.5 h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border/50 px-3.5 py-2 font-mono text-xs transition hover:border-emerald-500/50 hover:bg-accent"
                  >
                    <LinkedinIcon className="mr-1.5 h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Persona Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4"
          >
            <Card className="h-full flex flex-col justify-between border-border/50 bg-card/60 backdrop-blur-sm p-6 shadow-sm">
              <div className="space-y-4">
                <Avatar className="h-24 w-24 border-2 border-emerald-500/20 shadow-md">
                  <AvatarImage src={profileData.avatar} alt={profileData.name} />
                  <AvatarFallback className="font-mono text-xl font-bold bg-emerald-500/10 text-emerald-400">AD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg">{profileData.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mt-1 flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                    {profileData.location}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40 space-y-3 font-mono text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Architecture</span>
                  <span className="text-emerald-400">Next.js 16 + React 19</span>
                </div>
                <div className="flex justify-between">
                  <span>Tooling</span>
                  <span className="text-foreground">pnpm Strict</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility</span>
                  <span className="text-emerald-400">WCAG 2.2 AA</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </section>

        {/* Section 2: Featured Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex items-end justify-between border-b border-border/40 pb-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>ENGINEERING SHOWCASE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">Featured Projects</h2>
            </div>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-emerald-400 flex items-center gap-1 transition"
            >
              All repositories <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full flex flex-col justify-between border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Terminal className="h-4 w-4" />
                      </div>
                      {project.stars && (
                        <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span>{project.stars}</span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-mono text-[10px] bg-secondary/60 text-secondary-foreground border border-border/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-mono text-xs text-emerald-400 hover:text-emerald-300 transition"
                      >
                        Live Preview <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center font-mono text-xs text-muted-foreground hover:text-foreground transition"
                      >
                        Source <GithubIcon className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2.5: GitHub Hybrid Showcase */}
        <GitHubShowcase repos={githubRepos} />

        {/* Section 3: Technical Skills & Architecture Matrix */}
        <section id="skills" className="space-y-6">
          <div className="border-b border-border/40 pb-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
              <Layers className="h-3.5 w-3.5" />
              <span>CORE COMPETENCIES</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">Technical Stack & Mastery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm p-6 space-y-4">
                  <h3 className="font-mono text-sm font-semibold text-emerald-400">{cat.category}</h3>
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-foreground/90 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Contact & Footer */}
        <section id="contact" className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-8 md:p-12 text-center space-y-6">
          <div className="mx-auto max-w-xl space-y-3">
            <Badge variant="outline" className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono text-xs">
              Let&apos;s Build Together
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to create exceptional digital products?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Feel free to reach out for consulting, technical leadership, or high-impact engineering opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <CopyEmailButton email={profileData.socials.email} />
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border/50 px-3.5 py-1.5 font-mono text-xs transition hover:border-emerald-500/50 hover:bg-accent"
            >
              <GithubIcon className="mr-1.5 h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border/50 px-3.5 py-1.5 font-mono text-xs transition hover:border-emerald-500/50 hover:bg-accent"
            >
              <LinkedinIcon className="mr-1.5 h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href={profileData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border/50 px-3.5 py-1.5 font-mono text-xs transition hover:border-emerald-500/50 hover:bg-accent"
            >
              <TwitterIcon className="mr-1.5 h-3.5 w-3.5" /> Twitter / X
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-xs font-mono text-muted-foreground">
        <p>© 2026 DevSpace Portfolio. Crafted with Next.js 16, React 19, Tailwind CSS v4 &amp; shadcn/ui.</p>
      </footer>
    </div>
  )
}

