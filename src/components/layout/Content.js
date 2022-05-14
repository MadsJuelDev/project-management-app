import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";
import { useEffect, useState } from "react";
import { collatedTasks } from "../../constants";
import { getTitle, collatedTasksExists } from "../../helpers";
import { useSelectedProjectValue } from "../../context";
import { useProjects } from "../../hooks";

export const Content = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { data: projects } = useProjects();
  let projectName = selectedProject;
  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    projectName = getTitle(projects.data, selectedProject).name;
  }

  useEffect(() => {
    console.log("using effect");
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
