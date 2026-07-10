import type { FC } from "react";
import { WindowCard } from "../components/window-card/window-card.js";
import { Button } from "../components/button/button.js";
import "./views.scss";

export interface HomeProps {
  onViewChange: (view: "home" | "about" | "projects" | "contact") => void;
}

export const Home: FC<HomeProps> = ({ onViewChange }) => {
  return (
    <div className="view-home animate-fade-in">
      <WindowCard title="System_welcome.exe">
        <div className="home-hero">
          <pre className="home-hero__ascii">
{`   _     _ _              ____ ____ 
  | |__ (_) |_ _ __   ___/ ___/ ___|
  | "_ \\| | __| "_ \\ / _ \\___ \\___ \\
  | |_) | | |_| | | |  __/___) |__) |
  |_.__/|_|\\__|_| |_|\\___|____|____/`}
          </pre>
          <h1 className="home-hero__title">Alex Ruben Pumari Diaz</h1>
          <p className="home-hero__subtitle">Full Stack Developer & Systems Technician</p>
          
          <div className="system-status-box">
            <p className="system-status-box__line"><span className="text--green">✔</span> Core.sys loaded successfully.</p>
            <p className="system-status-box__line"><span className="text--green">✔</span> Storage status: 32gb_ram_allocated.</p>
            <p className="system-status-box__line"><span className="text--blue">ℹ</span> Location: Buenos Aires, Argentina.</p>
          </div>

          <div className="home-hero__actions">
            <Button variant="primary" size="md" onClick={() => onViewChange("projects")}>
              Explore_projects.bat
            </Button>
            <Button variant="outline" size="md" onClick={() => onViewChange("contact")}>
              Initialize_contact.sh
            </Button>
          </div>
        </div>
      </WindowCard>
    </div>
  );
};