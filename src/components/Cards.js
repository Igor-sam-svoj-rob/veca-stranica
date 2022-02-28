import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Pogledajte TOP destinacije u Hrvatskoj</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Posjeti Dubrovnik"
              label="turizam"
              path="/proizvodi"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Pogledaj Dubrovnik"
              label="turizam"
              path="/proizvodi"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Posjeti dvorce"
              label="turizam"
              path="/proizvodi"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Gastrokutak"
              label="turizam"
              path="/proizvodi"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Plitvice"
              label="turizam"
              path="/proizvodi"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
