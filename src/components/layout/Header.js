import { FaPoo } from "react-icons/fa";
import { useState } from "react";
import { AddTask } from "../AddTask";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="../images/logo.png" alt="LaMa"></img>
        </div>
        <div className="settings">
          <ul>
            <li
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
              data-testid="quick-add-task-action"
              className="settings__add"
            >
              +
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              data-testid="dark-mode-action"
              className="settings__darkmode"
            >
              <FaPoo />
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
