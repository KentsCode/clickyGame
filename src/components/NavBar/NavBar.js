import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <p className="nav-link-center"> Click an image to begin! </p>
        <p className="nav-link-right"> SCORE: <span>{props.score}</span> |  LAST GAME SCORE: <span>{props.highScore}</span></p>
      </div>
    </div>
  </nav>
);

export default Navbar;
