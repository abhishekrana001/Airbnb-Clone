import React from "react";
import "../components/Card.css";

function Card({ title, price, rating, image }) {
  return (
    <div className="card-container">

      <div className="card-image">
        <img src={image} alt={title} />

        <span className="guest">Guest favourite</span>

        <span className="heart">♡</span>
      </div>

      <div className="card-title">
        {title}
      </div>

      <div className="card-price">
        ₹{price} for 2 nights · ★ {rating}
      </div>

    </div>
  );
}

export default Card;