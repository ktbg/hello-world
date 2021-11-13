// import { useState } from "react";
import React from "react";
import { projectList } from "../../utils/projectList";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <>
      {projectList.map((project, index) => {
        return (
          // <a DUCHESS
          //   className="project-card-link"
          //   href={project.deployUrl}
          //   alt={project.title}
          //   key={index}
          //   target="_blank"
          //   rel="noreferrer"
          // >
          <div className="project-card">
            <div className="project-img-container">
              <img
                className="project-img"
                src={project.imgUrl}
                alt={project.title}
              />
            </div>
            <div className="project-details">
              <h4 className="project-title">{project.title}</h4>
              <div className="tech-stack">
                {project.techStack.map((language, index) => (
                  <div className="language-bubbles" key={index}>
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
          // </a>
        );
      })}
    </>
  );
};

export default ProjectCard;
