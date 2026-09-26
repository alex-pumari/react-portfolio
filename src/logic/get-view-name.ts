import type { ViewId } from "../types/index.js";

const VIEW_NAMES: Record<ViewId, string> = {
  home: "Inicio",
  "about-me": "Sobre mí",
  projects: "Proyectos",
  contact: "Contacto",
};

export function getViewName(viewId: ViewId): string {
  const viewName = VIEW_NAMES[viewId];

  if (!viewName) throw new Error("View not found");

  return viewName;
}