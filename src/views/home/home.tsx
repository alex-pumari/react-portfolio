import type { FC } from "react";
import { Panel } from "../../components/panel/panel.js";
import { Button } from "../../components/button/button.js";
import { WindowCard } from "../../components/window-card/window-card.js";
import profileImgPath from "../../assets/images/profile.webp";
import "./home.scss";

export const Home: FC = () => {
  return (
    <WindowCard title="INICIO.EXE" className="home-view" isDraggable>
      <div className="home-view__content">
        <div className="home-view__info">
          <h1 className="home-view__title">ALEX PUMARI DIAZ</h1>
          <p className="home-view__subtitle">ANALISTA DE SISTEMAS & DESARROLLADOR FULL STACK</p>
          <p className="home-view__description">
            Creo que el buen software nace de la simplicidad. Por eso diseño y desarrollo soluciones pensadas para ser rápidas, escalables y fáciles de mantener.
          </p>
          <div className="home-view__actions">
            <Button variant="primary" size="lg">VER PROYECTOS</Button>
            <Button variant="outline" size="lg">CONTACTAME</Button>
          </div>
        </div>
        <Panel className="home-view__image-container" hasElevation>
          <img className="home-view__image" src={profileImgPath} alt="Foto de perfil" />
        </Panel>
      </div>
    </WindowCard>
  );
};