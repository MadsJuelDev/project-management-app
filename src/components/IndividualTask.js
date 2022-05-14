import { CheckBox } from "./CheckBox";
import { useState } from "react";
import { moveTask, updateCollapsed, updateTask } from "../hooks";

export const IndividualTask = (props) => {
  // imported Props
  const { status, task } = props;
  // Creating and Setting State
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
    <li key={`${task.id}`}>
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
          />
          <textarea
            rows="2"
            className="description input"
            name="description"
            placeholder="Enter Description"
            defaultValue={task.description}
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
              />
              high
            </label>
          </div>
          <button
            onClick={() => {
              setFormAction("save");
            }}
            className="button"
          >
            {collapsed ? "Edit" : "Save"}
          </button>
        </form>
        <button onClick={handleMoveUp} className="button moveTask">
          &uarr;
        </button>
        <button onClick={handleMoveDown} className="button moveTask">
          &darr;
        </button>
      </div>
    </li>
  );
};
