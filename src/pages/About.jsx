/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from "react";

import Loader from "../components/Loader";
import { ABOUT_STUFF } from "../constants";

const About = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  return (
    <div id="about-section">
      <div id="moodboard-section">
        <div className="personalpage-container">
          <div className="gif-about">
            {!iframeLoaded && <Loader />}
            <iframe
              src={ABOUT_STUFF.giphy1}
              frameBorder="0"
              className={`giphy-embed ${iframeLoaded ? "visible" : ""}`}
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
          <p>
            <a href={ABOUT_STUFF.giphy}></a>
          </p>
          <div className="about-stuff">
            <h1 className="about-title">About Us</h1>

            <p>
              {ABOUT_STUFF.aboutPara1}
              <br />
              {ABOUT_STUFF.aboutPara2}
              <br />
              {ABOUT_STUFF.aboutPara3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
