import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Results from "./pages/Results";
import Personalboard from "./pages/Personalboard";
import MoodPage from "./pages/MoodPage";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import { PAGE_LINKS } from "./constants";
import Layout from "./components/Layout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={PAGE_LINKS.homepageLink} element={<Homepage />} />
          <Route path={PAGE_LINKS.resultsLink} element={<Results />} />
          <Route path={PAGE_LINKS.personalbLink} element={<Personalboard />} />
          <Route path={PAGE_LINKS.moodPageLink} element={<MoodPage />} />
          <Route path={PAGE_LINKS.aboutLink} element={<About />} />
          <Route path={PAGE_LINKS.contactLink} element={<Contact />} />
          <Route
            path={PAGE_LINKS.searchResultsLink}
            element={<SearchResults />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
