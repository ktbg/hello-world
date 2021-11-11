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
            From physics, to special effects make-up, to natural products
            retail, my passion for learning, creating and creative problem
            solving has driven and inspired me. I am now a Software Developer
            looking to use my dynamic background collaborating with clients and
            teams across industries to create effective solutions and drive
            innovation to make lives better.
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
          We count thirty Rebel ships, Lord Vader. But they're so small they're
          evading our turbo-lasers! We'll have to destroy them ship to ship. Get
          the crews to their fighters. Luke, let me know when you're going in.
          I'm on my way in now... Watch yourself! There's a lot of fire coming
          from the right side of that deflection tower. I'm on it. Squad
          leaders, we've picked up a new group of signals. Enemy fighters coming
          your way.
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
    </div>
  );
};

export default Home;
