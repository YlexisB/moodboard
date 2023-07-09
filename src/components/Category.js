import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const navigateToResults = (emotionData) => {
    navigate(`/Results/${emotionData.id}`, {
      state: { color: emotionData.color },
    });
  };

  const handleClick = (id, color) => {
    navigateToResults({ id, color });
  };

  return (
    <div id="section-2">
      <div id="categories">
        <div
          id="happy"
          onClick={() => handleClick("happy", "dbdf10")}
          className="div1"
        >
          <h1>happy</h1>
        </div>
        <div
          id="love"
          onClick={() => handleClick("love", "#fc10d6")}
          className="div2"
        >
          <h1>love</h1>
        </div>
      </div>
      <hr />
      <div id="categories">
        <div
          id="sad"
          onClick={() => handleClick("sad", "#2748f2")}
          className="div3"
        >
          <h1>sad</h1>
        </div>
        <div
          id="fear"
          onClick={() => handleClick("fear", "#ff5b5b")}
          className="div4"
        >
          <h1>fear</h1>
        </div>
      </div>
      <hr />
      <div id="categories">
        <div
          id="anger"
          onClick={() => handleClick("anger", "#ea8c00")}
          className="div5"
        >
          <h1>anger</h1>
        </div>
        <div
          id="surprise"
          onClick={() => handleClick("surprise", "#00c6a2")}
          className="div6"
        >
          <h1>surprise</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
