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
          <span>Home</span>
        </div>
        <div className="nav_link">
          <span>Tasks</span>
        </div>
        <div className="nav_link">
          <span>Docs</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
