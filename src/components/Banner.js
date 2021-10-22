import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="container-info">
        <Typography variant="h2">Plan your getaway...</Typography>
        <Link to="/search" style={{textDecoration: "none"}}>
          <Button variant="contained">Check our rooms</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
