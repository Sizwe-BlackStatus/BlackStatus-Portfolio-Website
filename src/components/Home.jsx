import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="Home">
      <div className="grey-box"></div>
      <div className="white-box"></div>
      <div className="greeting">Hello my name is sizwe and i'm a</div>
      <div className="jobTitle">junior web developer.</div>
      <div className="scroll">Scroll Down</div>
      <a href="#about" className="downArrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </div>
  );
}

export default Home;
