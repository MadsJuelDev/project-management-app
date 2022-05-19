import { useState } from "react";
import { useSelectedProjectValue, useUserContextValue } from "../context";
import { useAllProjects, updateProjectCollabList } from "../hooks";

export const AddCollab = ({ setShowCollabers }) => {
  const { selectedProject } = useSelectedProjectValue();
  const { userAuth } = useUserContextValue();
  const { data: Projects } = useAllProjects(userAuth);

  const [formAction, setFormAction] = useState("");
  const [id, setId] = useState("");

  let filteredProjects = Projects?.data.filter((collab) => {
    return collab.projectId === selectedProject;
  });

  function handleUpdateSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      updateProjectCollabList(
        id,
        event.target.elements.collabIdOne.value,
        event.target.elements.collabIdTwo.value,
        event.target.elements.collabIdThree.value,
        event.target.elements.collabIdFour.value
      );
      setShowCollabers(false);
    }
  }

  return (
    <li key="iAmUniqueCollabKey">
      <div className="collab__overlay" data-testid="add-task-comp">
        {filteredProjects?.map((collab) => (
          <div className="collab__main">
            <h2>Collaborator Menu</h2>

            <form onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdOne}
                name="collabIdOne"
              />
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdTwo}
                name="collabIdTwo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdThree}
                name="collabIdThree"
              />
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdFour}
                name="collabIdFour"
              />
            </form>
            {userAuth == collab.userId && (
              <button
                onClick={() => {
                  setShowCollabers(false);
                  setId(`${collab.id}`);
                  setFormAction("save");
                }}
                type="submit"
              >
                submit
              </button>
            )}
            <button onClick={() => setShowCollabers(false)} type="button">
              cancel
            </button>
          </div>
        ))}
      </div>
    </li>
  );
};
