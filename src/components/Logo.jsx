import React from "react";
import menu from "../navbar";
import Menu from "./Menu";
import menuImage from "../image/icon-menu-open-24px.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function createMenu(tab) {
  return <Menu key={tab.id} path={tab.path} name={tab.name} />;
}
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">BlackStatus</div>
      <div className="Menu-box">
        <img className="Menu-img" src={menuImage} alt=""></img>
      </div>

      <div className="Menu">
        <ul>{menu.map(createMenu)}</ul>
      </div>
      <div className="social">
        <a href="https://web.facebook.com/sizwe.clutchi">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/blackstatus_6/?hl=en">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/sizwe-masemola-671144178/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
