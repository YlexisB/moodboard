import React, { useEffect, useState } from "react";
import Apiload from "../components/Apiload";
import { useSearchParams } from "react-router-dom";

const SearchResults = ({ query }) => {
  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query]);
  console.log(query);

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
