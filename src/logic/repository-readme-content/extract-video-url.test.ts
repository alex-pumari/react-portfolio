import { describe, test, expect } from "vitest"
import { extractVideoUrl } from "./extract-video-url.js"

describe("extractVideoUrl", () => {
  test("should return the YouTube short URL when present in an href attribute", () => {
    const markdown = `<a href="https://youtu.be/abc123">Watch video</a>`

    const result = extractVideoUrl(markdown)

    expect(result).toBe("https://youtu.be/abc123")
  })

  test("should return the first matching YouTube short URL when multiple are present", () => {
    const markdown = `
      <a href="https://youtu.be/first123">First</a>
      <a href="https://youtu.be/second456">Second</a>
    `

    const result = extractVideoUrl(markdown)

    expect(result).toBe("https://youtu.be/first123")
  })

  test("should return null when href contains a different YouTube format", () => {
    const markdown = `<a href="https://www.youtube.com/watch?v=abc123">Watch</a>`

    const result = extractVideoUrl(markdown)

    expect(result).toBeNull()
  })

  test("should return null when href is not a YouTube URL", () => {
    const markdown = `<a href="https://example.com/video">Video</a>`

    const result = extractVideoUrl(markdown)

    expect(result).toBeNull()
  })

  test("should return null when no href attribute is present", () => {
    const markdown = "Just some text without links."

    const result = extractVideoUrl(markdown)

    expect(result).toBeNull()
  })

  test("should return null when input is an empty string", () => {
    const result = extractVideoUrl("")

    expect(result).toBeNull()
  })
})
