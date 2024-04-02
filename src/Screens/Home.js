import NavBar from "../Components/NavBar";
import React from "react";
import adarsh_portfolio_img from "../img/adarsh-portfolio.png";
import { Experience } from "../Components/Experience";
import { Skills } from "../Components/Skills";
import { ReachMe } from "../Components/ReachMe";
import { AboutMe } from "../Components/AboutMe";

export const Home = () => {
  return (
    <>
      <NavBar />
      <AboutMe />
      <div className="container-experience">
        <Experience />
        <Skills />
      </div>

      <ReachMe />
    </>
  );
};
