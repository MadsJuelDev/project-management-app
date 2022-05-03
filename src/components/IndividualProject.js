import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import firebase from "firebase/compat/app";
import axios from "axios";

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (id) => {
    // firebase
    //   .firestore()
    //   .collection("Projects")
    //   .doc(docId)
    //   .delete()
    axios.delete("api/projects/" + project.id).then(() => {
      setProjects([...projects]);
      setSelectedProject("INBOX");
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
