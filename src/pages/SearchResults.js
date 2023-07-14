import React, { useEffect, useState } from "react";
import Apiload from "../components/Apiload";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  let [searchParams] = useSearchParams();

  console.log("search", searchParams.get("search"));

  return (
    <div>
      <div id="search-section">
        <h1>{searchParams.get("search")}</h1>
      </div>
      <Apiload query={searchParams.get("search")} />
    </div>
  );
};

export default SearchResults;
