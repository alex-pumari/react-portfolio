import type { ComponentType } from "react";
import type { ViewId } from "../../types/view-id.js";
import { HomeIcon } from "../../components/icons/home-icon.js";
import { MailIcon } from "../../components/icons/mail-icon.js";
import { PortfolioIcon } from "../../components/icons/portfolio-icon.js";
import { ProfileIcon } from "../../components/icons/profile-icon.js";

export const viewIcons: Record<ViewId, ComponentType> = {
  ["home"]: HomeIcon,
  ["about-me"]: ProfileIcon,
  ["projects"]: PortfolioIcon,
  ["contact"]: MailIcon,
};