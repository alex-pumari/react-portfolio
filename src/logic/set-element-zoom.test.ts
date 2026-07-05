import { describe, test, expect, beforeEach } from "vitest"
import { setElementZoom } from "./set-element-zoom.js"

describe("set-element-zoom", () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement("div")
    document.body.appendChild(element)
  })

  test("should set font-size to 1rem when zoom equals base-zoom", () => {
    setElementZoom(element, 100)
    expect(element.style.fontSize).toBe("1rem")
  })

  test("should scale font-size correctly for zoom less than base-zoom", () => {
    setElementZoom(element, 50)
    expect(element.style.fontSize).toBe("0.5rem")
  })

  test("should scale font-size correctly for zoom greater than base-zoom", () => {
    setElementZoom(element, 150)
    expect(element.style.fontSize).toBe("1.5rem")
  })

  test("should use a custom base-zoom", () => {
    setElementZoom(element, 75, 50)
    expect(element.style.fontSize).toBe("1.5rem")
  })

  test("should handle zero zoom", () => {
    setElementZoom(element, 0)
    expect(element.style.fontSize).toBe("0rem")
  })

  test("should handle decimal zoom values", () => {
    setElementZoom(element, 125.5)
    expect(element.style.fontSize).toBe("1.255rem")
  })
})
