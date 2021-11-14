import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="home-projects-container page-max">
      <div className="projects-group">
        <div className="projects-title-group">
          <p className="leading-text">Featured</p>
          <h2 className="projects-heading title">Projects</h2>
        </div>
        <div className="projects-box">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
