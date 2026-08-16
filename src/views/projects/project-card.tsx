import type { FC } from "react";
import type { Project } from "./project.js";
import { WindowCard } from "../../components/window-card/window-card.js";
import { Button } from "../../components/button/button.js";
import "./project-card.scss";

interface ProjectCardProps {
  project: Project;
  isExpanded?: boolean;
  onToggleExpand: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, isExpanded = false, onToggleExpand }) => {
  const hasDemoUrl = !!project.demoUrl;

  return (
    <WindowCard
      title={project.title}
      footerActions={
        <div className="project-card__actions">
          <Button
            size="sm"
            variant="outline"
            onClick={onToggleExpand}
          >
            {isExpanded ? "VER MENOS" : "VER MÁS"}
          </Button>
          {project.isPublic && <Button variant="outline" size="sm">VER CÓDIGO</Button>}
          {hasDemoUrl && <Button onClick={() => window.open(project.demoUrl, "_blank")} variant="primary" size="sm">VER DEMO</Button>}
        </div>
      }
    >
      <div className="project-card__content">
        <p className="project-card__description">{project.description}</p>
        {isExpanded && project.responsibilities && (
          <>
            <p>Durante el proyecto, mis aportes fueron: </p>
            <ul className="project-card__responsibilities">
              {project.responsibilities.map((responsibility, idx) => (
                <li key={idx}>■ {responsibility}</li>
              ))}
            </ul>
          </>
        )}
        {isExpanded && project.learnings && (
          <>
            <p>Algunas de las habilidades que desarrollé fueron:: </p>
            <ul className="project-card__learnings">
              {project.learnings.map((learning, idx) => (
                <li key={idx}>■ {learning}</li>
              ))}
            </ul>
          </>
        )}
        <div className="project-card__tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="project-card__tag-chip">
              [{tag}]
            </span>
          ))}
        </div>
      </div>
    </WindowCard>
  );
};