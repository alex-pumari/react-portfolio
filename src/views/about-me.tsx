import React from 'react';
import { WindowCard } from '../components/window-card/window-card.js';
import './views.scss';

export const AboutMe: React.FC = () => {
  const techStack = [
    'React', 'Typescript', 'Javascript', 'Node.js', 
    'Express.js', 'Sql server', 'Tailwind css', 'Sass', 'Indexeddb'
  ];

  return (
    <div className="view-about animate-fade-in">
      <div className="view-about__grid">
        {/* Columna Perfil */}
        <WindowCard title="Profile_data.txt">
          <div className="profile-section">
            <p className="profile-section__bio">
              Desarrollador Full Stack y Técnico en Análisis, Desarrollo y Programación de Aplicaciones. 
              Especializado en la construcción de interfaces web de alto rendimiento, optimización de 
              lógicas de renderizado de componentes y diseño de arquitecturas de bases de datos relacionales y persistencia local.
            </p>
            
            <h3 className="profile-section__title">Formación académica</h3>
            <div className="education-log">
              <div className="education-log__item">
                <span className="education-log__date">[2023 - 2025]</span>
                <p className="education-log__text">
                  Técnico en Análisis y Desarrollo de Software - I.S.F.D.yT. N°46
                </p>
              </div>
            </div>
          </div>
        </WindowCard>

        {/* Columna Tecnologías */}
        <WindowCard title="Tech_stack.log">
          <div className="skills-section">
            <p className="skills-section__info">Sistemas y lenguajes indexados en el núcleo del sistema:</p>
            <ul className="skills-list">
              {techStack.map((tech, index) => (
                <li key={index} className="skills-list__item">
                  <span className="skills-list__bullet">■</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </WindowCard>
      </div>
    </div>
  );
};