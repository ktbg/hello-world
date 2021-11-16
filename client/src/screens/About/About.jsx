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
              Hi! I'm Katie. I am a Full Stack Web Developer + Software
              Engineer, fitness enthusiast and Star Wars fan. My passion for
              learning in my lifetime has taken across the galaxy from physics,
              to special effects make-up, to med school preparation (I actually
              loved organic chemistry), to natural products retail. I am most
              fulfilled by learning new skills and knowledge, and above all:
              problem solving.
            </p>
            <p className="about-text">
              Software Engineering gives me infinite opportunities to learn,
              grow and problem solve, and I'm having lots of fun doing it! When
              I'm not deep in code I love to explore outdoor activities such as
              paddleboarding, bike riding, and snowboarding. I also enjoy
              reading fiction, rooting for my Boston sports teams, and great
              glass of wine.
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
