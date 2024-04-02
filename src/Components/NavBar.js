import React from 'react';

import { downloadLogo } from '../Constants';

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h3 className='nav-head-name'>Adarsh Mahendrakar</h3>
            <button className="btn">Front-End Developer</button>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-home" href="#">{"< Home />"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-resume" href="/src/Components/adarsh_react_dev.pdf"  download="adarsh_react_dev.pdf">
                   Resume {downloadLogo}
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
