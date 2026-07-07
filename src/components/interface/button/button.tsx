import type { ReactNode } from "react";
import type { Size } from "../../../types/index.js";
import { joinClasses } from "../../../logic/index.js";
import "./button.scss";

interface ButtonProps {
  children: ReactNode
  size?: Size
  direction?: "row" | "column"
  onClick?: () => void
  disabled?: boolean
  ariaExpanded?: boolean
  ariaHaspopup?: "listbox"
}

export function Button(
  { children, direction = "row", size = "md", onClick, disabled, ariaExpanded, ariaHaspopup }: ButtonProps
) {
  const btnClasses = joinClasses(
    "button",
    direction === "row" && "button--row",
    direction === "column" && "button--column",
    size === "sm" && "button--sm",
    size === "md" && "button--md",
    size === "lg" && "button--lg",
  );

  return (
    <button
      className={btnClasses}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
    >
      {children}
    </button>
  );
}