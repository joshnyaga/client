import React from "react";
import Links from "../../Components/Links";
import Product from "../../Components/Product";

import "./category.css";
export default function Category() {
  return (
    <section>
      <div className="category-container">
        <div className="left-category">
          <div className="filters">
            <input type="number" placeholder="Price below" />
            <select name="brand" id="brand">
              <option value="">Nikke</option>
              <option value="">GUCCI</option>
              <option value="">Louis Vuitton</option>
            </select>
            <input type="number" placeholder="Enter size" />
          </div>
          <div className="products">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="right-category">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Clothing items</a>
            </li>
            <li>
              <a href="#">Shoes items</a>
            </li>
            <li>
              <a href="#">Caps</a>
            </li>
            <li>
              <a href="#">Socks</a>
            </li>
          </ul>
          <Links />
        </div>
      </div>
    </section>
  );
}
