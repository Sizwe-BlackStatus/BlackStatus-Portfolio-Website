import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="boxes">
        <div className="grey-box"></div>
        <div className="white-box" id="home"></div>
      </div>
      <div className="intro">
        <div className="greeting">
          <p className="hello">Hello my name is sizwe and i'm a</p>
          <p className="jobTitle">junior developer.</p>
        </div>
      </div>
      <div className="Scroll">
        <p className="scroll-down">Scroll Down</p>
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
