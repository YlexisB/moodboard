import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import ImageTiles from "./ImageTiles";
import emotionData from "../emotionData.json";

const Apiload = ({ id, query }) => {
  const [pexelData, setPexelData] = useState({ photos: [] });
  const [page, setPage] = useState(1);
  const [expandedImageId, setExpandedImageId] = useState("");
  const [selectedImageSrc, setSelectedImageSrc] = useState("");

  // const fetchData = async (keyword) => {
  //   try {
  //     const res = await axios.get(PEXELS_API_URL(keyword, page), {
  //       headers: {
  //         Authorization: process.env.REACT_APP_PEXELS_API_KEY,
  //       },
  //     });

  const fetchData = async (keyword) => {
    try {
      const res = await axios.get("/.netlify/functions/proxy", {
        params: {
          keyword,
          page,
        },
      });

      setPexelData((prev) => ({
        ...prev,
        photos: [...prev.photos, ...res.data.photos],
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData(query);
    } else {
      const emotionItem = emotionData.find((item) => item.id === id);

      if (emotionItem) {
        fetchData(emotionItem.id);
      }
    }
  }, [id, page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (imageId, imageSrc) => {
    setExpandedImageId(imageId);
    setSelectedImageSrc(imageSrc);
  };

  const handleExitClick = () => {
    setExpandedImageId("");
  };

  return (
    <div>
      {pexelData === null ? (
        <Loader />
      ) : (
        <div className="image-tile-container">
          {pexelData.photos &&
            pexelData.photos.map((ele) => (
              <ImageTiles
                key={ele.id}
                imageSrc={ele.src.medium}
                onClick={() => handleClick(ele.id, ele.src.medium)}
                isExpanded={ele.id === expandedImageId}
                isOversized={ele.id === expandedImageId}
                onExitClick={handleExitClick}
                selectedImageSrc={selectedImageSrc}
                setSelectedImageSrc={setSelectedImageSrc}
                query={query}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Apiload;
