import { describe, test, expect } from "vitest"
import { getPointerCoords } from "./get-pointer-coords.js"

describe("get-pointer-coords", () => {
  test("should return correct coordinates for a MouseEvent", () => {
    const mockMouseEvent = {
      clientX: 100,
      clientY: 200,
    } as unknown as MouseEvent

    const coords = getPointerCoords(mockMouseEvent)
    expect(coords).toEqual({ x: 100, y: 200 })
  })

  test("should return correct coordinates for a TouchEvent", () => {
    const mockTouchEvent = {
      touches: [
        {
          clientX: 50,
          clientY: 150,
        },
      ],
      changedTouches: [],
    } as unknown as TouchEvent

    const coords = getPointerCoords(mockTouchEvent)
    expect(coords).toEqual({ x: 50, y: 150 })
  })

  test("should return correct coordinates from changedTouches if touches is empty", () => {
    const mockTouchEvent = {
      touches: [],
      changedTouches: [
        {
          clientX: 75,
          clientY: 125,
        },
      ],
    } as unknown as TouchEvent

    const coords = getPointerCoords(mockTouchEvent)
    expect(coords).toEqual({ x: 75, y: 125 })
  })

  test("should return { x: 0, y: 0 } if no touches or changedTouches exist in a TouchEvent", () => {
    const mockTouchEvent = {
      touches: [],
      changedTouches: [],
    } as unknown as TouchEvent

    const coords = getPointerCoords(mockTouchEvent)
    expect(coords).toEqual({ x: 0, y: 0 })
  })
})
