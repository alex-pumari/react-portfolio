import type { Size } from "../../../types/index.js"
import { joinClasses } from "../../../logic/join-classes.js"
import "./pattern.scss"

interface PatternProps {
  shape: "circle"
  rows: number
  cols: number
  className?: string
  strokeWidth?: Size
  size?: Size
  gap?: Size
}

export function Pattern({
  shape, className, rows, cols, strokeWidth = "md", size = "md", gap = "md"
}: PatternProps) {
  const patternClasses = joinClasses(
    "pattern",
    `pattern--gap-${gap}`,
    className
  )
  const shapeClasses = joinClasses(
    "pattern__shape",
    `pattern__shape--${shape}`,
    `pattern__shape--${size}`,
    `pattern__shape--stroke-${strokeWidth}`,
  )
  
  const shapes = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      shapes.push(
        <div className={shapeClasses} key={`${row}-${col}`} />
      )
    }
  }

  return (
    <div className={patternClasses}>
      {shapes}
    </div>
  )
}