import { HighlightOffTwoTone } from "@mui/icons-material";
import { Chip, Slider } from "@mui/material";
import React from "react";
import "../styles/searchpage.css";
import mockData, { chips } from "../utils/mockData";
import Results from "./Results";

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
      <div className="results-container">
        {mockData
          .filter((data) => data.cat === "room")
          .map((room, index) => (
            <Results
              key={index}
              title={room.title}
              src={room.src}
              description={room.description}
              price={room.price}
              stock={room.stock}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
