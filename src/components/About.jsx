import React from "react";
import SkillsList from "./SkillsList";
import skillsIcons from "../skillsIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function skillsIcon(icon) {
  return <SkillsList key={icon.id} src={icon.src} alt={icon.alt} />;
}

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutMe">ABOUT ME</div>
      <div className="aboutMeDescription">
        I am a 25 year old, South African born, male graduate from Tshwane
        University of Technology. Currently doing my Web-Dev learnership at
        Umuzi. I am charismatic and self-driven and I always say, what I lack in
        experience I will make up for in work ethic. Carpe Diem.
      </div>
      <h1 className="proSkills">Professional SKills</h1>
      <div className="skillsIcon">
        <ul>{skillsIcons.map(skillsIcon)}</ul>
      </div>

      <div className="resume">Download Resume</div>
      <a href="src\ResumeE.pdf" className="download-Btn">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </div>
  );
}

export default About;
