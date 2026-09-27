import type { ReactNode } from "react";
import type { Item } from "../../types/item.js";
import type { ButtonVariant } from "../button/button.js";
import type { Size } from "../../types/size.js";
import { useRef, useState } from "react";
import { Button } from "../button/button.js";
import { getChevronIcon } from "../../logic/get-chevron-icon.js";
import { useClickOutside } from "../../hooks/use-click-outside.js";
import { joinClasses } from "../../logic/join-classes.js";
import "./dropdown-button.scss";

type DropdownButtonVariant = ButtonVariant;
type DropdownButtonSize = Size;
type DropdownButtonShadow = Size;
type DropdownButtonDirection = "top" | "bottom";

interface DropdownButtonProps<ItemType extends Item = Item> {
  items: ItemType[];
  onSelect: (item: ItemType) => void;
  selectedId?: ItemType["id"];
  menuLabel?: string;
  variant?: DropdownButtonVariant;
  size?: DropdownButtonSize;
  shadow?: DropdownButtonShadow;
  direction?: DropdownButtonDirection;
  formatValue?: (value: ItemType["value"]) => string;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DropdownButton = <ItemType extends Item>({
  children,
  items,
  onSelect,
  selectedId,
  menuLabel,
  variant = "primary",
  shadow = "md",
  size = "md",
  direction = "bottom",
  formatValue,
  loading = false,
  disabled = false,
  className,
}: DropdownButtonProps<ItemType>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const handleSelectItem = (item: ItemType) => {
    onSelect(item);
    setIsOpen(false);
  };

  const chevronIcon = getChevronIcon(isOpen, direction);

  return (
    <div className="dropdown-button__container" ref={containerRef}>
      <Button
        variant={variant}
        shadow={shadow}
        size={size}
        loading={loading}
        disabled={disabled}
        className={className}
        icon={
          <span className="dropdown-button__chevron">
            {chevronIcon}
          </span>
        }
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {children}
      </Button>

      {isOpen && (
        <div
          className={joinClasses(
            "dropdown-button__menu",
            `dropdown-button__menu--${direction}`,
            `dropdown-button__menu--shadow-${shadow}`,
          )}
          role="menu"
          aria-label={menuLabel}
        >
          {items.map((item) => {
            const formattedValue = formatValue?.(item.value);
            const isSelectedItem = item.id === selectedId;

            return (
              <Button
                key={item.id}
                className="dropdown-button__item"
                variant="ghost"
                size={size}
                role="menuitem"
                aria-selected={isSelectedItem}
                onClick={() => handleSelectItem(item)}
              >
                {isSelectedItem && (
                  <span className="dropdown-button__check" aria-hidden="true">
                    ✓
                  </span>
                )}

                <span>{formattedValue || item.value}</span>
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};