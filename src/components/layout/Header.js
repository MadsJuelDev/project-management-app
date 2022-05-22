import { GiBatMask } from "react-icons/gi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useState } from "react";
import { AddTask } from "../AddTask";
import { useUserContextValue } from "../../context";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { setUserAuth } = useUserContextValue();

  const onLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setUserAuth(null);
  };

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
              title="Quick Add Task"
            >
              +
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              data-testid="dark-mode-action"
              className="settings__darkmode"
              title="Darkmode? (Batman)"
            >
              <GiBatMask data-testid="batman-svg" />
            </li>
            <li
              onClick={() => onLogout()}
              className="settings__darkmode"
              style={{ marginLeft: "15px" }}
              title="Logout"
            >
              <RiLogoutBoxRFill data-testid="logout-svg" />
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
