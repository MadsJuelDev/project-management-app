import { useState } from "react";
import { useUserContextValue } from "../context/user-context";

import { updateProjectCollabList } from "../hooks";

export const AddCollab = ({ setShowCollabers, collab }) => {
  const [formAction, setFormAction] = useState("");
  const { userAuth } = useUserContextValue();

  function handleUpdateSubmit(event) {
    event.preventDefault();
    if (formAction === "save") {
      updateProjectCollabList(
        collab.id,
        event.target.elements.collabIdOne.value,
        event.target.elements.collabIdTwo.value,
        event.target.elements.collabIdThree.value,
        event.target.elements.collabIdFour.value
      );
      console.log(event.target.elements.collabIdTwo.value);
      setShowCollabers(false);
    }
  }

  return (
    <li key={`${collab.id}`} className="collab__overlay">
      <div className="collab collab__main" data-testid="add-task-comp">
        <div>
          <h2>Collaborator Menu</h2>

          <form onSubmit={handleUpdateSubmit}>
            <div className="collab__input">
              <label>🦙 Collaborator #1</label>
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdOne}
                name="collabIdOne"
              />
            </div>
            <div className="collab__input">
              <label>🦙 Collaborator #2</label>
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdTwo}
                name="collabIdTwo"
              />
            </div>
            <div className="collab__input">
              <label>🦙 Collaborator #3</label>
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdThree}
                name="collabIdThree"
              />
            </div>
            <div className="collab__input">
              <label>🦙 Collaborator #4</label>
              <input
                type="text"
                placeholder="Enter Username"
                defaultValue={collab.collabIdFour}
                name="collabIdFour"
              />
            </div>
            <div className="collab__add">
              {collab.userId === userAuth && (
                <button
                  onClick={() => {
                    setFormAction("save");
                  }}
                >
                  Update Collaborators
                </button>
              )}
              <span
                className="add-project__cancel"
                onClick={() => setShowCollabers(false)}
              >
                Cancel
              </span>
            </div>
          </form>
        </div>
      </div>
    </li>
  );
};
