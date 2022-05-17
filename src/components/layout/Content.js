import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";
import { useEffect, useState } from "react";
import { collatedTasks } from "../../constants";
import { getTitle, collatedTasksExists } from "../../helpers";
import { useSelectedProjectValue, useUserContextValue } from "../../context";
import { useProjects } from "../../hooks";

export const Content = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { userAuth, setUserAuth } = useUserContextValue();
  const { data: projects } = useProjects(userAuth);
  let savedUser = localStorage.getItem("username");
  let projectName = selectedProject;
  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    try {
      projectName = getTitle(projects.data, selectedProject)?.name;
    } catch (error) {
      projectName = "INBOX";
    }
  }
  useEffect(() => {
    console.log("using effect");
    setUserAuth(savedUser);
  }, []);

  return (
    <section className="content">
      <Sidebar />
      <div className="tasks" data-testid="tasks">
        <h2 style={{ fontSize: 40 }} data-testid="project-name">
          {projectName}
        </h2>
        <Tasks status="To Do" />
        <Tasks status="Doing" />
        <Tasks status="Done" />
      </div>
    </section>
  );
};
