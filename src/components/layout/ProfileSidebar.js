import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiSettingsFill } from "react-icons/ri";
import { Projects } from "../Projects";

export const ProfileSidebar = () => {
  const [active, setActive] = useState("inbox");
  const [showAssets, setShowAssets] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="settings"
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
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
