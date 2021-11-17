import React from "react";
import "./Burger.css";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

// burger menu idea from: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Burger = ({ open, setOpen, Menu, width }) => {
  const nodeRef = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    setOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="burger" onClick={handleClick}>
        <span className={open ? "patty rotate" : "patty"} />
        <span className={open ? "patty rotate" : "patty"} />
        <span className={open ? "patty rotate" : "patty"} />
      </div>
      <CSSTransition
        in={open}
        timeout={300}
        classNames="menu"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className="menu">
          <div className="mobile-menu">
            <NavLink
              className="nav-link-right"
              to="/"
              onClick={handleMenuClose}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link-right"
              to="about"
              onClick={handleMenuClose}
            >
              About
            </NavLink>
            <NavLink
              className="nav-link-right"
              to="projects"
              onClick={handleMenuClose}
            >
              Projects
            </NavLink>
            <a
              className="nav-link-right"
              href="https://drive.google.com/file/d/1eXZo7UsUuRX06lKz9frM8c7j5q0EGuS_/view?usp=sharing"
              to="_blank"
              rel="noopener noreferrer"
              onClick={handleMenuClose}
            >
              Resume
            </a>
            <NavLink
              className="nav-link-right"
              to="contact"
              onClick={handleMenuClose}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Burger;
