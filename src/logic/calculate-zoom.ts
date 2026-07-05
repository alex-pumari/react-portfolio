import { ZOOM_VALUES } from "../config/constants.js"
import type { ZoomValue } from "../types/index.js"

export function calculateZoom(
  currentZoom: ZoomValue, direction: "in" | "out"
): ZoomValue {
  const currentZoomIndex = ZOOM_VALUES.indexOf(currentZoom)
  const isInvalidZoom = currentZoomIndex === -1

  if (isInvalidZoom) throw new Error(`Invalid current-zoom value: ${currentZoom}`)

  if (direction === "in") {
    const nextOrLastIndex = Math.min(currentZoomIndex + 1, ZOOM_VALUES.length - 1)
    return ZOOM_VALUES[nextOrLastIndex]!
  } else {
    const previousOrFirstIndex = Math.max(currentZoomIndex - 1, 0)
    return ZOOM_VALUES[previousOrFirstIndex]!
  }
}
