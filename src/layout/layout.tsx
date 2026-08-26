import type { FC } from "react";
import type { MenuItem, ViewId } from "../types/index.js";
import { Header } from "./header/header.js";
import { Footer } from "./footer/footer.js";
import { joinClasses } from "../logic/join-classes.js";
import { setElementZoom } from "../logic/set-element-zoom.js";
import "./layout.scss";

export interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewId;
  zoom: number;
  isFullScreen: boolean;
  onViewChange: (view: ViewId) => void;
}

const menuItems: MenuItem<ViewId>[] = [
  { id: "home", label: "Inicio" },
  { id: "about-me", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" }
];

export const Layout: FC<LayoutProps> = ({ children, activeView, zoom, isFullScreen, onViewChange }) => {
  const isCollectionView = activeView === "projects";

  useEffect(() => {
    const viewportContent = document?.getElementById("viewport-content");

    if (!viewportContent) return;

    const zoomOrigin = activeView === "projects" ? "top" : "center";
    setElementZoom(viewportContent, zoom, 100, zoomOrigin);
  }, [zoom, activeView])

  return (
    <div className="frame">
      <Header menuItems={menuItems} activeView={activeView} onViewChange={onViewChange} />

      <main className={joinClasses("viewport", isCollectionView && "viewport--collection")} id="viewport">
        <div className="viewport__content" id="viewport-content">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};