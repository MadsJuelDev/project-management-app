import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteProject = (id) => {
    axios.delete("api/projects/" + project.id).then(() => {
      console.log("Project has been deleted.");
    });
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Wanna Delete this Lama Project?</p>
              <button type="button" onClick={() => deleteProject(project.id)}>
                Kill Lama
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
