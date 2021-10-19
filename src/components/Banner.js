import { Button, Typography } from "@material-ui/core";
import React from "react";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="container-info">
        <Typography variant="h2">Plan your getaway...</Typography>
        <Button variant="contained">Check our rooms</Button>
      </div>
    </div>
  );
};

export default Banner;
