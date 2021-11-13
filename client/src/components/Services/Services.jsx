import React from "react";
import "./Services.css";
import PinkLink from "../PinkLink";

const Services = ({ linkName, linkTo }) => {
  return (
    <div className="page-max">
      <div className="services-container">
        <div className="services-text">
          <h4 className="services-title">Technical Skills</h4>
          <div className="services-list">
            HTML 5 / CSS 3 / JavaScript / SQL / PostgreSQL / Ruby / Ruby on
            Rails / React / Node.js / Express / Git / GitHub
          </div>
          <PinkLink linkName={linkName} linkTo={linkTo} />
        </div>
      </div>
    </div>
  );
};

export default Services;
