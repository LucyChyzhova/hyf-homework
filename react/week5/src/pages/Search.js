import React, { useState } from "react";
import { Fetcher } from "../components/Fetcher";
//import UserPage  from "../pages/UserPage";
//import { Link } from "react-router-dom";

export const Search = ({}) => {
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");

  const handleClick = () => {
    setSubmitSearch(search);
    
  };
 
  return (
    <>
      <h2 className="center-position">This is a GithHub search page</h2>
      <div className="input-button">
        <input
          className="search"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="searchButton" onClick={handleClick}>
          Search
        </button>
      </div>

      <Fetcher
        search={submitSearch}
        render={({ data, error, loading }) => (
          <div>
            {loading && <div>Loading... </div>}
            {error && <div>No results</div>}

            {data &&
              data.map((item, key) => (
                <div key={key}>
                  <p>{item.login}</p>
                                   
                </div>
              ))}
          </div>
        )}
      />
    </>
  );
};
