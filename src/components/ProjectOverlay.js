// import { useProjectsValue } from "../context";
import { useProjects } from "../hooks";

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { data: projects } = useProjects();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay-holder">
        <ul className="project-overlay__list">
          {projects.data.map((project) => (
            <li
              key={project.projectId}
              data-testid="project-overlay-action"
              onClick={() => {
                setProject(project.projectId);
                setShowProjectOverlay(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
