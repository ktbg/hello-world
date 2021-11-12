import { Link } from "react-router-dom";
import "./Services.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-text">
        <h4 className="services-title">Services</h4>
        <div className="services-list">
          Full Stack Development / Front End Development / Back End Development
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
  );
};

export default Services;
