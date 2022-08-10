import React from "react";
import Links from "../../Components/Links";
import shoe from "../../images/shoes.jpg";
import "./contact.css";
export default function Contact() {
  return (
    <section>
      <div className="container-contact">
        <div className="left-contact">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Contact" />
          <input type="text" placeholder="Write us a question" />
          <button className="btn">Contact us</button>
        </div>
        <div className="right-contact">
          <img src={shoe} />
          <Links />
        </div>
      </div>
    </section>
  );
}
