import { getPointerCoords, isTouchEvent } from "./get-pointer-coords.js";

export { getPointerCoords, isTouchEvent };

export const isMultiTouch = (e: unknown) =>
  isTouchEvent(e) && e.touches.length > 1;

export const isSingleTouch = (e: unknown) =>
  isTouchEvent(e) && e.touches.length === 1;