// import { useState } from "react";
import React from "react";
import { projectList } from "../../utils/projectList";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <>
      {projectList.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="project-img-container">
              <img
                className="project-img"
                src={`${project.imgUrl}`}
                alt={project.title}
              />
            </div>
            <div className="project-details">
              <div className="project-header">
                <h4 className="project-title">{project.title}</h4>
                <div className="project-link-group">
                  <a
                    className="redirect-pink project-link"
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                  <p className="separator"> | </p>
                  <a
                    className="redirect-pink project-link"
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                </div>
              </div>
              <div className="project-description-container">
                <p className="project-description">{project.description}</p>
              </div>
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
