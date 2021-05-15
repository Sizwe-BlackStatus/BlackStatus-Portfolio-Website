import React from "react";
import {
  SidemenuContainer,
  SidemenuItems,
  SidemenuLink,
  SocialIcons,
} from "./SideMenuElements.js";
import "./SideMenu.css";
import Social from "../Social.js";
import socialIcons from "../socialLinks";

function createSocialIcon(tab) {
  return <Social key={tab.id} link={tab.link} icon={tab.icon} />;
}

function SideMenu({ open, toggle }) {
  return (
    <SidemenuContainer
      className="sideMenu_container"
      open={open}
      onClick={toggle}
    >
      <SidemenuItems className="sideMenu_items">
        <SidemenuLink to="home" onClick={toggle}>
          HOME
        </SidemenuLink>
        <SidemenuLink to="about" onClick={toggle}>
          ABOUT
        </SidemenuLink>
        <SidemenuLink to="portfolio" onClick={toggle}>
          PORTFOLIO
        </SidemenuLink>
        <SidemenuLink to="contacts" onClick={toggle}>
          CONTACT
        </SidemenuLink>
      </SidemenuItems>
      <SocialIcons className="sideMenu_socials">
        {socialIcons.map(createSocialIcon)}
      </SocialIcons>
    </SidemenuContainer>
  );
}

export default SideMenu;
