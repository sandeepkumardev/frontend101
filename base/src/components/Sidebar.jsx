import { Link } from "react-router-dom";
import { PanelRightClose, X } from "lucide-react";

import "../styles/sidebar.scss";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${open ? "open_sidebar" : ""}`}>
        <X className="close_sidebar" onClick={() => setOpen(false)} />

        <div className="header">
          <h1>TaskFlow</h1>
          <input type="text" placeholder="Search task" />
        </div>

        <div className="nav_links">
          <div className="nav_link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav_link">
            <Link to="/tasks">Tasks</Link>
          </div>
          <div className="nav_link">
            <Link to="/docs">Docs</Link>
          </div>
        </div>
      </div>

      <div className={`hook ${open ? "close_hook" : ""}`} onClick={() => setOpen(true)}>
        <PanelRightClose />
      </div>
    </>
  );
};

export default Sidebar;
