import React from 'react';
import { WindowCard } from '../components/window-card/window-card.js';
import { Button } from '../components/button/button.js';
import './views.scss';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
}

export const Projects: React.FC = () => {
  const customProjects: ProjectItem[] = [
    {
      id: '01',
      title: 'Sf calistenia',
      description: 'Clon web de un sitio de calistenia y entrenamiento físico desarrollado utilizando HTML estructurado, preprocesamiento avanzado con Sass/Scss y arquitectura modular mediante la metodología Bem.',
      tags: ['Html', 'Scss', 'Bem']
    },
    {
      id: '02',
      title: 'Movie api explorer',
      description: 'Explorador dinámico de contenido cinematográfico que consume datos de TheMovieDB api. Implementa optimizaciones críticas de rendimiento como debounce en barras de búsqueda, transiciones fluidas con Particles.js y manejo modular de estados.',
      tags: ['React', 'Scss', 'Themoviedb api', 'Particles.js']
    }
  ];

  return (
    <div className="view-projects animate-fade-in">
      <h2 className="view-projects__title">Directory: /var/www/projects/</h2>
      
      <div className="projects-grid">
        {customProjects.map((project) => (
          <WindowCard 
            key={project.id} 
            title={`Project_id_${project.id}.bin`}
            footerActions={
              <Button variant="outline" size="sm">Execute_src.exe</Button>
            }
          >
            <div className="project-card">
              <h3 className="project-card__name">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              
              <div className="project-card__tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">[{tag}]</span>
                ))}
              </div>
            </div>
          </WindowCard>
        ))}
      </div>
    </div>
  );
};