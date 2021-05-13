import React from "react";
import {
  SidemenuContainer,
  SidemenuItems,
  SidemenuLink,
  SocialIcons,
  PortfolioSideLink,
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
          Home
        </SidemenuLink>
        <SidemenuLink to="about" onClick={toggle}>
          About
        </SidemenuLink>
        <SidemenuLink to="contacts" onClick={toggle}>
          Contacts
        </SidemenuLink>
      </SidemenuItems>
      <PortfolioSideLink to="/portfolio_Mobile" className="portfolio_link">
        Portfolio
      </PortfolioSideLink>
      <SocialIcons className="sideMenu_socials">
        {socialIcons.map(createSocialIcon)}
      </SocialIcons>
    </SidemenuContainer>
  );
}

export default SideMenu;
