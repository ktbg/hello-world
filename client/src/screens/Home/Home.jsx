import React from "react";
import "./Home.css";
import "../../utils/projectList";
import Services from "../../components/Services/Services";
import Projects from "../../screens/Projects/Projects";
import PinkLink from "../../components/PinkLink";

const Home = () => {
  return (
    <div>
      {/* --------------- header ------------------  */}
      <div className="page-max">
        <header className="home-header">
          <div className="home-header-text-container">
            <p className="leading-text">full stack</p>
            <h2 className="title">Software</h2>
            <h2 className="title">Developer</h2>
            <p className="brand-statement">
              Passionate about learning and deeply fulfilled by acquiring new
              skills and knowledge, problem solving, and building amazing things
              with amazing people.
            </p>
            <PinkLink linkName="let's talk" linkTo="contact" />
          </div>
        </header>
      </div>

      {/* -------------- About section -----------------*/}
      <div className="dark">
        <div className="page-max">
          <div className="about-me">
            <div className="about-img-container">
              <h2 className="about-me-heading title">About Me</h2>
            </div>
            <p className="about-me-text">
              From physics, to special effects make-up, to natural products
              retail, my passion for learning, creating and creative problem
              solving has driven and inspired me. I am now a Software Developer
              looking to use my dynamic background collaborating with clients
              and teams across industries to create effective solutions and
              drive innovation to make lives better.
            </p>
            <div className="more-about">
              <PinkLink
                className="more-about-link"
                linkTo="about"
                linkName="more about me"
              />
            </div>
          </div>
        </div>
      </div>

      <Projects />
      <div className="dark">
        <Services linkName="contact me" linkTo="/contact" />
      </div>
    </div>
  );
};

export default Home;
