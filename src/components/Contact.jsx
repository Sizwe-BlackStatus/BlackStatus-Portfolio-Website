import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import contactinfo from "../contactInfo";
import Info from "./Info";

function createInfo(information) {
  return (
    <Info
      key={information.id}
      tel={information.tel}
      email={information.email}
      location={information.location}
    />
  );
}

function Contact() {
  return (
    <div className="contact-section">
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
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
      <h1 className="info-header">Contact info</h1>
      <div className="contact-info">
        <ul>{contactinfo.map(createInfo)}</ul>
      </div>

      <div className="back-top">Top</div>
      <a href="/home" className="back-top-arrow">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}

export default Contact;
