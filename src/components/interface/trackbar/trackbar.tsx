import { Button } from "../index.js"
import { joinClasses } from "../../../logic/index.js"
import "./trackbar.scss"

interface TrackbarProps {
  value: number
  min: number
  max: number
  step: number
  className?: string
  onChange?: (newValue: number) => void
}

export function Trackbar(
  { value, min, max, step, className, onChange }: TrackbarProps
) {
  return (
    <div className={joinClasses("trackbar", className)}>
      <Button
        size="sm"
        onClick={() => onChange?.(value - step)}
        disabled={value <= min}
      >
        -
      </Button>
      <input
        className="trackbar__input"
        onChange={e => onChange?.(Number(e.target.value))}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
      />
      <Button
        size="sm"
        onClick={() => onChange?.(value + step)}
        disabled={value >= max}
      >
        +
      </Button>
    </div>
  )
}