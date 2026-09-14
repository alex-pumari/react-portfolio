import type { FC } from "react";
import type { MenuItem, ViewId } from "../types/index.js";
import { useEffect } from "react";
import { Header } from "./header/header.js";
import { Footer } from "./footer/footer.js";
import { joinClasses } from "../logic/join-classes.js";
import { setElementZoom } from "../logic/set-element-zoom.js";
import { useFullScreenContext, useZoomContext } from "../contexts/index.js";
import { IconButton } from "../components/icon-button/icon-button.js";
import { FullscreenExitIcon } from "../components/icons/fullscreen-exit.js";
import "./layout.scss";

export interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewId;
  onViewChange: (view: ViewId | ((currentView: ViewId) => ViewId)) => void;
}

const menuItems: MenuItem<ViewId>[] = [
  { id: "home", label: "Inicio" },
  { id: "about-me", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" }
];

const viewNavigation: Record<ViewId, { next: ViewId | null; previous: ViewId | null }> = {
  "home": { next: "about-me", previous: null },
  "about-me": { next: "projects", previous: "home" },
  "projects": { next: "contact", previous: "about-me" },
  "contact": { next: null, previous: "projects" },
};

export const Layout: FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  const { zoom } = useZoomContext();
  const { isFullScreen, toggleFullScreen } = useFullScreenContext();

  const isCollectionView = activeView === "projects";

  useEffect(() => {
    const viewportContent = document?.getElementById("viewport-content");

    if (!viewportContent) return;

    const zoomOrigin = activeView === "projects" ? "top" : "center";
    setElementZoom(viewportContent, zoom, 100, zoomOrigin);
  }, [zoom, activeView]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;

      const target = event.target as HTMLElement | null;
      const isTypingTarget = target?.matches("input, textarea, select, [contenteditable='true']");

      if (isTypingTarget) return;

      if (!(event.key === "ArrowLeft" || event.key === "ArrowRight")) return;

      event.preventDefault();
      if (event.key === "ArrowLeft") {
        onViewChange((currentView) => viewNavigation[currentView].previous || currentView);
      } else {
        onViewChange((currentView) => viewNavigation[currentView].next || currentView);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="frame">
      <Header menuItems={menuItems} activeView={activeView} onViewChange={onViewChange} />

      <main className={joinClasses("viewport", isCollectionView && "viewport--collection")} id="viewport">
        <div className="viewport__content" id="viewport-content">
          {children}
        </div>
      </main>

      <Footer />

      {isFullScreen && (
        <IconButton
          icon={<FullscreenExitIcon />}
          className="viewport__full-screen-control"
          title="Minimizar pantalla"
          aria-label="Minimizar pantalla"
          onClick={toggleFullScreen}
        ></IconButton>
      )}
    </div>
  );
};