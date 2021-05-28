import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="grey-box"></div>
      <div className="white-box" id="home"></div>
      <div className="intro">
        <p className="greeting">
          Hello my name is sizwe and i'm a <br></br>
          <span className="jobTitle">junior developer.</span>
        </p>
      </div>
      <div className="Scroll">
        <div>Scroll Down</div>
        <Link to="about" smooth={true} duration={500} exact="true" offset={-80}>
          <div className="arrowBox">
            <i className="fas fa-arrow-down" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
