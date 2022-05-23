// import { useProjectsValue } from "../context";
import { useUserContextValue } from "../context";
import { useProjects } from "../hooks";

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { userAuth } = useUserContextValue();
  const { data: projects } = useProjects(userAuth);

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay-holder">
        <ul className="project-overlay__list">
          {projects?.data.map((project) => (
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
