import { describe, expect, test } from "vitest"
import { extractLearningsSection } from "./extract-learnings-section.js"

describe("extract-learnings-section", () => {
  test("should return null if keyword is not present", () => {
    const content = "No learnings here"

    expect(extractLearningsSection(content)).toBeNull()
  })

  test("should return section after keyword", () => {
    const content = `
      Something before
      Cosas que aprendí
      - Item 1
      - Item 2
    `

    const result = extractLearningsSection(content)

    expect(result).toContain("- Item 1")
    expect(result).toContain("- Item 2")
  })

  test("should return everything after first occurrence of keyword", () => {
    const content = `
      Cosas que aprendí
      - First
      Cosas que aprendí
      - Second
    `

    const result = extractLearningsSection(content)

    expect(result).toContain("- First")
  })
})