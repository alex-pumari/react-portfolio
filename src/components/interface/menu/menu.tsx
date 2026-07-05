import { joinClasses } from "../../../logic/index.js"
import { Item } from "./item.js"
import "./menu.scss"

interface MenuProps<ItemType> {
  items: readonly ItemType[]
  selectedItem?: ItemType
  className?: string
  onChange?: (newItem: ItemType) => void
  renderItem?: (item: ItemType) => string
}

export function Menu<const ItemType extends string | number> ({
  items, selectedItem, className, onChange, renderItem
}: MenuProps<ItemType>) {
  const menuClasses: string = joinClasses("menu", className)

  return (
    <ul className={menuClasses}>
      {items.map((item) => (
        <Item
          key={item}
          value={renderItem ? renderItem(item) : item}
          selected={item === selectedItem}
          onClick={() => {
            if (onChange && item !== selectedItem) onChange?.(item)
          }}
        />
      ))}
    </ul>
  )
}