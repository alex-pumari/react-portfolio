import { PAGE_NAMES } from "../config/constants.js"
import type { Page, PageName } from "../types/index.js"

export function getPageName(page: Page): PageName {
  const pageName = PAGE_NAMES[page - 1]
  if (!pageName) throw new Error("Page is out of range")

  return pageName
}