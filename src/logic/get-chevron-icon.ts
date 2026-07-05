import type { Direction } from "../types/direction.js"

export function getChevronIcon(isOpen: boolean, direction: Direction): string {
  const isOpeningDownward = direction.startsWith("bottom")

  if (isOpen) return isOpeningDownward ? "▲" : "▼"

  return isOpeningDownward ? "▼" : "▲"
}