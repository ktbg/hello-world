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
              They've coming in! Three marks at two ten. I'll take them myself!
              Cover me! Yes, sir. I can't maneuver! Stay on target. We're too
              close. Stay on target! Loosen up! Gold Five to Red Leader... Lost
              Tiree, lost Dutch. I copy, Gold Five. They came from behind....
              We've analyzed their attack, sir, and there is a danger. Should I
              have your ship standing by? Evacuate? In out moment of triumph? I
              think you overestimate their chances! Rebel base, three minutes
              and closing. Red Group, this is Red Leader.
            </p>
            <p className="about-text">
              No, my father didn't fight in the wars. He was a navigator on a
              spice freighter. That's what your uncle told you. He didn't hold
              with your father's ideals. Thought he should have stayed here and
              not gotten involved. You fought in the Clone Wars? Yes, I was once
              a Jedi Knight the same as your father. I wish I'd known him. He
              was the best star-pilot in the galaxy, and a cunning warrior. I
              understand you've become quite a good pilot yourself. And he was a
              good friend. Which reminds me... I have something here for you.
              Your father wanted you to have this when you were old enough, but
              your uncle wouldn't allow it. He feared you might follow old
              Obi-Wan on some damned-fool idealistic crusade like your father
              did.
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
