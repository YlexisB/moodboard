import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Results from "./pages/Results";
import Personalboard from "./pages/Personalboard";
import MoodPage from "./pages/MoodPage";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Results/:id" element={<Results />} />
        <Route path="/Personalboard/" element={<Personalboard />} />
        <Route path="/MoodPage/:title" element={<MoodPage />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/SearchResults/" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
