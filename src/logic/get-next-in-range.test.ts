import { describe, test, expect } from "vitest"
import { getNextInRange } from "./index.js"

describe("get-next-in-range", () => {
  test("should return next value within range without wrap", () => {
    const result = getNextInRange({ value: 5, min: 0, max: 10 })
    expect(result).toBe(6)
  })

  test("should clamp to max when exceeding range without wrap", () => {
    const result = getNextInRange({ value: 10, min: 0, max: 10 })
    expect(result).toBe(10)
  })

  test("should clamp to min when going below range without wrap", () => {
    const result = getNextInRange({ value: 0, min: 0, max: 10, step: -1 })
    expect(result).toBe(0)
  })

  test("should use custom step", () => {
    const result = getNextInRange({ value: 5, min: 0, max: 10, step: 2 })
    expect(result).toBe(7)
  })

  test("should return min when exceeding max with wrap enabled", () => {
    const result = getNextInRange({
      value: 10,
      min: 0,
      max: 10,
      wrap: true,
    })
    expect(result).toBe(0)
  })

  test("should return max when going below min with wrap enabled", () => {
    const result = getNextInRange({
      value: 0,
      min: 0,
      max: 10,
      step: -1,
      wrap: true,
    })
    expect(result).toBe(10)
  })

  test("should return next value within range with wrap enabled", () => {
    const result = getNextInRange({
      value: 5,
      min: 0,
      max: 10,
      wrap: true,
    })
    expect(result).toBe(6)
  })

  test("should handle negative step within range", () => {
    const result = getNextInRange({
      value: 5,
      min: 0,
      max: 10,
      step: -2,
    })
    expect(result).toBe(3)
  })

  test("should clamp to max when large step exceeds range without wrap", () => {
    const result = getNextInRange({
      value: 9,
      min: 0,
      max: 10,
      step: 5,
    })
    expect(result).toBe(10)
  })

  test("should wrap to min when large step exceeds max with wrap enabled", () => {
    const result = getNextInRange({
      value: 9,
      min: 0,
      max: 10,
      step: 5,
      wrap: true,
    })
    expect(result).toBe(0)
  })
})