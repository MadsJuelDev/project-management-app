import React, { useEffect, useState } from "react";
import { useTasks } from "../hooks";
import { CheckBox } from "./CheckBox";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExists } from "../helpers";
import { useSelectedProjectValue, useProjectsValue } from "../context";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }
  if (collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: LaMa Project`;
  }),
    [];

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name"> {projectName} </h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <CheckBox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
