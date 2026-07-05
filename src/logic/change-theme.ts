import type { Theme } from "../types/index.js"

export function changeTheme (theme: Theme): void {
  const lowerTheme = theme.toLocaleLowerCase()
  
  document.querySelector(":root")!.setAttribute("data-scheme", lowerTheme)
}