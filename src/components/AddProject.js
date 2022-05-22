// import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useState, useEffect } from "react";
import { useProjects } from "../hooks";

export const AddProject = ({ shouldShow = false, userAuth }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");
  const { refetch: projectUpdater } = useProjects(userAuth);

  const projectId = generatePushId();

  const handleClick = () => {
    projectUpdater();
  };

  const addProject = async () => {
    let token = sessionStorage.getItem("authtoken");
    const res = await fetch(
      "https://heroku-lama-api.herokuapp.com/api/projects",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: `${token}`,
        },
        body: JSON.stringify({
          projectId,
          name: "🦙 " + projectName,
          userId: userAuth,
          collabIdOne: "",
          collabIdTwo: "",
          collabIdThree: "",
          collabIdFour: "",
        }),
      }
    );
    if (res.status === 400 || !res) {
      window.alert("Project Name already Exists!");
    } else {
      setShow(false);
      projectUpdater();
    }
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your 🦙 project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => {
              addProject();
              handleClick();
            }}
            data-testid="add-project-submit"
          >
            Add LaMa Project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
          >
            Cancel
          </span>
        </div>
      )}
      <span
        className="add-project__plus"
        data-testid="add-project-action-+"
        onClick={() => setShow(!show)}
      >
        +
      </span>
      <span
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  );
};
