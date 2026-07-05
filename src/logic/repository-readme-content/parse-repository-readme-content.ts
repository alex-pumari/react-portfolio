import type { RepositoryReadme } from "../../types/index.js"
import { extractBadges, extractFirstSection, extractImagePath } from "../index.js"
import { extractTitle, extractVideoUrl, extractLearnings } from "../index.js"

export function parseRepositoryReadmeContent(readmeContent: string): RepositoryReadme {
  const section = extractFirstSection(readmeContent)

  return {
    title: extractTitle(section),
    badges: extractBadges(section),
    imagePath: extractImagePath(section),
    videoUrl: extractVideoUrl(section),
    learnings: extractLearnings(section),
  }
}