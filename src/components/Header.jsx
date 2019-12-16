import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
              <Link to="/about">About Brainframe</Link>
            </li>
            <li>
              <Link to="/">Class Calendar</Link>
            </li>
            <li>
              <Link to="/descriptions">Classes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
