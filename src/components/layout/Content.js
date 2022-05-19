import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";
import { useEffect, useState } from "react";
import { collatedTasks } from "../../constants";
import { getTitle, collatedTasksExists } from "../../helpers";
import { useSelectedProjectValue, useUserContextValue } from "../../context";
import { useProjects, useCollabProjects } from "../../hooks";
import { IoPersonAddSharp } from "react-icons/io5";
import { AddProject } from "../AddProject";
import { AddCollab } from "../AddCollab";

export const Content = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { userAuth, setUserAuth } = useUserContextValue();
  const { data: projects } = useProjects(userAuth);
  const { data: collabProjects } = useCollabProjects(userAuth);
  const [showCollabers, setShowCollabers] = useState(false);

  let savedUser = localStorage.getItem("username");
  let projectName = selectedProject;
  if (projects && selectedProject && !collatedTasksExists(selectedProject)) {
    try {
      projectName = getTitle(projects.data, selectedProject)?.name;
      if (!projectName) {
        projectName = getTitle(collabProjects.data, selectedProject)?.name;
      }
    } catch (error) {
      projectName = "INBOX";
    }
  }

  const nextSeven = "Next 7 Days";
  const today = "Today";
  const inbox = "Inbox";

  useEffect(() => {
    console.log("using effect");
    setUserAuth(savedUser);
  }, []);

  if (projectName == "INBOX") {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <h2 style={{ fontSize: 40 }} data-testid="project-name">
            {inbox}
          </h2>
          <Tasks status="To Do" />
          <Tasks status="Doing" />
          <Tasks status="Done" />
        </div>
      </section>
    );
  }
  if (projectName == "TODAY") {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <h2 style={{ fontSize: 40 }} data-testid="project-name">
            {today}
          </h2>
          <Tasks status="To Do" />
          <Tasks status="Doing" />
          <Tasks status="Done" />
        </div>
      </section>
    );
  }
  if (projectName == "NEXT_7") {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <h2 style={{ fontSize: 40 }} data-testid="project-name">
            {nextSeven}
          </h2>
          <Tasks status="To Do" />
          <Tasks status="Doing" />
          <Tasks status="Done" />
        </div>
      </section>
    );
  } else {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <div className="taskstop">
            <h2 style={{ fontSize: 40 }} data-testid="project-name">
              {projectName}
            </h2>
            <IoPersonAddSharp
              onClick={() => {
                setShowCollabers(!showCollabers);
              }}
            />
            {showCollabers && (
              <AddCollab
                key="iAmUniqueCollabKey"
                setShowCollabers={setShowCollabers}
              />
            )}
          </div>
          <Tasks status="To Do" />
          <Tasks status="Doing" />
          <Tasks status="Done" />
        </div>
      </section>
    );
  }
};
