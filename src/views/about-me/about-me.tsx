import React from 'react';
import { WindowCard } from '../../components/window-card/window-card.js';
import { LocationIcon } from '../../components/icons/location-icon.js';
import { EducationIcon } from '../../components/icons/education-icon.js';
import './about-me.scss';

export const AboutMe: React.FC = () => {
  return (
      <WindowCard title="SOBRE_MI.INF" className="about-me-view">
        <div className="about-me-view__content">
          <div className="about-me-view__bio">
            <p>
              Mi interés por la programación empezó en la secundaria y fue creciendo de forma natural con el tiempo. Empecé programando de manera autodidacta, mirando videos y tutoriales en YouTube, hasta que decidí formarme de manera formal y orientar mi camino hacia el perfil full stack.
            </p>
            <p>
              Hoy sigo manteniendo esa misma curiosidad, tanto para aprender cosas nuevas como para compartir lo que voy aprendiendo en mi canal de YouTube, donde creo contenido sobre programación.
            </p>
          </div>
          <div className="about-me-view__info">
            <div className="about-me-view__info-item">
              <LocationIcon className="about-me-view__info-icon" />
              <div>
                <p className="about-me-view__info-label">Ubicación</p>
                <p className="about-me-view__info-value">Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="about-me-view__info-item">
              <EducationIcon className="about-me-view__info-icon" />
              <div>
                <p className="about-me-view__info-label">Educación</p>
                <p className="about-me-view__info-value">Lic. en Gestión de la Tecnología</p>
              </div>
            </div>
          </div>
        </div>
      </WindowCard>
  );
};