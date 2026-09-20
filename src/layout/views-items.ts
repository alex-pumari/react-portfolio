import type { MenuItem } from "../types/menu-item.js";
import type { ViewId } from "../types/view-id.js";

export const viewItems: MenuItem<ViewId>[] = [
  { id: "home", label: "Inicio" },
  { id: "about-me", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" }
];