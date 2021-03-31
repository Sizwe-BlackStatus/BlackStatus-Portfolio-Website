import React from "react";
import image from "../image/image-portfolio-img.png";
function Portfolio() {
  return (
    <div>
      <h1 className="my-portfolio">my portfolio</h1>
      <div className="portfolio-section">
        <p className="portfolio-coming">portfolio coming soon...</p>
        <img src={image} className="portfolio-image" alt=""></img>
      </div>
    </div>
  );
}

export default Portfolio;
