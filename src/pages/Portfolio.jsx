import React from "react";
import { Link } from "react-router-dom";
import image from "../image/Github.jpg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <Link to="/" className="back">
        Back
      </Link>
      <div className="portfolio-section">
        <a href="https://github.com/Sizwe-BlackStatus">
          <img src={image} className="github-link" alt="github"></img>
        </a>
        <p className="coming-soon">Full Portfolio coming soon</p>
        <a href="https://github.com/Sizwe-BlackStatus">
          <img src={image} className="github-link" alt="github"></img>
        </a>
        <p className="coming-soon">Full Portfolio coming soon</p>
        <a href="https://github.com/Sizwe-BlackStatus">
          <img src={image} className="github-link" alt="github"></img>
        </a>
        <p className="coming-soon">Full Portfolio coming soon</p>
      </div>
    </div>
  );
}

export default Portfolio;
