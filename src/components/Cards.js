import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image9 from "../images/img-9.jpg";
import image2 from "../images/img-2.jpg";
import image3 from "../images/img-3.jpg";
import image4 from "../images/img-4.jpg";
import image5 from "../images/img-5.jpg";
// import image6 from "../images/img-6.jpg";
// import image7 from "../images/img-7.jpg";

function Cards() {
  return (
    <div>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={image9}
                text="Explore the hidden waterfall deep inside the Amazone Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src={image2}
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={image3}
                text="Explore the hidden waterfall deep inside the Amazone Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src={image4}
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
              <CardItem
                src={image5}
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
