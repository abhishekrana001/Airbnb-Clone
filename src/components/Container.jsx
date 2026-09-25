import React, { useState } from "react";
import "../components/Container.css";
import Card from "../components/Card.jsx";
import image1 from "../assets/image.avif";
import image2 from "../assets/img2.webp";
import image3 from "../assets/img3.avif";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpeg";
import image6 from "../assets/img6.avif";
import image7 from "../assets/img7.jpg";

function Container() {

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Home in Chandigarh",
      price: "22,958",
      rating: "4.84",
      image: image1
    },
    {
      id: 2,
      title: "Flat in Sahibzada Ajit Singh Nagar",
      price: "38,000",
      rating: "5.0",
      image: image2
    },
    {
      id: 3,
      title: "Home in Sahibzada Ajit Singh Nagar",
      price: "14,488",
      rating: "4.97",
      image: image3
    },
    {
      id: 4,
      title: "Villa in Chandigarh",
      price: "24,000",
      rating: "4.92",
      image: image4
    },
    {
      id: 5,
      title: "Home in Sahibzada Ajit Singh Nagar",
      price: "17,245",
      rating: "4.93",
      image: image5
    },
    {
      id: 6,
      title: "Guest suite in Chandigarh",
      price: "10,350",
      rating: "4.94",
      image: image6
    },
    {
      id: 7,
      title: "Flat in Chandigarh",
      price: "6,529",
      rating: "5.0",
      image: image7
    }
  ]);

  return (
    <section className="section">

      <div className="section-heading">
        <h3>Popular homes in Chandigarh</h3>
        <button>→</button>
      </div>

      <div className="container">

        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            price={card.price}
            rating={card.rating}
            image={card.image}
          />
        ))}

      </div>

    </section>
  );
}

export default Container;