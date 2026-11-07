import { getFeaturedRepos } from "@/lib/github"
import { PortfolioView } from "@/components/portfolio-view"

export default async function Page() {
  const githubRepos = await getFeaturedRepos("Erbiyon")

  return <PortfolioView githubRepos={githubRepos} />
}
