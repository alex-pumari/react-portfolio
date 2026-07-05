import type { Coordinates } from "../../types/index.js"

export interface DragState {
  isDragging: boolean
  startPointer: Coordinates
  startElement: Coordinates
}