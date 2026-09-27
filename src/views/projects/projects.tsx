import type { FC } from "react";
import { useEffect, useState } from "react";
import { projectsList } from "./projects-list.js";
import { ProjectCard } from "./project-card.js";
import "./projects.scss";

export const Projects: FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const expandedProject = projectsList.find(project => project.id === expandedProjectId);
  const collapsedProjects = projectsList.filter(project => project.id !== expandedProjectId);

  useEffect(() => {
    if (!expandedProjectId) return;

    document.getElementById("viewport")!.scrollTo(0, 0);
  }, [expandedProjectId]);

  return (
    <div className="projects-view">
      {expandedProject && (
        <ProjectCard
          project={expandedProject} 
          onToggleExpand={() => setExpandedProjectId(null)} 
          isExpanded
        />
      )}
      <div className="projects-view__grid">
        {collapsedProjects.map((currentProject) => {
          return (
            <ProjectCard
              key={currentProject.id}
              project={currentProject}
              onToggleExpand={() => setExpandedProjectId(currentProject.id)}
            />
          );
        })}
      </div>
    </div>
  );
};