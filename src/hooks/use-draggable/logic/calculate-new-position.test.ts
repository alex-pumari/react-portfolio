import { describe, test, expect } from "vitest"
import { calculateNewPosition } from "./calculate-new-position.js"

describe("calculate-new-position", () => {
  test("should calculate the correct new position", () => {
    const startElement = { x: 100, y: 100 }
    const delta = { x: 50, y: 30 }
    const newPosition = calculateNewPosition(startElement, delta)

    expect(newPosition).toEqual({ x: 150, y: 130 })
  })

  test("should handle negative delta values", () => {
    const startElement = { x: 100, y: 100 }
    const delta = { x: -20, y: -40 }
    const newPosition = calculateNewPosition(startElement, delta)

    expect(newPosition).toEqual({ x: 80, y: 60 })
  })

  test("should handle negative start element coordinates", () => {
    const startElement = { x: -50, y: -30 }
    const delta = { x: 60, y: 20 }
    const newPosition = calculateNewPosition(startElement, delta)

    expect(newPosition).toEqual({ x: 10, y: -10 })
  })

  test("should return start element position if delta is zero", () => {
    const startElement = { x: 75, y: 125 }
    const delta = { x: 0, y: 0 }
    const newPosition = calculateNewPosition(startElement, delta)

    expect(newPosition).toEqual({ x: 75, y: 125 })
  })
})
