import React from "react";
import Links from "../../Components/Links";
import shoes from "../../images/shoes.jpg";
import "./checkout.css";
export default function Checkout() {
  return (
    <section>
      <div className="checkout-container">
        <div className="left-checkout">
          <div className="top-desc">
            <p>Shipping</p>
            <p>Billing</p>
            <p>Confirmation</p>
          </div>
          <div className="header-text">Order-summary</div>
          <div className="p-name">
            <p>Name</p>
            <span>Kitten Heels</span>
          </div>
          <div className="p-name">
            <p>Price</p>
            <span>100</span>
          </div>
          <div className="p-name">
            <p>Brand</p>
            <span>Lucron</span>
          </div>
          <div className="p-name">
            <p>Size</p>
            <span>39</span>
          </div>
          <div className="header-text">Payment details</div>
          <p className="payments">Check out through Paypal</p>
          <div className="header-text">Delivery Address</div>
          <p className="payments">169-60102</p>
          <hr />
          <div className="total">
            <p>Total</p>
            <span>$ 100</span>
          </div>
        </div>

        <div className="right-checkout">
          <img src={shoes} />
          <Links />
        </div>
      </div>
    </section>
  );
}
