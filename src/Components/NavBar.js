import React from "react";

import { downloadLogo } from "../Constants";

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
          <a className="navbar-brand" href="/">
            <h3 className="nav-head-name">Adarsh Mahendrakar</h3>
            <button className="btn">Front-End Developer</button>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-home" href="#">
                  {"< Home />"}
                </a>
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