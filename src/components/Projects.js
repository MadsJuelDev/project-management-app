import { useProjectsValue, useSelectedProjectValue } from "../context";
import { useState } from "react";
import { IndividualProject } from "./IndividualProject";
import { useProjects, useTasks } from "../hooks";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject, selectedProject } = useSelectedProjectValue();

  const { data: projects, isLoading } = useProjects();
  const { refetch: taskupdater } = useTasks(selectedProject);

  const handleClick = () => {
    taskupdater();
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
            handleClick;
          }}
        >
          <IndividualProject project={project} />
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
