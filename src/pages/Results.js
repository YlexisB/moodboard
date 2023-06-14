import React from "react";
import Header from "../components/Header.js";
import Apiload from "../components/Apiload.js";
import Emotion from "../components/Emotion.js";
import emotionData from "../emotionData.json";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Results({}) {
  const location = useLocation();
  const color = location.state && location.state.color;
  const { id } = useParams();
  const emotionItem = emotionData.find((item) => item.id === id);
  return (
    <div>
      <Header />

      {emotionItem ? (
        <Emotion
          title={emotionItem.title}
          paragraph={emotionItem.paragraph}
          color={color}
        />
      ) : (
        <p>No emotion data available.</p>
      )}
      <Apiload id={id} />
    </div>
  );
}
