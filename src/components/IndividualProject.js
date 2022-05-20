import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useProjects } from "../hooks";
import { useUserContextValue } from "../context";

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { userAuth } = useUserContextValue();
  const { refetch: projectUpdater } = useProjects(userAuth);

  const deleteProject = async () => {
    let token = sessionStorage.getItem("authtoken");
    console.log(token);
    await axios
      .delete(
        "https://heroku-lama-api.herokuapp.com/api/projects/" + project.id,
        {
          headers: { authtoken: `${token}` },
        }
      )
      .then(() => {
        console.log("Project has been deleted.");
        // using deafult (false), if set to true a SERVER side refresh is used
        window.location.reload(false);
      });
  };

  const handleClick = () => {
    projectUpdater();
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
              <button
                type="button"
                onClick={() => {
                  deleteProject(project.id);
                  handleClick();
                }}
              >
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
