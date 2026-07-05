const VIDEO_URL_REGEX = /href="(https:\/\/youtu\.be\/[^\"]+)"/

export function extractVideoUrl(content: string): string | null {
  const match = content.match(VIDEO_URL_REGEX)
  const videoUrl = match?.[1]

  return videoUrl ?? null
}