import { joinClasses } from "../../../logic/index.js"
import "./subtitle.scss"

interface Subtitle {
  children: string
  className?: string
}

export function Subtitle ({ children, className }: Subtitle) {
  return (
    <h2 className={joinClasses("subtitle", className)}>{children}</h2>
  )
}