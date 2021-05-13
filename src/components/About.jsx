import React from "react";
import "./About.css";
import SkillsList from "../components/SkillsList";
import skillIcons from "../components/skillsIcons";
function createSkillGrid(icon) {
  return <SkillsList key={icon.id} src={icon.src} alt={icon.alt} />;
}
function About() {
  return (
    <div className="about" id="about">
      <div className="about_me">About me</div>
      <div className="description">
        I am a 26 year old junior Front-End Web developer from Pretoria, South
        Africa. I also have some Back-End experience using Node.js and
        Express.js. I love a challenge and there is nothing more
        satisfying than breaking down a complex problem into a simpler solution
        through coding. What drives me is continious growth and what I lack in
        experience, I make up for in worth ethic.<br></br>
      </div>
      <h1 className="professional_skills">Professional Skills</h1>
      <div className="skillIconContainer">
        <div className="skillIcons">{skillIcons.map(createSkillGrid)}</div>
      </div>
    </div>
  );
}

export default About;
