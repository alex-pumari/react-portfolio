import type { Coordinates } from "../../../types/coordinates.js"

export function getPointerCoords(event: TouchEvent | MouseEvent): Coordinates {
  if (isTouchEvent(event)) {
    const touch = event.touches[0] ?? event.changedTouches[0]
    if (touch) return { x: touch.clientX, y: touch.clientY }

    return { x: 0, y: 0 }
  } else {
    return { x: event.clientX, y: event.clientY }
  }
}

function isTouchEvent(event: TouchEvent | MouseEvent): event is TouchEvent {
  return "touches" in event
}