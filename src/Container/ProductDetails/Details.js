import React from "react";
import shoe from "../../images/shoes.jpg";
import "./details.css";
export default function Details() {
  return (
    <section>
      <div className="container-details">
        <div className="left">
          <h1>Shoe name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur nostrum reiciendis, natus excepturi rem accusamus quos
            iste, blanditiis, commodi assumenda ducimus repellat sed placeat!
            Repellendus tempore maiores itaque voluptate soluta.
          </p>
          <div className="brands">
            <p>Lucron</p>
            <p>Leather</p>
          </div>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <button className="btn">Add to cart</button>
        </div>
        <div className="right">
          <img src={shoe} />
        </div>
      </div>
    </section>
  );
}
