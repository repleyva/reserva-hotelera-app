import React from "react";
import "../styles/roomcard.scss";

const RoomCard = (props) => {
  return (
    <div className="container-card">
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="pic" style={{ width:"100%", height:"100%" ,backgroundImage: `url(${props.src})`, objectFit: "cover" }}></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button></button>
      </div>
    </div>
  );
};

export default RoomCard;
