import React from "react";
import {  socialMedia } from "../Constants";
import { Link } from 'react-router-dom';

export const ReachMe = () => {
    const year = new Date().getFullYear();
  return (
    <section id="skills" class="section skills">
      <div class="skills-container" style={{ padding: 20 }}>
        <div class="row ">
          <div class="col-sm-12 col-lg-6">
            <h3 className="footer"> Made with 💙 in India - {year}</h3>
          </div>
          <div class="col col-lg-2"></div>
          <div class="col-sm-12 col-lg-4">
            <div class="row">
              {socialMedia.map((item) => (
                <div class="col col-lg-2 mediaIcon-img">
                  <div class="skill">
                    <Link to={item.linkTo} target="_blank" class="skill-label">
                      <img
                        src={item.img}
                        alt="icons8-javascript-48"
                        className="media-icon"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
