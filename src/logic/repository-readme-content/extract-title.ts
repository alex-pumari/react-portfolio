import { decode } from "../decode-content.js"

const H1_TITLE_REGEX: RegExp = /^\s*#\s+(.+)/m
const LEADING_NON_ALPHANUMERIC_REGEX: RegExp = /^[^\p{L}\p{N}]+/u

export function extractTitle(content: string): string | null {
  const match = content.match(H1_TITLE_REGEX)
  if (!match) return null

  const firstTitleMatch = match[1]!
  const title = firstTitleMatch.replace(LEADING_NON_ALPHANUMERIC_REGEX, "").trim()

  return decode.utf8(title)
}