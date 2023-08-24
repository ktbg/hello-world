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
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/Html5.svg").default}
                alt="HTML 5"
              />
              <p>HTML</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/CSS3.svg").default}
                alt="CSS"
              />
              <p>CSS</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/Javascript.svg").default}
                alt="JavaScript"
              />
              <p>JavaScript</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/SQL.svg").default}
                alt="SQL"
              />
              <p>SQL</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/postgreSQL.svg").default}
                alt="PostgreSQL"
              />
              <p>PostgreSQL</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/GraphQL.svg").default}
                alt="GraphQL"
              />
              <p>GraphQL</p>
            </div>
            {/* typeScript goes here */}
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/Typescript.svg").default}
                alt="Typescript"
              />
              <p>TypeScript</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/React.svg").default}
                alt="React"
              />
              <p>React</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/nodejs.svg").default}
                alt="Node.js"
              />
              <p>Node.js</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/Express.svg").default}
                alt="Express"
              />
              <p>Express</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/Ruby.svg").default}
                alt="Ruby"
              />
              <p>Ruby</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/rails.svg").default}
                alt="Ruby on Rails"
              />
              <p>Ruby on Rails</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/Git.svg").default}
                alt="Git"
              />
              <p>Git</p>
            </div>
            <div className="tech-service-container">
              <img
                className="tech-stack-img"
                src={require("../../assets/tech-stack/GitHub.svg").default}
                alt="Github"
              />
              <p>Github</p>
            </div>
          </div>
          <PinkLink linkName={linkName} linkTo={linkTo} />
        </div>
      </div>
    </div>
  );
};

export default Services;
