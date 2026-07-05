import { Flap } from "../flap/flap.js"
import "./flaps.scss"

interface FlapsProps<Value> {
  flaps: readonly Value[]
  selectedFlap: Value
  onChange?: (newFlap: Value) => void
}
export function Flaps<Value extends string | number>({ flaps, selectedFlap, onChange } : FlapsProps<Value>) {
  return (
    <>
      <ul className="flaps">
        {flaps.map((flap: Value) => (
          <Flap
            key={flap}
            value={flap}
            selected={flap === selectedFlap}
            onClick={() => {
              if (onChange && flap !== selectedFlap) onChange?.(flap)
            }}
          />
        ))}
      </ul>
    </> 
  )
}