import type { Item } from "../types/item.js";
import type { ViewId } from "../types/view-id.js";

export const viewItems: Item<ViewId, ViewId>[] = [
  { id: "home", value: "home" },
  { id: "about-me", value: "about-me" },
  { id: "projects", value: "projects" },
  { id: "contact", value: "contact" }
];