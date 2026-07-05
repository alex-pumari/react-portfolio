import type { Badge } from "./badge.js"

export interface RepositoryReadme {
  title: string | null
  badges: Badge[]
  imagePath: string | null
  videoUrl: string | null
  learnings: string[]
}