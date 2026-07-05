import { describe, test, expect } from "vitest"
import { calculateZoom } from "./calculate-zoom.js"
import type { ZoomValue } from "../types/index.js"

describe("calculate-zoom", () => {
  test("should zoom in to the next value", () => {
    expect(calculateZoom(60, "in")).toBe(80)
    expect(calculateZoom(100, "in")).toBe(120)
  })

  test("should zoom out to the previous value", () => {
    expect(calculateZoom(140, "out")).toBe(120)
    expect(calculateZoom(100, "out")).toBe(80)
  })

  test("should throw an error for invalid zoom value", () => {
    expect(() => calculateZoom(49 as ZoomValue, "in")).toThrowError("Invalid current-zoom value: 49")
  })

  test("should return max zoom when zooming in at maximum", () => {
    expect(calculateZoom(140, "in")).toBe(140)
  })

  test("should return min zoom when zooming out at minimum", () => {
    expect(calculateZoom(60, "out")).toBe(60)
  })
})
