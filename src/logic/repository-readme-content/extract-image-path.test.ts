import { describe, test, expect } from "vitest"
import { extractImagePath } from "./extract-image-path.js"

describe("extract-image-path", () => {
  test("should return the image path when markdown contains a readme image", () => {
    const markdown = "![Alt text](readme/image.png)"
    
    const result = extractImagePath(markdown)

    expect(result).toBe("readme/image.png")
  })

  test("should return the first image path when multiple readme images exist", () => {
    const markdown = `
      ![First](readme/first.png)
      ![Second](readme/second.png)
    `
    
    const result = extractImagePath(markdown)

    expect(result).toBe("readme/first.png")
  })

  test("should return null when no readme image is present", () => {
    const markdown = "![Alt text](images/image.png)"
    
    const result = extractImagePath(markdown)

    expect(result).toBeNull()
  })

  test("should return null when markdown does not contain any image", () => {
    const markdown = "# Title\nSome content without images."
    
    const result = extractImagePath(markdown)

    expect(result).toBeNull()
  })

  test("should return null when input is an empty string", () => {
    const result = extractImagePath("")

    expect(result).toBeNull()
  })
})