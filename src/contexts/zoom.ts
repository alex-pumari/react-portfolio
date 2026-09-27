import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

interface ZoomContextType {
  zoom: number
  setZoom: Dispatch<SetStateAction<number>>
}

export const ZoomContext = createContext<ZoomContextType | null>(null);

export function useZoomContext(): ZoomContextType {
  const context = useContext(ZoomContext);
  
  if (!context) {
    throw new Error("useZoomContext must be used within a ZoomProvider");
  }

  return context;
}