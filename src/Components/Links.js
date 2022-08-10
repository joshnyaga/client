import React from "react";
import { Link } from "react-router-dom";
import "./links.css";
export default function Links() {
  return (
    <div className="quick-links">
      <Link to="/category">Categories</Link>
      <Link to="/details">Product details</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}
