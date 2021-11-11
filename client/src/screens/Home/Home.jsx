import { Link } from "react-router-dom";
import "./Home.css";
import "../../utils/projectList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
  return (
    <div>
      {/* --------------- header ------------------  */}
      <header className="home-header">
        <div className="home-header-text-container">
          <p className="leading-text">full stack</p>
          <h2 className="home-header-title">Software</h2>
          <h2 className="home-header-title">Developer</h2>
          <p className="brand-statement">
            This text will say a little something about why you want to hire me,
            and what a great asset to your team I'll be. I'm an enthusiastic
            collaborator with excellent communication skills and a passion for
            problem solving.
          </p>
          <Link className="redirect-pink" to="contact">
            <p>Lets talk </p>
            <ArrowForwardIcon
              sx={{
                color: "d8669e",
                fontSize: "12px",
                marginLeft: "10px",
                fontWeight: "700",
              }}
            />
          </Link>
        </div>
      </header>

      {/* -------------- About section -----------------*/}
      <div className="about-me">
        <div className="about-img-container">
          <h2 className="about-me-heading">About Me</h2>
        </div>
        <p className="about-me-text">
          From physics, to special effects make-up, to natural products retail,
          my passion for learning, creating and creative problem solving has
          driven and inspired me. I am now a Software Developer looking to use
          my dynamic background collaborating with clients and teams across
          industries to create effective solutions and drive innovation to make
          lives better.
        </p>
      </div>

      {/* --------------- Projects section ------------------*/}
      <div className="home-projects-container">
        <div className="projects-title-group">
          <p className="leading-text">Featured</p>
          <h2 className="projects-heading">Projects</h2>
        </div>
        <div className="projects-box">
          <ProjectCard />
        </div>
      </div>

      {/* ------------- services ----------------------------- */}
      <div className="services-container">
        <div className="services-text">
          <h4 className="services-title">Services</h4>
          <div className="services-list">
            Full Stack Development / Front End Development / Back End
            Development
          </div>
          <Link className="redirect-pink" to="about">
            <p>More about me </p>
            <ArrowForwardIcon
              sx={{
                color: "d8669e",
                fontSize: "12px",
                marginLeft: "10px",
                fontWeight: "700",
              }}
            />
          </Link>
        </div>
      </div>

      {/* -------------- Awards -------------------------------- */}
      <div className="awards-container">
        <div className="awards-body">
          <h4 className="awards-title">Awards &amp; Certifications</h4>
          <div className="awards-grid">
            <div className="award">
              <span className="dark-grey">Certification - </span>
              Software Engineering Immersive
              <span className="dark-grey"> - 08/2021-11/2021</span>
            </div>
            <div className="award">
              <span className="dark-grey">Certification - </span>
              Software Engineering Immersive
              <span className="dark-grey"> - 08/2021-11/2021</span>
            </div>
            <div className="award">
              <span className="dark-grey">Certification - </span>
              Software Engineering Immersive
              <span className="dark-grey"> - 08/2021-11/2021</span>
            </div>
            <div className="award">
              <span className="dark-grey">Certification - </span>
              Software Engineering Immersive
              <span className="dark-grey"> - 08/2021-11/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
