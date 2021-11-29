import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  console.log(
    "************************************************* \n\nChecking out my console, huh?\n\nWelcome! While you're at it check out my resume :)\n\nhttps://drive.google.com/file/d/1sx3WLnzPuXSVRsCxC_BnAWqLWUysiTWA/view?usp=sharing\n\n*************************************************  "
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
