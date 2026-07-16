import type { ComponentType, FC, SVGProps } from "react";
import type { MenuItem, ViewId } from "../types/index.js";
import { HomeIcon, MailIcon, PortfolioIcon, ProfileIcon, HelpIcon, ThemeIcon } from "../components/icons/index.js";
import { joinClasses } from "../logic/join-classes.js";
import "./header.scss";

export const viewIcons: Record<ViewId, ComponentType> = {
  ["home"]: HomeIcon,
  ["about-me"]: ProfileIcon,
  ["projects"]: PortfolioIcon,
  ["contact"]: MailIcon,
};

interface HeaderProps {
  menuItems: MenuItem<ViewId>[];
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
}

export const Header: FC<HeaderProps> = ({ menuItems, activeView, onViewChange }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        {menuItems.map((item) => {
          const Icon: ComponentType<SVGProps<SVGSVGElement>> = viewIcons[item.id];

          return (
            <button
              key={item.id}
              className={joinClasses("header__nav-item", activeView === item.id && "header__nav-item--active")}
              onClick={() => onViewChange(item.id)}
            >
              {Icon && <Icon className="header__nav-item-icon" />}
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="header__controls">
        <button className="header__controls-button" title="Cambiar tema" aria-label="Cambiar tema"> {/* TODO: aria-pressed={isDarkMode} */}
          <ThemeIcon className="header__controls-icon" />
        </button>
        <button className="header__controls-button" title="Ayuda" aria-label="Ayuda">
          <HelpIcon className="header__controls-icon" />
        </button>
      </div>
    </header>
  );
};
