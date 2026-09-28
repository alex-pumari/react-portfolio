import type { Item, Theme, ViewId } from "../../types/index.js";
import type { ComponentType, FC, SVGProps } from "react";
import { useEffect, useState } from "react";
import { useFullScreenContext } from "../../contexts/full-screen.js";
import { HelpIcon, ThemeIcon } from "../../components/icons/index.js";
import { IconButton } from "../../components/icon-button/icon-button.js";
import { DropdownButton } from "../../components/dropdown-button/dropdown-button.js";
import { Panel } from "../../components/panel/panel.js";
import { joinClasses } from "../../logic/join-classes.js";
import { getViewName } from "../../logic/get-view-name.js";
import { changeTheme } from "../../logic/change-theme.js";
import { viewIcons } from "./view-icons.js";
import "./header.scss";

interface HeaderProps {
  menuItems: Item<ViewId, ViewId>[];
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
}

export const Header: FC<HeaderProps> = ({ menuItems, activeView, onViewChange }) => {
  const [theme, setTheme] = useState<Theme>("Light");
  const { isFullScreen } = useFullScreenContext();

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const activeViewName = getViewName(activeView);
  const toggleTheme = () => { setTheme(currentTheme => currentTheme === "Light" ? "Dark" : "Light"); };

  return (
    <header className={joinClasses("header", isFullScreen && "header--full-screen")}>
      <Panel className="header__view-controls-panel" screwOffset="sm">
        <nav className="hidden-md hidden-lg">
          <DropdownButton
            className="header__dropdown-button"
            variant="outline"
            shadow="sm"
            items={menuItems}
            selectedId={activeView}
            formatValue={(value) => getViewName(value)}
            onSelect={(item) => onViewChange(item.value)}
          >
            <span className="header__dropdown-button-label">{activeViewName}</span>
          </DropdownButton>
        </nav>

        <nav className={joinClasses("header__nav", `header__nav--view-${activeView} hidden-xs hidden-sm`)}>
          {menuItems.map(({ id, value }) => {
            const Icon: ComponentType<SVGProps<SVGSVGElement>> = viewIcons[id];
            const navItemClassName = joinClasses(
              "header__nav-item",
              `header__nav-item--${id}`,
              activeView === id && "header__nav-item--active",
            );

            return (
              <button // TODO: Reemplazar por un el componente botón
                key={id}
                className={navItemClassName}
                onClick={() => onViewChange(id)}
              >
                {Icon && <Icon className="header__nav-item-icon" />}
                {getViewName(value)}
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
         className="hidden-xs hidden-sm hidden-md hidden-lg"
          shadow="sm"
          icon={<HelpIcon />}
          title="Ayuda"
          aria-label="Ayuda"
        ></IconButton>
      </Panel>
    </header>
  );
};
