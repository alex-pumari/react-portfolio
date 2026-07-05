import { joinClasses, getNextInRange } from "../../../logic/index.js"
import { Button } from "../button/index.js"
import "./stepper.scss"

export interface StepperProps {
  value: number
  min?: number
  max: number
  onChange?: (newValue: number) => void
  label?: string | ((value: number, max: number, min: number) => string)
  className?: string
  disabled?: boolean
  infinite?: boolean
}

export function Stepper ({
  value,
  min = 1,
  max,
  label,
  className,
  onChange,
  infinite = false,
  disabled,
}: StepperProps) {
  const canDecrease = !disabled && (infinite || value > min)
  const canIncrease = !disabled && (infinite || value < max)
  const labelContent: string = isFunction(label)
    ? label(value, max, min)
    : label ?? `${value} / ${max}`


  const handleDecrease = () => {
    if (disabled) return

    const newValue = getNextInRange({ min, max, value, step: -1, wrap: infinite })
    if(newValue !== value) onChange?.(newValue)
  }

  const handleIncrease = () => {
    if (disabled) return

    const newValue = getNextInRange({ min, max, value, step: 1, wrap: infinite })
    if(newValue !== value) onChange?.(newValue)
  }

  return (
    <div className={joinClasses("stepper", className)}>
        <Button
          size="sm"
          disabled={!canDecrease}
          onClick={handleDecrease}
        >
          ◀
        </Button>

      <span className="stepper__label">
        {labelContent}
      </span>

        <Button
          size="sm"
          disabled={!canIncrease}
          onClick={handleIncrease}
        >
          ▶
        </Button>
    </div>
  )
}

function isFunction (value: any): value is Function {
  return typeof value === "function"
}