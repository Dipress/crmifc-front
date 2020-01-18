import React from 'react';
import './index.css'

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Vigiles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Wiki
            </a>
          </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Admin panel</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Roles
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
