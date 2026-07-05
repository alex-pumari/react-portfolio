import { describe, test, expect } from "vitest"
import { createInitialState } from "./create-initial-state.js"

describe("create-initial-state", () => {
  test("should return the initial drag state", () => {
    const initialState = createInitialState()

    expect(initialState).toEqual({
      isDragging: false,
      startPointer: { x: 0, y: 0 },
      startElement: { x: 0, y: 0 },
    })
  })
})
