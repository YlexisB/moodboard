import React, { useState, useEffect } from "react";
import MoodThumbnail from "../components/MoodThumbnail.jsx";

const Personalboard = () => {
  const [titles, setTitles] = useState([]);

  const [selectedImageSrc, setSelectedImageSrc] = useState("");

  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem("inputs"));

    if (storedInputs) {
      setTitles(storedInputs.map((input) => input.value));
    }
  }, []);

  const handleThumbnailClick = (imageSrc) => {
    setSelectedImageSrc(imageSrc);
  };

  return (
    <div>
      <div id="moodboard-section">
        <h1>Moodboards</h1>
        <div className="personalpage-container">
          {titles.map((title, index) => (
            <MoodThumbnail
              key={index}
              title={title}
              titles={titles}
              setTitles={setTitles}
              selectedImageSrc={selectedImageSrc}
              onThumbnailClick={handleThumbnailClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personalboard;
