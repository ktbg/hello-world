import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { RESUME_URL } from "../constants/resume";
import "./Layout.css";

const Layout = (props) => {
  console.log(
    `**************************************** \n\nChecking out my console, huh?\n\nWelcome! While you're at it check out my resume :)\n\n${RESUME_URL}\n\n***************************************  `
  );

  return (
    <div className="layout">
      <Navbar />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
