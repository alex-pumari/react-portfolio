import { extractBulletPoints, extractLearningsSection } from "./index.js"

export function extractLearnings(content: string): string[] {
  if (!content) return []

  const section = extractLearningsSection(content)
  if (!section) return []

  return extractBulletPoints(section)
}