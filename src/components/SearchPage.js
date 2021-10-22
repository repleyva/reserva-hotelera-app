import { HighlightOffTwoTone } from "@mui/icons-material";
import { Chip, Slider } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectEnd } from "../features/endSlice";
import { selectStart } from "../features/startSlice";
import "../styles/searchpage.css";
import mockData, { chips } from "../utils/mockData";
import Results from "./Results";

const SearchPage = () => {
  const [value, setValue] = useState(400);
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
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
          value={value}
          onChange={handleChange}
          className="slider"
          min={100}
          max={400}
          valueLabelDisplay="auto"
          size="small"
        />
      </div>
      <div className="results-container">
        {mockData
          .sort((a, b) => {
            if (a.price > b.price) {
              return -1;
            }
            if (a.price < b.price) {
              return 1;
            }
          })
          .filter((data) => data.cat === "room")
          .filter((data) => data.price < value)
          .filter(
            (data) =>
              end < data.notAvailablestart || start > data.notAvailableend
          )
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
