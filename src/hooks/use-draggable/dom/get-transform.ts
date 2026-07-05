import type { TransformData } from "./transform-data.js"

export function getTransform(element: HTMLElement): TransformData {
  const transform = window.getComputedStyle(element).transform

  const matrix = new DOMMatrix(transform)

  return { scale: matrix.a, position: { x: matrix.m41, y: matrix.m42 } }
}