import type { ReactNode } from "react"
import { joinClasses } from "../../../logic/index.js"
import "./button.scss"

interface ButtonProps {
  className?: string
  onClick?: () => void
  children: ReactNode
}

export function Button ({
  className, onClick, children
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={joinClasses("button", className)}
    >
      {children}
    </button>
  )
}