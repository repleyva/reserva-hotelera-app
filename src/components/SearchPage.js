import { HighlightOffTwoTone } from "@mui/icons-material";
import { Chip, Slider } from "@mui/material";
import React from "react";
import "../styles/searchpage.css";
import { chips } from "../utils/mockData";

const SearchPage = () => {
  return (
    <div className="search-container">
      <h2>Available rooms</h2>
      <div className="container_chips">
        {chips.map((data) => {
          let icon = <HighlightOffTwoTone className="logo_chip" />;
          return (
            <Chip
              label={data.label}
              key={data.key}
              icon={icon}
              className="chip"
            />
          );
        })}
      </div>
      <div className="selector">
			<h4>Prices</h4>
        <Slider
          className="slider"
          min={100}
          max={400}
          valueLabelDisplay="auto"
          size="small"
        />
      </div>
    </div>
  );
};

export default SearchPage;
