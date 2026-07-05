import { createContext, useContext } from "react"

interface FullScreenContextType {
  isFullScreen: boolean
  toggleFullScreen: () => void
}

export const FullScreenContext = createContext<FullScreenContextType>(
  { isFullScreen: false, toggleFullScreen: () => {} }
)

export function useFullScreenContext(): FullScreenContextType {
  const context = useContext(FullScreenContext)
  
  if (!context) {
    throw new Error("useFullScreenContext must be used within a FullScreenProvider")
  }

  return context
}