import React from "react";
import githubImage from "../image/rsz_1github.jpg";
import portfolioImg from "../image/image-portfolio-img.png";
import mobilePortfolioImg from "../image/image-mobile-portfolio-img.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="my-portfolio">My Portfolio</h1>
      <div className="portfolio-section">
        <a
          href="https://github.com/Sizwe-BlackStatus"
          className="github-container"
        >
          <img className="github-img" src={githubImage} alt="github"></img>
        </a>
        <img src={portfolioImg} className="portfolio-image" alt=""></img>
        <img
          src={mobilePortfolioImg}
          className="mobile-portfolio-image"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Portfolio;
