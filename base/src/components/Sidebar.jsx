import { Link } from "react-router-dom";

import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <h1>TaskFlow</h1>
        <input type="text" placeholder="Search task" />
      </div>

      <div className="nav_links">
        <div className="nav_link">
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>
        <div className="nav_link">
          <span>
            <Link to="/tasks">Tasks</Link>
          </span>
        </div>
        <div className="nav_link">
          <span>
            <Link to="/docs">Docs</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
