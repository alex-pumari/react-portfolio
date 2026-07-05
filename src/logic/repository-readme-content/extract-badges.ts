import type { Badge } from "../../types/badge.js"

const BADGE_REGEX = /!\[(.*?)\]\((https:\/\/img\.shields\.io\/[^\)]+)\)/g

export function extractBadges(content: string): Badge[] {
  const badges: Badge[] = []

  let match: RegExpExecArray | null = BADGE_REGEX.exec(content)
  let hasMatches: boolean = match !== null

  while (hasMatches) {
    const [_, name, url] = match as RegExpExecArray
    const normalizedName = name!.trim()

    badges.push({ name: normalizedName, url: url! })

    match = BADGE_REGEX.exec(content)
    hasMatches = match !== null
  }

  return badges
}