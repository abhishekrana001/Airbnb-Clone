import React from "react";
import "../components/Card.css";

function Card(props) {
  return (
    <div className="card-container">

      <div className="card-image">
        <img src={props.image} alt={props.title} />

        <span className="guest">Guest favourite</span>

        <span className="heart">♡</span>
      </div>

      <div className="card-title">
        {props.title}
      </div>

      <div className="card-price">
        ₹{props.price} for 2 nights · ★ {props.rating}
      </div>

    </div>
  );
}

export default Card;