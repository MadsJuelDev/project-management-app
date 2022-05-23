import { CheckBox } from "./CheckBox";
import { useState } from "react";
import { moveTask, updateCollapsed, updateTask } from "../hooks";

export const IndividualTask = (props) => {
  const { task } = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setUrgency(event) {
    setUrgencyLevel(event.target.attributes.urgency.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        updateCollapsed(task.id);
        setCollapsed(false);
      } else {
        updateTask(
          task.id,
          event.target.elements.title.value,
          event.target.elements.description.value,
          urgencyLevel,
          task.status
        );
        setCollapsed(true);
      }
    }
  }

  function handleMoveUp() {
    let newStatus = "";

    if (task.status === "Doing") {
      newStatus = "To Do";
    } else if (task.status === "Done") {
      newStatus = "Doing";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveDown() {
    let newStatus = "";

    if (task.status === "To Do") {
      newStatus = "Doing";
    } else if (task.status === "Doing") {
      newStatus = "Done";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  return (
    <li key={`${task.id}`} data-testid="task-comp-li">
      <CheckBox id={task.id} />
      <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
        <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
          <input
            type="text"
            className="title input"
            name="title"
            placeholder="Enter Title"
            disabled={collapsed}
            defaultValue={task.task}
            data-testid="task-title-input"
          />
          <textarea
            rows="2"
            className="description input"
            name="description"
            placeholder="Enter Description"
            defaultValue={task.description}
            data-testid="task-desc-textarea"
          />
          <div className="urgencyLabels">
            <label
              className={`low ${urgencyLevel === "low" ? "selected" : ""}`}
            >
              <input
                urgency="low"
                onChange={setUrgency}
                type="radio"
                name="urgency"
                data-testid="low-urgency-toggle"
              />
              low
            </label>
            <label
              className={`medium ${
                urgencyLevel === "medium" ? "selected" : ""
              }`}
            >
              <input
                urgency="medium"
                onChange={setUrgency}
                type="radio"
                name="urgency"
                data-testid="medium-urgency-toggle"
              />
              medium
            </label>
            <label
              className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
            >
              <input
                urgency="high"
                onChange={setUrgency}
                type="radio"
                name="urgency"
                data-testid="high-urgency-toggle"
              />
              high
            </label>
          </div>
          <button
            onClick={() => {
              setFormAction("save");
            }}
            className="button"
            data-testid="save-task-button"
          >
            {collapsed ? "Edit" : "Save"}
          </button>
        </form>
        <button
          data-testid="move-task-up"
          onClick={handleMoveUp}
          className="button moveTask"
        >
          &uarr;
        </button>
        <button
          data-testid="move-task-down"
          onClick={handleMoveDown}
          className="button moveTask"
        >
          &darr;
        </button>
      </div>
    </li>
  );
};
