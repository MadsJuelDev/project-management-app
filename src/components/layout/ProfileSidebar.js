import { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { RiSettingsFill } from "react-icons/ri";
import { Projects } from "../Projects";
import { CollabProjects } from "../CollabProjects";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { useUserContextValue } from "../../context";

export const ProfileSidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showAssets, setShowAssets] = useState(true);
  const [showCollabProjects, setShowCollabProjects] = useState(true);
  const { userAuth } = useUserContextValue();

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="settings"
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            // setSelectedProject("INBOX");
          }}
        >
          <span>
            <RiSettingsFill />
          </span>
          <span>Settings</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowAssets(!showAssets)}
      >
        <span>
          <FaChevronDown
            className={!showAssets ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Assets</h2>
      </div>
      <ul className="sidebar__projects">{showAssets && <Projects />}</ul>
    </div>
  );
};
