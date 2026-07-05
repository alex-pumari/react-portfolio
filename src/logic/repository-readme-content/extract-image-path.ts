const README_IMAGE_REGEX = /!\[.*?\]\((readme\/[^\)]+)\)/

export function extractImagePath(content: string): string | null {
  const match = content.match(README_IMAGE_REGEX)

  const imagePath = match?.[1]

  return imagePath ?? null
}