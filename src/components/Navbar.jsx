import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import menuImage from "../image/icon-menu-open-24px.png";
import Social from "./Social.js";
import socialIcons from "./socialLinks";

function createSocialIcon(tab) {
  return <Social key={tab.id} link={tab.link} icon={tab.icon} />;
}
function Navbar({ toggle }) {
  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <h1>Black Status</h1>
        </div>
        <ul className="navbar_menu">
          <li>
            <LinkS
              to="home"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              HOME
            </LinkS>
          </li>
          <li>
            <LinkS
              to="about"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              ABOUT
            </LinkS>
          </li>
          <li>
            <LinkS
              to="contacts"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              CONTACTS
            </LinkS>
          </li>
          <li>
            <LinkR
              to="/portfolio"
            >
              PORTFOLIO
            </LinkR>
          </li>
        </ul>
        <ul className="navbar_socials">{socialIcons.map(createSocialIcon)}</ul>
        <div className="menu_img">
          <img
            className="image"
            src={menuImage}
            alt="img"
            onClick={toggle}
          ></img>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
