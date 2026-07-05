import { createContext, useContext } from "react"
import type { Page } from "../types/index.js"

interface PageContextType {
  page: Page
  setPage: (page: Page) => void
}

export const PageContext = createContext<PageContextType>({ page: 1, setPage: () => {} })

export function usePageContext(): PageContextType {
  const context = useContext(PageContext)
  
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider")
  }

  return context
}