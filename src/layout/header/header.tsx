import type { MenuItem, Theme, ViewId } from "../../types/index.js";
import type { ComponentType, FC, SVGProps } from "react";
import { useEffect, useState } from "react";
import { HelpIcon, ThemeIcon } from "../../components/icons/index.js";
import { IconButton } from "../../components/icon-button/icon-button.js";
import { Panel } from "../../components/panel/panel.js";
import { joinClasses } from "../../logic/join-classes.js";
import { useFullScreenContext } from "../../contexts/full-screen.js";
import { changeTheme } from "../../logic/change-theme.js";
import { viewIcons } from "./view-icons.js";
import "./header.scss";

interface HeaderProps {
  menuItems: MenuItem<ViewId>[];
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
}

export const Header: FC<HeaderProps> = ({ menuItems, activeView, onViewChange }) => {
  const [theme, setTheme] = useState<Theme>("Light");
  const { isFullScreen } = useFullScreenContext();

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const toggleTheme = () => { setTheme(currentTheme => currentTheme === "Light" ? "Dark" : "Light"); };

  return (
    <header className={joinClasses("header", isFullScreen && "header--full-screen")}>
      <Panel className="header__view-controls-panel" screwOffset="sm">
        <nav className={joinClasses("header__nav", `header__nav--view-${activeView}`)}>
          {menuItems.map(({ id, label }) => {
            const Icon: ComponentType<SVGProps<SVGSVGElement>> = viewIcons[id];
            const navItemClassName = joinClasses(
              "header__nav-item",
              `header__nav-item--${id}`,
              activeView === id && "header__nav-item--active",
            );

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
      </Panel>
      <Panel className="header__controls-panel" screwOffset="sm">
        <IconButton
          shadow="sm"
          icon={<ThemeIcon />}
          title="Cambiar tema"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        ></IconButton>
        <IconButton
          shadow="sm"
          icon={<HelpIcon />}
          title="Ayuda"
          aria-label="Ayuda"
        ></IconButton>
      </Panel>
    </header>
  );
};
