import React, { useState } from "react";
import Moodboardform from "./Moodboardform";

const ImageTiles = ({
  imageSrc,
  onClick,
  isExpanded,
  isOversized,
  onExitClick,
  inputs,
  selectedImageSrc,
  setSelectedImageSrc,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleImageClick = () => {
    setSelectedImageSrc(imageSrc);
    onClick();
  };

  const handleImageExitClick = () => {
    setShowForm(false);
    onExitClick();
  };

  const handleFormExitClick = () => {
    setShowForm(false);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  return (
    <div
      className={`image-tile ${isExpanded ? "image-tile-expanded" : ""}`}
      style={isExpanded ? { zIndex: 1 } : null}
    >
      {isExpanded && (
        <div className="expanded-overlay">
          <div className="button-container">
            <button id="exit-button" onClick={handleImageExitClick}>
              x
            </button>
            <a id="save-button" href="#" onClick={handleSaveClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Save To Moodboard
            </a>
          </div>
          <img src={imageSrc} alt="" className="expanded-image" />
          {showForm && (
            <Moodboardform
              handleFormExitClick={handleFormExitClick}
              setShowForm={setShowForm}
              inputs={inputs}
              handleImageClick={handleImageClick}
              selectedImageSrc={selectedImageSrc}
              setSelectedImageSrc={setSelectedImageSrc}
            />
          )}
        </div>
      )}

      <img
        src={imageSrc}
        alt=""
        onClick={handleImageClick}
        className={`${isExpanded ? "hidden" : ""} ${
          isOversized ? "oversized" : ""
        }`}
      />
    </div>
  );
};

export default ImageTiles;
