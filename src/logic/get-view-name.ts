import type { ViewId } from "../types/index.js";
import { viewItems } from "../layout/views-items.js";

export function getViewName(viewId: ViewId): string {
  const view = viewItems.find(view => view.id === viewId);

  if (!view) throw new Error("View not found");

  const viewName = view.label;

  return viewName;
}