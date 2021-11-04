import React from "react";
import { Link } from "react-scroll";
import "./Contact.css";
import Social from "./Social.js";
import socialIcons from "./socialLinks";

function Contact() {
  function createSocialIcon(tab) {
    return <Social key={tab.id} link={tab.link} icon={tab.icon} />;
  }
  return (
    <div className="contact-section " id="contacts">
      <h1 className="contact-me">contact me</h1>
      <form className="form-user">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="Email" placeholder="Email Address"></input>
        <input type="text" placeholder="Subject"></input>
        <textarea
          className="message"
          name="message"
          placeholder="Message"
          rows="5"
        ></textarea>
        <div className="submission">Submit</div>
        <button className="submission-arrow">
          <i className="fas fa-arrow-right" />
        </button>
      </form>
      <div className="contact-info">
        <h1 className="info-header">Contact info</h1>
        <ul>
          <li>
            <p>Pretoria, South Africa</p>
          </li>
          <li>
            <p>+27 81 511 6971 </p>
          </li>
          <li>
            <p>sizwemasemola1@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="back-top">
        <p>Top</p>
        <Link to="home" smooth={true} duration={500} exact="true" offset={-80}>
          <div className="back-top-arrow">
            <i className="fa fa-arrow-up" />
          </div>
        </Link>
      </div>

      <ul className="contact_socials">{socialIcons.map(createSocialIcon)}</ul>
    </div>
  );
}

export default Contact;
