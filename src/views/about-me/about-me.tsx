import type { FC } from "react";
import { WindowCard } from "../../components/window-card/window-card.js";
import { Panel } from "../../components/panel/panel.js";
import { LocationIcon } from "../../components/icons/location-icon.js";
import { EducationIcon } from "../../components/icons/education-icon.js";
import "./about-me.scss";

export const AboutMe: FC = () => {
  return (
      <WindowCard title="SOBRE_MI.INF" className="about-me-view" isDraggable>
        <div className="about-me-view__content">
          <div className="about-me-view__bio">
            <p>
              Empecé programando por curiosidad, creando videojuegos y aprendiendo de cada desafío. Con el tiempo, esa curiosidad me llevó al desarrollo web y a las automatizaciones, donde hoy convierto ideas en aplicaciones que aportan valor.
            </p>
            <p>
              Si tenés un proceso para mejorar, una idea para desarrollar o un desafío tecnológico por resolver, hablemos.
            </p>
          </div>
          <div className="about-me-view__info">
            <Panel className="about-me-view__info-item" screwOffset="sm" hasElevation>
              <LocationIcon className="about-me-view__info-icon" />
              <div>
                <p className="about-me-view__info-label">Ubicación</p>
                <p className="about-me-view__info-value">Buenos Aires, Argentina</p>
              </div>
            </Panel>
            <Panel className="about-me-view__info-item" screwOffset="sm" hasElevation>
              <EducationIcon className="about-me-view__info-icon" />
              <div>
                <p className="about-me-view__info-label">Educación</p>
                <p className="about-me-view__info-value">Lic. en Gestión de la Tecnología</p>
              </div>
            </Panel>
          </div>
        </div>
      </WindowCard>
  );
};