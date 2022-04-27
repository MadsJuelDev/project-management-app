import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";
import { useState } from "react";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection("Projects")
      .add({
        projectId,
        name: "🦙 " + projectName,
        userId: "1234abc",
      })
      .then(() => {
        setProjects([]);
        setProjectName("");
        setShow(false);
      });

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
            onClick={() => addProject()}
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
        data-testid="add-project-action"
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
