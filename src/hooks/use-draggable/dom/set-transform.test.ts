import { describe, test, expect, vi } from "vitest"
import { setTransform } from "./set-transform.js"

describe("set-transform", () => {
  test("should set the transform style correctly", () => {
    const element = document.createElement("div")
    const transformData = { position: { x: 100, y: 200 }, scale: 1.5 }
    setTransform(element, transformData)

    expect(element.style.transform).toBe("translate(100px, 200px) scale(1.5)")
  })

  test("should handle zero position and scale", () => {
    const element = document.createElement("div")
    const transformData = { position: { x: 0, y: 0 }, scale: 0 }
    setTransform(element, transformData)

    expect(element.style.transform).toBe("translate(0px, 0px) scale(0)")
  })

  test("should handle negative position values", () => {
    const element = document.createElement("div")
    const transformData = { position: { x: -50, y: -75 }, scale: 1 }
    setTransform(element, transformData)

    expect(element.style.transform).toBe("translate(-50px, -75px) scale(1)")
  })
})
