import type { DragState } from "../drag-state.js"

export function createInitialState(): DragState {
  return {
    isDragging: false,
    startPointer: { x: 0, y: 0 },
    startElement: { x: 0, y: 0 },
  }
}