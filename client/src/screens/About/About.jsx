import React from "react";
import Services from "../../components/Services/Services";
import "./About.css";

const About = () => {
  return (
    <div>
      <header className="page-max">
        <div className="about-screen-container">
          <div className="about-header-left">
            <h2 className="about title">About Me</h2>
            <p className="about-text">
              Hi! I’m Katie and I am a Full Stack Software Developer + Software
              Engineer, fitness enthusiast and book lover. My entire life I have
              had a thirst for knowledge. It’s the reason my career journey has
              taken me from physics, to special effects make-up, to pre-med
              courses, to natural products retail – all in a quest to learn new
              skills and follow my passions. Through this entire journey, one
              thing has always been consistent; I have always felt most
              fulfilled engineering solutions to problems and improving
              experiences for others. In my most recent leadership role within
              product acquisition for Whole Foods Market, I had the opportunity
              to dig even deeper into the workings of company systems to create
              robust and easy to understand programs for vendors and consumers.
              This experience led me to Software Engineering – a career that
              feels like home, where there are infinite opportunities for
              listening, learning, creating and problem solving.
            </p>
            <p className="about-text">
              I am inspired by my work and my colleagues on a daily basis. When
              I’m not deep in code or attempting to make the Kessel run in less
              than 12 parsecs, I love exploring outdoor activities such as
              Paddleboarding, bike riding, and snowboarding. You may also find
              me consumed by a great piece of fiction, rooting for my Boston
              sports teams or enjoying an exceptional glass of wine.
            </p>
          </div>
          <div className="about-header-right">
            <div
              className="about-main-image"
              alt="Katie Boates-Goudreau head shot"
            ></div>
            <div className="about-bottom-image-group">
              <div className="bottom-image one" alt="Katie dirt biking"></div>
              <div
                className="bottom-image two"
                alt="Katie at Gillette Stadium"
              ></div>
              <div
                className="bottom-image three"
                alt="Katie as Wonder Woman"
              ></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="dark">
          <Services linkName="let's talk" linkTo="/contact" />
        </div>
      </main>
    </div>
  );
};

export default About;
