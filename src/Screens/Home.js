import NavBar from "../Components/NavBar";
import React from "react";
import adarsh_portfolio_img from "../img/adarsh-portfolio.png";
import { Experience } from "../Components/Experience";
import { Skills } from "../Components/Skills";
import { ReachMe } from "../Components/ReachMe";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div class="container custom-container desc-container">
        <div class="row">
          <div class="col-md-5 left-part">
            <h2 className="fancy-text-header">Hy! I am</h2>
            <p className="fancy-text-sub-header">Front-End Developer</p>

            <p className="fancy-text-description">
              Hi I'm Adarsh, A 26 Years Young Computer Science Engineer, Living
              In Bangalore, India. I Am A Frontend Developer Currently Working
              At Flipkart. I Love To Learn New Things, Build Stuff And Solve
              Problems. I Enjoy Meeting New People And Hearing New Perspectives.
              Have A Look At My Skills Or Just Connect With Me On LinkedIn . I
              Am Always Excited To Chat With Like Minded People, Lets Discuss
              Over Coffee.
            </p>
          </div>
          <div class="col-md-7 right-part portfolio-img">
            {/* <p>Design is not just what it looks like. Design is how it works!</p> */}
            <img src={adarsh_portfolio_img} alt="adarsh_portfolio_img" width={350} height={350} />
          </div>
        </div>
      </div>
      <div className="container-experience">
        <Experience />
        <Skills />
      </div>


      <ReachMe />
    </>
  );
};
