export * from "./get-pointer-coords.js";
export const isTouchEvent = (e: unknown): e is TouchEvent => "touches" in e;
export const isMultiTouch = (e: unknown) => "touches" in e && (e as TouchEvent).touches.length > 1;
export const isSingleTouch = (e: unknown) => "touches" in e && (e as TouchEvent).touches.length === 1;