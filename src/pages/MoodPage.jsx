import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Draggable from "react-draggable";
import { MOODPAGE_STUFF } from "../constants.js";

const MoodPage = () => {
  const { title } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];

    const filteredImages = savedImages.filter((image) => image.title === title);

    if (filteredImages.length > 0) {
      const allImages = filteredImages.flatMap((image) => image.images);
      setImages(allImages);
    } else {
      console.log("No images found for the title:", title);
      setImages([]);
    }
  }, [title]);

  const handleDeleteImage = (imageId) => {
    const updatedImages = images.filter((image) => image.id !== imageId);
    setImages(updatedImages);

    const storedImages = JSON.parse(localStorage.getItem("images")) || [];
    const updatedStoredImages = storedImages.map((storedImage) => {
      if (storedImage.title === title) {
        return {
          ...storedImage,
          images: storedImage.images.filter((image) => image.id !== imageId),
        };
      }
      return storedImage;
    });

    localStorage.setItem("images", JSON.stringify(updatedStoredImages));
  };

  return (
    <div>
      <div id="moodboard-section">
        <h1>{title}</h1>
        <span>
          <h4>{MOODPAGE_STUFF.moodpagePara}</h4>
        </span>
        <div className="personalpage-container">
          {images.map((image) => (
            <Draggable key={image.id}>
              <div className="image-drag">
                <img className="indi-image" src={image.src} alt={image.alt} />
                <button
                  className="delete-image-button"
                  onClick={() => handleDeleteImage(image.id)}
                >
                  Delete
                </button>
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodPage;
