import type { TransformData } from "./transform-data.js";

export function setTransform(
  element: HTMLElement,
  { position, scale }: TransformData,
): void {
  element.style.transform = `translate(${position.x}px, ${position.y}px) scale(${scale})`
}