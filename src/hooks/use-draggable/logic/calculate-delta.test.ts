import { describe, test, expect } from "vitest"
import { calculateDelta } from "./calculate-delta.js"

describe("calculate-delta", () => {
  test("should calculate the correct delta between two coordinates", () => {
    const current = { x: 100, y: 150 }
    const start = { x: 50, y: 70 }
    const delta = calculateDelta(current, start)

    expect(delta).toEqual({ x: 50, y: 80 })
  })

  test("should return zero delta if current and start coordinates are the same", () => {
    const current = { x: 200, y: 300 }
    const start = { x: 200, y: 300 }
    const delta = calculateDelta(current, start)

    expect(delta).toEqual({ x: 0, y: 0 })
  })

  test("should handle negative coordinates correctly", () => {
    const current = { x: -10, y: 20 }
    const start = { x: 30, y: -40 }
    const delta = calculateDelta(current, start)

    expect(delta).toEqual({ x: -40, y: 60 })
  })
})
