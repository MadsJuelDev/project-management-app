import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";
import { useEffect, useState } from "react";
import { collatedTasks } from "../../constants";
import { getTitle, collatedTasksExists } from "../../helpers";
import { useSelectedProjectValue, useUserContextValue } from "../../context";
import { useProjects, useCollabProjects, useAllProjects } from "../../hooks";
import { IoPersonAddSharp } from "react-icons/io5";
import { AddProject } from "../AddProject";
import { AddCollab } from "../AddCollab";

export const Content = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { userAuth, setUserAuth } = useUserContextValue();
  const { data: projects } = useProjects(userAuth);
  const { data: collabProjects } = useCollabProjects(userAuth);
  const { data: allProjects } = useAllProjects(userAuth);
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

  let filteredProjects = allProjects?.data.filter((collab) => {
    return collab.projectId === selectedProject;
  });

  const nextSeven = "Next 7 Days";
  const today = "Today";
  const inbox = "Inbox";

  let handleClick = () => {
    refetch();
  };

  useEffect(() => {
    console.log("using effect");
    setUserAuth(savedUser);
  }, []);

  if (projectName == "INBOX") {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <h2
            className="task__h2__bottom"
            style={{ fontSize: "40px" }}
            data-testid="project-name"
          >
            {inbox}
          </h2>
          <hr className="task__hr" />
          <div className="task__padding">
            <Tasks status="To Do" />
            <Tasks status="Doing" />
            <Tasks status="Done" />
          </div>
        </div>
      </section>
    );
  }
  if (projectName == "TODAY") {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <h2
            className="task__h2__bottom"
            style={{ fontSize: "40px" }}
            data-testid="project-name"
          >
            {today}
          </h2>
          <hr className="task__hr" />
          <div className="task__padding">
            <Tasks status="To Do" />
            <Tasks status="Doing" />
            <Tasks status="Done" />
          </div>
        </div>
      </section>
    );
  }
  if (projectName == "NEXT_7") {
    return (
      <section className="content">
        <Sidebar />
        <div className="tasks" data-testid="tasks">
          <h2
            className="task__h2__bottom"
            style={{ fontSize: "40px" }}
            data-testid="project-name"
          >
            {nextSeven}
          </h2>
          <hr className="task__hr" />
          <div className="task__padding">
            <Tasks status="To Do" />
            <Tasks status="Doing" />
            <Tasks status="Done" />
          </div>
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
            {showCollabers &&
              filteredProjects?.map((collab) => (
                <AddCollab
                  key={collab.id}
                  collab={collab}
                  setShowCollabers={setShowCollabers}
                />
              ))}
          </div>
          <hr className="task__hr" />
          <div className="task__padding">
            <Tasks status="To Do" />
            <Tasks status="Doing" />
            <Tasks status="Done" />
          </div>
        </div>
      </section>
    );
  }
};
