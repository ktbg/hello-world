import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="logo" to="/">
        Katie Boates-Goudreau
      </NavLink>
      <div className="nav-right">
        <NavLink className="nav-link-right" to="about">
          About
        </NavLink>
        <NavLink className="nav-link-right" to="projects">
          Projects
        </NavLink>
        <NavLink className="nav-link-right" to="resume">
          Resume
        </NavLink>
        <NavLink className="nav-link-right" to="contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
