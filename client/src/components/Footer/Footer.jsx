import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="dark">
      <footer className="footer page-max">
        <div className="footer-left">
          <h5 className="footer-name">Katie Boates-Goudreau</h5>
          <Link to="contact">
            <div className="footer-email"></div>
          </Link>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <Link to="/">LinkedIn</Link>
            <Link to="/">GitHub</Link>
            <Link to="/">Instagram</Link>
          </div>
          <div className="copyright">
            <p className="copyright-text">
              Katie Boates-Goudreau &copy;{currentYear}. All rights reserved.
              Made with &hearts; by Katie Boates-Goudreau
            </p>
          </div>
          <div className="licenses"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
