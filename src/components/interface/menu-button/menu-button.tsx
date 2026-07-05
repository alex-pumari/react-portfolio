import type { Direction } from "../../../types/direction.js"
import { getChevronIcon, joinClasses } from "../../../logic/index.js"
import { Menu, Button } from "../index.js"
import "./menu-button.scss"
import { useClickOutside } from "../../../hooks/index.js"
import { useRef, useState } from "react"

interface MenuButtonProps<ItemType> {
  label: string
  items: readonly ItemType[]
  direction?: Direction
  initialIsOpen?: boolean
  selectedItem?: ItemType
  onChange?: (newItem: ItemType) => void
  renderItem?: (item: ItemType) => string
}


export function MenuButton<const ItemType extends string | number>({
  label,
  items,
  selectedItem,
  direction = "bottom",
  initialIsOpen = false,
  onChange,
  renderItem,
}: MenuButtonProps<ItemType>) {
  const [isOpen, setOpen] = useState<boolean>(initialIsOpen)
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setOpen(false))

  const chevronIcon: string = getChevronIcon(isOpen, direction)
  const menuClasses = joinClasses(
    "menu-button__menu",
    `menu-button__menu--${direction}`,
  )
  const handleChange = (item: ItemType) => {
    onChange?.(item)
    setOpen(false)
  }

  return (
    <div className="menu-button" ref={ref}>
      <Button size="lg" onClick={() => setOpen(isOpen => !isOpen)}>
        <span>{label}</span><span>{chevronIcon}</span>
      </Button>
      {isOpen && (
        <Menu
          className={menuClasses}
          items={items}
          onChange={handleChange}
          {...(selectedItem && { selectedItem })}
          {...(renderItem && { renderItem })}
        />
      )}
    </div>
  )
}