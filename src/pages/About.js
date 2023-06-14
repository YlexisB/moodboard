/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
const About = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  return (
    <div id="about-section">
      <Header />
      <div id="moodboard-section">
        <div className="personalpage-container">
          <div className="gif-about">
            {!iframeLoaded && <Loader />}
            <iframe
              src="https://giphy.com/embed/kQ9aNZug7SX3LsZD2U"
              frameBorder="0"
              className={`giphy-embed ${iframeLoaded ? "visible" : ""}`}
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
          <p>
            <a href="https://giphy.com/gifs/kQ9aNZug7SX3LsZD2U"></a>
          </p>
          <div className="about-stuff">
            <h1 className="about-title">About Us</h1>

            <p>
              Introducing Snapstill, where moodboarding meets movie magic! Our
              whimsically designed platform is the perfect companion for
              seasoned creatives and budding filmmakers alike. With just a few
              clicks, you can dive into the captivating world of moodboards and
              unleash your creative genius.
              <br /> Snapstill offers a plethora of emotions to explore, ranging
              from happy and love-filled moments to the depths of sadness, fear,
              anger, and even the unexpected jolt of surprise. We've got all the
              feels covered! Our carefully curated categories provide a wide
              array of captivating images that will make your storytelling
              journey truly unforgettable. <br />
              But wait, there's more! We believe in embracing your unique
              vision, which is why we've equipped Snapstill with a powerful
              search engine. Want a fierce dragon in your love-themed moodboard?
              Go ahead, search it up! Unleash your imagination, and our search
              engine will do its magic to bring your wildest concepts to life.
              Whether you're an experienced filmmaker or just dipping your toes
              into the world of cinema, Snapstill is here to make your
              moodboarding experience a breeze. So, grab your popcorn, unleash
              your creativity, and get ready to capture the perfect essence for
              your next film project. Lights, camera, moodboard!
            </p>
            {/* MOVE TEXT A A TAG TO CONSTANTS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
