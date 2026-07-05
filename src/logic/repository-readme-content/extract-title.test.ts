import { describe, test, expect } from "vitest"
import { extractTitle } from "./extract-title.js"

describe("extract-title", () => {
  test("should extract the first level-1 title", () => {
    const markdown = `
      # My Awesome Project

      Some description here.
    `
    const result = extractTitle(markdown)

    expect(result).toBe("My Awesome Project")
  })

  test("should remove leading non-alphanumeric characters (like emojis)", () => {
    const markdown = `
      # 📋 Portfolio Website

      Description.
    `

    const result = extractTitle(markdown)

    expect(result).toBe("Portfolio Website")
  })

  test("should trim extra whitespace around the title", () => {
    const markdown = `
      #     My Project Title     

      Content
    `

    const result = extractTitle(markdown)

    expect(result).toBe("My Project Title")
  })

  test("should extract the first h1 even if other headings exist", () => {
    const markdown = `
      ## Subtitle

      # Main Title

      ## Another Section
    `

    const result = extractTitle(markdown)

    expect(result).toBe("Main Title")
  })

  test("should return null if no level-1 title is found", () => {
    const markdown = `
      ## Subtitle only

      No h1 here.
    `

    expect(extractTitle(markdown)).toBeNull()
  })

  test("should return null if markdown is empty", () => {
    expect(extractTitle("")).toBeNull()
  })
})