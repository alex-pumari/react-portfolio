import type { ReactNode } from "react";
import type { MenuItem } from "../../types/menu-item.js";
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

export interface DropdownButtonProps<ItemIdType extends string> {
  items: MenuItem<ItemIdType>[];
  onSelect: (itemId: ItemIdType) => void;
  selectedId?: ItemIdType;
  menuLabel?: string;
  variant?: DropdownButtonVariant;
  size?: DropdownButtonSize;
  shadow?: DropdownButtonShadow;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DropdownButton = <ItemIdType extends string>({
  children,
  items,
  onSelect,
  selectedId,
  menuLabel,
  variant = "primary",
  shadow = "md",
  size = "md",
  loading = false,
  disabled = false,
  className,
}: DropdownButtonProps<ItemIdType>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const handleSelectItem = (itemId: ItemIdType) => {
    onSelect(itemId);
    setIsOpen(false);
  };

  const chevronIcon = getChevronIcon(isOpen, "bottom");

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
          className={joinClasses("dropdown-button__menu", `dropdown-button__menu--shadow-${shadow}`)}
          role="menu"
          aria-label={menuLabel}
        >
          {items.map((item) => (
            <Button
              key={item.id}
              className="dropdown-button__item"
              variant="ghost"
              size={size}
              role="menuitem"
              aria-selected={item.id === selectedId}
              onClick={() => handleSelectItem(item.id)}
            >
              {item.id === selectedId && (
                <span className="dropdown-button__check" aria-hidden="true">
                  ✓
                </span>
              )}

              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};