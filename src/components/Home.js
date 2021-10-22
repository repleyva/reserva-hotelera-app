import { Button, CssBaseline } from "@mui/material";
import React from "react";
import { useState } from "react";
import "../styles/home.css";
import mockData from "../mockData";
import Banner from "./Banner";
import DatePicker from "./DatePicker";
import RoomCard from "./RoomCard";

const Home = () => {
  const [visibleDate, setVisibleDate] = useState(false);
  return (
    <>
      <CssBaseline />
      <div className="home-container">
        <div className="dates">
          <Button
            className="dates-button"
            onClick={
              visibleDate
                ? () => setVisibleDate(false)
                : () => setVisibleDate(true)
            }
          >
            {visibleDate ? <h3>Hide</h3> : <h3>Search Dates</h3>}
          </Button>
          {visibleDate && <DatePicker />}
        </div>
        <Banner />
				<hr/>
        <section className="room-card-container">
          {mockData.map((data, key) => (
            <RoomCard
              key={key}
              src={data.src}
              title={data.title}
              description={data.description}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
