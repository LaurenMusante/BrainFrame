import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            {" "}
            <i className="material-icons" style={{ fontSize: "40px" }}>
              blur_on
            </i>
            BRAINFRAME
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">About BrainFrame</a>
            </li>
            <li>
              <a href="badges.html">Class Calendar</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
