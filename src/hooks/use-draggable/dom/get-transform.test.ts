import { describe, test, expect, vi } from "vitest"
import { getTransform } from "./get-transform.js"

describe("get-transform", () => {
  test("should return the correct transform data from an element", () => {
    const mockElement = document.createElement("div")
    
    Object.defineProperty(window, "getComputedStyle", {
      value: vi.fn(() => ({
        transform: "matrix(1.5, 0, 0, 1.5, 100, 200)"
      }))
    });

    const transformData = getTransform(mockElement)

    expect(transformData).toEqual({
      scale: 1.5,
      position: { x: 100, y: 200 },
    })
  })
})
