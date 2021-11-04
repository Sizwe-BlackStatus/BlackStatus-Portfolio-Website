import React from "react";
import "./Navbar.css";
import Social from "./Social.js";
import socialIcons from "./socialLinks";
import NavMenu from "./NavMenu";
import navbarMenuItems from "./navbarMenuItems";

function createSocialIcon(tab) {
  return <Social key={tab.id} link={tab.link} icon={tab.icon} />;
}

function createNavBar(tab) {
  return <NavMenu key={tab.id} name={tab.name} path={tab.path} />;
}
function Navbar({ toggle }) {
  return (
      <nav>
        <div className="navbarContainer">
          <div className="nav_logo">
            <h1>Black Status</h1>
          </div>
          <div className="menu_icon">
            <i className="fas fa-bars" onClick={toggle}></i>
          </div>
          <ul className="navbar_menu">{navbarMenuItems.map(createNavBar)}</ul>
          <ul className="navbar_socials">
            {socialIcons.map(createSocialIcon)}
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
