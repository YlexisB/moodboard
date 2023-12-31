import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

import { GiphyFetch } from "@giphy/js-fetch-api";

const MoodThumbnail = ({ title, titles, setTitles, onThumbnailClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [gifUrl, setGifUrl] = useState(null);

  useEffect(() => {
    const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

    const random = async () => {
      try {
        const { data } = await gf.random({
          tag: "color",
          rating: "g",
        });
        const gifUrl = data.images.original.url;
        setGifUrl(gifUrl);
      } catch (error) {
        console.error("Error fetching random GIF:", error);
      }
    };
    console.log("it works");
    random();
  }, []);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();

    const filteredTitles = titles.filter((t) => t !== title);
    localStorage.setItem("titles", JSON.stringify(filteredTitles));

    const storedInputs = JSON.parse(localStorage.getItem("inputs"));
    if (storedInputs) {
      const filteredInputs = storedInputs.filter(
        (input) => input.value !== title
      );
      localStorage.setItem("inputs", JSON.stringify(filteredInputs));
    }

    const storedImages = JSON.parse(localStorage.getItem("images"));
    if (storedImages) {
      const filteredImages = storedImages.filter(
        (image) => image.title !== title
      );
      localStorage.setItem("images", JSON.stringify(filteredImages));
    }

    setTitles(filteredTitles);
    if (filteredTitles.length === 0) {
      localStorage.removeItem("titles");
      localStorage.removeItem("inputs");
    }
  };

  const handleThumbnailClick = () => {
    onThumbnailClick(title);
  };

  return (
    <div
      className="moodboard-thumbnail"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleThumbnailClick}
    >
      <h3>{title}</h3>
      <Link to={`/MoodPage/${title}`} className="thumbnail-link">
        <div className="thumbnail-box">
          <div className="thumbnail-placeholder">
            {gifUrl === null ? (
              <Loader />
            ) : (
              gifUrl && <img id="giphy" src={gifUrl} alt="random-gif" />
            )}
          </div>
          <button
            className={`trash ${isHovering ? "visible" : ""}`}
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MoodThumbnail;
