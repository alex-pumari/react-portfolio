import { joinClasses } from "../../../logic/index.js"
import "./flap.scss"

interface FlapProps<Value> {
  value: Value
  selected: boolean
  onClick?: (value: Value) => void
}

export function Flap<Value extends string | number> (
  { value, selected, onClick }: FlapProps<Value>
) {
  const flapClasses: string = joinClasses(
    "flap",
    selected && "flap--selected",
  )

  return (
    <li className={flapClasses} onClick={() => onClick?.(value)}>{value}</li>
  )
}