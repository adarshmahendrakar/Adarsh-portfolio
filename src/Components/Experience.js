import React from "react";
import { projectsData } from "../Constants";

export const Experience = () => {
  return (
    <div class="container custom-container desc-container ">
      <div class="row ">
        {projectsData.map((item) => (
          <div class="col-sm-6 experience-body">
            {/* inline CSS used */}
            <div class="card" style={{ marginBottom: 20 }}>
              {/* the end */}
              <div class="card-body project-card">
                <h5 class="card-title compony-name">{item.componyName}</h5>
                <p class="card-text role">{item.role}</p>
                <p className="role">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
