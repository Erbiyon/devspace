import { describe, it, expect } from "vitest"
import { profileData, featuredProjects } from "./portfolio-data"

describe("Portfolio Data Integrity", () => {
  it("should have correct profile data for Erbiyon", () => {
    expect(profileData.name).toBe("Mattana Kanlapa")
    expect(profileData.socials.github).toContain("Erbiyon")
    expect(profileData.avatar).toBeDefined()
  })

  it("should have featured projects listed", () => {
    expect(featuredProjects.length).toBeGreaterThan(0)
    expect(featuredProjects[0].title).toBeDefined()
  })
})
