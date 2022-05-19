import React, { useEffect, useState } from "react";
import {
  useTasks,
  useAllTasks,
  useNextSevenTasks,
  useTodayTasks,
} from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExists } from "../helpers";
import { useSelectedProjectValue, useUserContextValue } from "../context";
import { AddTask } from "./AddTask";
import { useProjects, useCollabProjects } from "../hooks";
import { IndividualTask } from "./IndividualTask";

export const Tasks = ({ status }) => {
  const { userAuth } = useUserContextValue();
  const { data: projects } = useProjects(userAuth);
  const { data: collabProjects } = useCollabProjects(userAuth);
  const { selectedProject } = useSelectedProjectValue();

  let projectName = "";

  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    try {
      projectName = getTitle(projects.data, selectedProject)?.name;
      if (!projectName) {
        projectName = getTitle(collabProjects.data, selectedProject)?.name;
      }
    } catch (error) {
      projectName = "INBOX";
    }
    // projectName = getTitle(projects.data, selectedProject)?.name;
  }
  if (collatedTasksExists(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  // const { projects } = useProjectsValue();
  const { data: tasks, isLoading } = useTasks(selectedProject, userAuth);
  const { data: allTasks } = useAllTasks(userAuth);
  const { data: nextSevenTasks } = useNextSevenTasks(userAuth);
  const { data: todayTasks } = useTodayTasks(userAuth);
  // starting movable by status here

  let tasksForStatus = tasks?.filter((task) => {
    return task.status === status;
  });
  let allTasksForStatus = allTasks?.filter((task) => {
    return task.status === status;
  });
  let nextSevenTasksForStatus = nextSevenTasks?.filter((task) => {
    return task.status === status;
  });
  let todayTasksForStatus = todayTasks?.filter((task) => {
    return task.status === status;
  });

  useEffect(() => {
    document.title = `${projectName}: LaMa Project`;
  }),
    [];
  if (!isLoading) {
    if (selectedProject == "INBOX") {
      return (
        <>
          <h2 data-testid="project-name">{status}</h2>
          <ul className="tasks__list">
            {allTasksForStatus?.map((task) => (
              <IndividualTask key={task.id} task={task} status={status} />
            ))}
          </ul>

          <AddTask status={status} />
        </>
      );
    }
    if (selectedProject == "TODAY") {
      return (
        <>
          <h2 data-testid="project-name"> {status} </h2>

          <ul className="tasks__list">
            {todayTasksForStatus?.map((task) => (
              <IndividualTask key={task.id} task={task} status={status} />
            ))}
          </ul>

          <AddTask status={status} />
        </>
      );
    }
    if (selectedProject == "NEXT_7") {
      return (
        <>
          <h2 data-testid="project-name"> {status} </h2>

          <ul className="tasks__list">
            {nextSevenTasksForStatus?.map((task) => (
              <IndividualTask key={task.id} task={task} status={status} />
            ))}
          </ul>

          <AddTask status={status} />
        </>
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
