import type { FC } from "react";
import type { MenuItem, ViewId } from "../types/index.js";
import { Header } from "./header.js";
import { Footer } from "./footer.js";
import "./layout.scss";

export interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
}

const menuItems: MenuItem<ViewId>[] = [
  { id: "home", label: "Inicio" },
  { id: "about-me", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" }
];

export const Layout: FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  return (
    <div className="frame">
      <Header menuItems={menuItems} activeView={activeView} onViewChange={onViewChange} />

      <main className="viewport">
        <div className="viewport__content">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};