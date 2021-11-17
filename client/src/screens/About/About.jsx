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
              Hi! I’m Katie and I am a Full Stack Software Developer and
              Software Engineer, fitness enthusiast and book lover. My thirst
              for learning new skills and knowledge in my life so far has taken
              me from physics, to special effects make-up, to natural products
              retail. Moving from a store level position to a regional
              leadership position in Whole Foods Market, I had a list of things
              I wanted to learn about the systems and processes to improve, and
              started immediately. Turns out that list kept going and it kept me
              going. I felt fulfilled listening to questions and problems, then
              digging into the workings of company systems and processes to find
              solutions. Creating robust, easy to understand, and efficient
              programs gave me deep satisfaction, so much so that I began to
              look into a career that would offer infinite opportunities for
              learning, creating, and problem solving: Software Engineering.
            </p>
            <p className="about-text">
              Software Engineering is now my home and I am inspired by my work
              and my colleagues on a daily basis. When I’m not deep in code or
              attempting to make the Kessel run in less than 12 parsecs, I love
              to explore outdoor activities such as paddleboarding, bike riding,
              and snowboarding. You may also find me reading a great piece of
              fiction, rooting for my Boston sports teams or enjoying a great
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
