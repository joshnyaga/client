import React from "react";
import shoes from "../images/shoes.jpg";
export default function Product() {
  return (
    <div className="single-product">
      <img src={shoes} />
      <p className="p-name">Shoes</p>
    </div>
  );
}
