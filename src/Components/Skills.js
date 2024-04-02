import React from "react";
import { projectsData, skills } from "../Constants";

export const Skills = () => {
  return (
    <div class="container custom-container desc-container " >
      <section id="skills" class="section skills">
        <h1 class="section-title compony-name skills-body">MY SKILLS</h1>
        <div class="skills-container">
        <div class="row " >
          {skills.map((item) => (
            <div class="col col-lg-4  skills-body" style={{ marginBottom: 20 }}>
            <div class="skill" >
              <img
                src={item.img}
                alt="icons8-javascript-48"
                className="skill-img"
              />
              <div class="skill-label">{item.skill}</div>
            </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      
    </div>
  );
};
