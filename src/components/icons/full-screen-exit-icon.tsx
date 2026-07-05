import { getSizeInEm } from "./icon.js"
import type { IconProps } from "./icon.js"

export function FullScreenExitIcon({ className, size = "md" } : IconProps) {
  return (
    <svg style={{ width: getSizeInEm(size) }} viewBox="2 2 20 20">
      <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z" fill="currentColor"/>
      </g>
    </svg>
  )
}