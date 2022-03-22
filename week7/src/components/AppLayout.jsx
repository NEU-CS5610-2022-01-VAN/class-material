import React from "react";
import "../style/appLayout.css";

export default function AppLayout() {
 

  return (
    <div className="app">
      <div className="title">
        <h1>NEU Github App</h1>
      </div>
      <div className="header">
        <nav className="menu">
          <ul className="menu-list">
            <li>
              Profile
            </li>
            <li>
              Repositories
            </li>
            <li>
              <button className="exit-button" onClick={() => {}}>Exit App</button>
            </li>
          </ul>
        </nav>
        <div>Welcome 👋 [user]</div>
      </div>
      <div className="content">
      </div>
    </div>
  );
}
