import { useSelectedProjectValue, useUserContextValue } from "../context";
import { useState } from "react";
import { IndividualCollabProject } from "./IndividualCollabProject";
import { useCollabProjects, useTasks } from "../hooks";

export const CollabProjects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject, selectedProject } = useSelectedProjectValue();
  const { userAuth } = useUserContextValue();

  const {
    refetch: projectUpdater,
    data: projects,
    isLoading,
  } = useCollabProjects(userAuth);
  const { refetch: taskUpdater } = useTasks(selectedProject);

  const handleClick = () => {
    taskUpdater();
    projectUpdater();
  };
  if (!isLoading) {
    return (
      projects &&
      projects.data.map((project) => (
        <li
          key={project.projectId}
          data-doc-id={project.docId}
          data-testid="project-action"
          className={
            active === project.projectId
              ? "active sidebar__project"
              : "sidebar__project"
          }
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
            handleClick();
          }}
        >
          <IndividualCollabProject project={project} />
        </li>
      ))
    );
  } else {
    return (
      <li>
        <h2>Loading...</h2>
      </li>
    );
  }
};
