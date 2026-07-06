import type { Theme } from "../types/index.js";

export function changeTheme (theme: Theme): void {
  const lowerTheme = theme.toLocaleLowerCase();
  
  const root = document.querySelector(":root");
  
  if (root) {
    root.setAttribute("data-scheme", lowerTheme);
  }
}