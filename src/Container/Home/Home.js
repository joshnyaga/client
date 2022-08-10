import React from "react";
import "./home.css";
import image from "../../images/ecommerce.jpg";
import { Link } from "react-router-dom";
import Links from "../../Components/Links";

export default function Home() {
  return (
    <section>
      <div className="container-home">
        <div className="info">
          <h1>Walk in style</h1>
          <h2>New shirts and Tshirts are introduced</h2>
          <h2>Men/Female</h2>
        </div>
        <div className="image">
          <div className="img-container">
            <img src={image} />
          </div>
          <Links />
        </div>
      </div>
    </section>
  );
}
