import { createContext, useContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { ZoomValue } from "../types/index.js"

interface ZoomContextType {
  zoom: ZoomValue
  setZoom: Dispatch<SetStateAction<ZoomValue>>
}

export const ZoomContext = createContext<ZoomContextType>(
  { zoom: 100, setZoom: () => {} }
)

export function useZoomContext(): ZoomContextType {
  const context = useContext(ZoomContext)
  
  if (!context) {
    throw new Error("useZoomContext must be used within a ZoomProvider")
  }

  return context
}