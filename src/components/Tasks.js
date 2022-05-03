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
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { AddTask } from "./AddTask";
import moment from "moment";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  const { allTasks } = useAllTasks();
  const { nextSevenTasks } = useNextSevenTasks();
  const { todayTasks } = useTodayTasks();

  let projectName = "";

  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }
  if (collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  // inboxTasks = tasks.find((task) => (task.date = currentDate));
  // console.log(inboxTasks);

  // console.log(
  //   "date filter",
  //   tasks.find((task) => (task.date = currentDate))
  // );

  useEffect(() => {
    document.title = `${projectName}: LaMa Project`;
  }),
    [];
  if (selectedProject == "INBOX") {
    return (
      <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name"> {projectName} </h2>

        <ul className="tasks__list">
          {allTasks.map((task) => (
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
          {todayTasks.map((task) => (
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
          {nextSevenTasks.map((task) => (
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
          {tasks.map((task) => (
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
};
