import React, { useEffect, useState } from "react";
import {
  useTasks,
  useAllTasks,
  useNextSevenTasks,
  useTodayTasks,
} from "../hooks";
import { CheckBox } from "./CheckBox";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExists } from "../helpers";
import { useSelectedProjectValue } from "../context";
import { AddTask } from "./AddTask";
import { useProjects } from "../hooks";

export const Tasks = (props) => {
  const { data: projects } = useProjects();
  const { selectedProject } = useSelectedProjectValue();
  let projectName = "";

  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    projectName = getTitle(projects.data, selectedProject).name;
  }
  if (collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }
  const { status, moveTask } = props;

  // const { projects } = useProjectsValue();
  const { data: tasks, isLoading } = useTasks(selectedProject);
  const { data: allTasks } = useAllTasks();
  const { data: nextSevenTasks } = useNextSevenTasks();
  const { data: todayTasks } = useTodayTasks();

  useEffect(() => {
    document.title = `${projectName}: LaMa Project`;
  }),
    [];
  if (!isLoading) {
    if (selectedProject == "INBOX") {
      return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name"> {projectName} </h2>
          <ul className="tasks__list">
            {allTasks?.map((task) => (
              <li key={`${task.id}`}>
                <CheckBox id={task.id} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>

          <AddTask />
        </div>
      );
    }
    if (selectedProject == "TODAY") {
      return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name"> {projectName} </h2>

          <ul className="tasks__list">
            {todayTasks?.map((task) => (
              <li key={`${task.id}`}>
                <CheckBox id={task.id} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>

          <AddTask />
        </div>
      );
    }
    if (selectedProject == "NEXT_7") {
      return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name"> {projectName} </h2>

          <ul className="tasks__list">
            {nextSevenTasks?.map((task) => (
              <li key={`${task.id}`}>
                <CheckBox id={task.id} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>

          <AddTask />
        </div>
      );
    } else {
      return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name"> {projectName} </h2>

          <ul className="tasks__list">
            {tasks?.map((task) => (
              <li key={`${task.id}`}>
                <CheckBox id={task.id} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>

          <AddTask />
        </div>
      );
    }
  } else {
    return (
      <div className="tasks" data-testid="tasks">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <h2 data-testid="project-name"> Loading.. </h2>
      </div>
    );
  }
};
