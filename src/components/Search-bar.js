import { useState } from "react";
import React from "react";
import axios from "axios";

import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let params = setSearchParams({ search: searchInput });
    navigate({
      pathname: "/SearchResults",
      search: createSearchParams({
        search: `${searchInput}`,
      }).toString(),
    });

    // console.log(params);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="serach-box"
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
