export * from "./get-pointer-coords.js"
export const isTouchEvent = (e: any): e is TouchEvent => "touches" in e
export const isMultiTouch = (e: any) => "touches" in e && e.touches.length > 1
export const isSingleTouch = (e: any) => "touches" in e && e.touches.length === 1