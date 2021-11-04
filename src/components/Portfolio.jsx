import React from "react";
import portfolioImg from "../image/image-portfolio-img.png";
import mobilePortfolioImg from "../image/image-mobile-portfolio-img.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="my-portfolio">My Portfolio</h1>
      <div className="portfolio-section">
        <a
          href="https://portfoliowork.netlify.app/"
          className="porfolio-container"
        >
          <p className="portfolio-text">
            portfolio
          </p>
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
