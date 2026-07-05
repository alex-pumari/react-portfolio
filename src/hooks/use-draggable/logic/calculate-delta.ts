import type { Coordinates } from "../../types/index.js";

export function calculateDelta(
  current: Coordinates,
  start: Coordinates
): Coordinates {
  return {
    x: current.x - start.x,
    y: current.y - start.y,
  }
}