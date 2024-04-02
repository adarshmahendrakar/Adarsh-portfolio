import React from "react";

import { downloadLogo } from "../Constants";
import { Link } from "react-router-dom";

function NavBar() {

  const handleDownload = () => {
    // Replace 'url_to_pdf' with the actual URL of the PDF file
    const url = "url_to_pdf";

    fetch(url)
      .then((response) => {
        // Check if response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Return response as blob
        return response.blob();
      })
      .then((blob) => {
        // Create object URL for the blob
        const blobUrl = URL.createObjectURL(blob);

        // Create a temporary anchor element
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = "adarsh_react_dev.pdf";

        // Programmatically trigger the download
        a.click();

        // Revoke the object URL to free up resources
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("There was a problem with the downloading this file:", error);
      });
  };
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
                <p className="nav-resume" onClick={handleDownload}>
                  Resume {downloadLogo}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
