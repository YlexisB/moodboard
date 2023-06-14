import React, { useEffect, useState } from "react";

import Header from "../components/Header";

import Apiload from "../components/Apiload";
import { useSearchParams } from "react-router-dom";

const SearchResults = ({ query }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query]);
  console.log(query);

  console.log("search", searchParams.get("search"));

  return (
    <div>
      <Header />
      <div id="search-section">
        <h1>{searchParams.get("search")}</h1>
      </div>
      <Apiload query={searchParams.get("search")} />
    </div>
  );
};

export default SearchResults;
