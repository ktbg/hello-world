import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="page-max">
      <div className="nav">
        <NavLink className="logo" to="/">
          Katie Boates-Goudreau
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink className="nav-link-right" to="about">
          About
        </NavLink>
        <NavLink className="nav-link-right" to="projects">
          Projects
        </NavLink>
        <a
          className="nav-link-right"
          href="https://drive.google.com/file/d/1eXZo7UsUuRX06lKz9frM8c7j5q0EGuS_/view?usp=sharing"
          to="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <NavLink className="nav-link-right" to="contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
