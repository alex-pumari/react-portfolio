import type { ComponentType, FC, SVGProps } from "react";
import type { MenuItem, ViewId } from "../../types/index.js";
import { HomeIcon, MailIcon, PortfolioIcon, ProfileIcon, HelpIcon, ThemeIcon } from "../../components/icons/index.js";
import { IconButton } from "../../components/icon-button/icon-button.js";
import { joinClasses } from "../../logic/join-classes.js";
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
      <div className="header__view-controls-section">
        <nav className={joinClasses("header__nav", `header__nav--view-${activeView}`)}>
          {menuItems.map(({ id, label }) => {
            const Icon: ComponentType<SVGProps<SVGSVGElement>> = viewIcons[id];
            const navItemClassName = joinClasses(
              "header__nav-item",
              `header__nav-item--${id}`,
              activeView === id && "header__nav-item--active",
            )

            return (
              <button
                key={id}
                className={navItemClassName}
                onClick={() => onViewChange(id)}
              >
                {Icon && <Icon className="header__nav-item-icon" />}
                {label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="header__controls-section">
        <IconButton
          icon={<ThemeIcon />}
          title="Cambiar tema"
          aria-label="Cambiar tema"
        ></IconButton>
        <IconButton
          icon={<HelpIcon />}
          title="Ayuda"
          aria-label="Ayuda"
        ></IconButton>
      </div>
    </header>
  );
};
