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
import { IndividualTask } from "./IndividualTask";

export const Tasks = ({ status }) => {
  const { data: projects } = useProjects();
  const { selectedProject } = useSelectedProjectValue();
  let projectName = "";

  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    projectName = getTitle(projects.data, selectedProject).name;
  }
  if (collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  // const { projects } = useProjectsValue();
  const { data: tasks, isLoading } = useTasks(selectedProject);
  const { data: allTasks } = useAllTasks();
  const { data: nextSevenTasks } = useNextSevenTasks();
  const { data: todayTasks } = useTodayTasks();
  // starting movable by status here

  let tasksForStatus = tasks?.filter((task) => {
    return task.status === status;
  });

  useEffect(() => {
    document.title = `${projectName}: LaMa Project`;
  }),
    [];
  if (!isLoading) {
    if (selectedProject == "INBOX") {
      return (
        <div className="tasks" data-testid="tasks">
          <h2 data-testid="project-name">{projectName}</h2>
          <ul className="tasks__list">
            {allTasks?.map((task) => (
              <li key={`${task.id}`}>
                <CheckBox id={task.id} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>

          <AddTask status={status} />
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

          <AddTask status={status} />
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

          <AddTask status={status} />
        </div>
      );
    } else {
      return (
        <>
          <h2>{status}</h2>
          <ul className="tasks__list">
            {tasksForStatus?.map((task) => (
              <IndividualTask key={task.id} task={task} status={status} />
            ))}
          </ul>
          <AddTask status={status} />
        </>
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
