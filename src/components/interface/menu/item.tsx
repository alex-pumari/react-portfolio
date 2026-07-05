import { joinClasses } from "../../../logic/index.js"
import "./item.scss"

interface ItemProps<ItemType> {
  value: ItemType
  selected: boolean
  onClick?: (value: ItemType) => void
}

export function Item<ItemType extends string | number> ({ value, selected, onClick }: ItemProps<ItemType>) {
  const itemClasses = joinClasses(
    "item",
    selected && "item--selected"
  )
  return (
    <li className={itemClasses} onClick={() => onClick?.(value)}>{value}</li>
  )
}