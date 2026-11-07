import { profileData } from "@/content/portfolio-data"

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.bio,
    url: "https://devspace-portfolio.vercel.app",
    sameAs: [
      profileData.socials.github,
      profileData.socials.linkedin,
      profileData.socials.twitter,
    ],
    knowsAbout: [
      "Software Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloud Architecture",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  )
}

