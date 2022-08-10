import React from "react";
import about from "../../images/about.jpg";
import Product from "../../Components/Product";
import "./about.css";
import Links from "../../Components/Links";
export default function About() {
  return (
    <section>
      <div className="container-about">
        <div className="left-about">
          <h1>Walk in Style</h1>
          <h3>Learn more about us</h3>
          <div className="products">
            <Product />
            <Product />
          </div>
        </div>
        <div className="right-about">
          <img src={about} />
          <Links />
        </div>
      </div>
    </section>
  );
}
