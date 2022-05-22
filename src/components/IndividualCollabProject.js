import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCollabProjects } from "../hooks";
import { useUserContextValue } from "../context";

export const IndividualCollabProject = ({ project }) => {
  const { userAuth } = useUserContextValue();
  const { refetch: projectUpdater } = useCollabProjects(userAuth);

  const handleClick = () => {
    projectUpdater();
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span
        data-testid="specific-project-name"
        className="sidebar__project-name"
        onClick={() => handleClick()}
      >
        {project.name}
      </span>
    </>
  );
};
