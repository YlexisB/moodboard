import React from "react";

export default function Emotion({ title, paragraph, color }) {
  return (
    <div id="section-3">
      <div className="description">
        <h1 style={{ color }}>{title}</h1>
        <p>{paragraph}</p>
        <div id="api-images"></div>
      </div>
    </div>
  );
}
