import type { Coordinates } from "../../types/index.js"

export function calculateNewPosition(
  startElement: Coordinates,
  delta: Coordinates
): Coordinates {
  return {
    x: startElement.x + delta.x,
    y: startElement.y + delta.y,
  }
}