import { createContext, useContext } from "react";
import type { ViewId } from "../types/index.js";

interface ViewContextType {
  view: ViewId
  setView: (view: ViewId) => void
}

export const ViewContext = createContext<ViewContextType | null>(null);

export function useViewContext(): ViewContextType {
  const context = useContext(ViewContext);
  
  if (!context) {
    throw new Error("useViewContext must be used within a PageProvider");
  }

  return context;
}