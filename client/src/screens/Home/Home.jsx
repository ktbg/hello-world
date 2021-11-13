import { Link } from "react-router-dom";
import "./Home.css";
import "../../utils/projectList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Awards from "../../components/Awards/Awards";
import Services from "../../components/Services/Services";
import Projects from "../../screens/Projects/Projects";

const Home = () => {
  return (
    <div>
      {/* --------------- header ------------------  */}
      <div className="page-max">
        <header className="home-header">
          <div className="home-header-text-container">
            <p className="leading-text">full stack</p>
            <h2 className="home-header-title">Software</h2>
            <h2 className="home-header-title">Developer</h2>
            <p className="brand-statement">
              This text will say a little something about why you want to hire
              me, and what a great asset to your team I'll be. I'm an
              enthusiastic collaborator with excellent communication skills and
              a passion for problem solving.
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
      </div>

      {/* -------------- About section -----------------*/}
      <div className="dark">
        <div className="page-max">
          <div className="about-me">
            <div className="about-img-container">
              <h2 className="about-me-heading">About Me</h2>
            </div>
            <p className="about-me-text">
              From physics, to special effects make-up, to natural products
              retail, my passion for learning, creating and creative problem
              solving has driven and inspired me. I am now a Software Developer
              looking to use my dynamic background collaborating with clients
              and teams across industries to create effective solutions and
              drive innovation to make lives better.
            </p>
          </div>
        </div>
      </div>

      <Projects />
      <div className="dark">
        <Services />
      </div>
      <Awards />
    </div>
  );
};

export default Home;
