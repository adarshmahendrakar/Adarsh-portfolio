import React from "react";
import { downloadLogo } from "../Constants";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3 className="nav-head-name">Adarsh Mahendrakar</h3>
            <button className="btn">Front-End Developer</button>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-home" to="/">
                  {"< Home />"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-resume" to="https://docs.google.com/document/d/1x1tCNe0yq-PF8KdFjFv2t__7mk5hkDonp0B7haolOfs/edit?usp=sharing">
                  Resume {downloadLogo}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
