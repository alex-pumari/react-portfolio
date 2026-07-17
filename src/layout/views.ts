import type { ViewId } from "../types/view-id.js";
import { Home } from "../views/home/home.js";
import { AboutMe } from "../views/about-me/about-me.js";
import { Projects } from "../views/projects/projects.js";
import { Contact } from "../views/contact/contact.js";

export const views: Record<ViewId, React.ComponentType> = {
  "home": Home,
  "about-me": AboutMe,
  "projects": Projects,
  "contact": Contact,
};