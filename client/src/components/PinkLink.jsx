import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PinkLink = ({ linkTo, linkName }) => {
  return (
    <Link className="redirect-pink" to={`${linkTo}`}>
      <p>{linkName}</p>
      <ArrowForwardIcon
        sx={{
          color: "d8669e",
          fontSize: "12px",
          marginLeft: "10px",
          fontWeight: "700",
        }}
      />
    </Link>
  );
};

export default PinkLink;
