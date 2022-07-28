import React, { useState } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import style from "./search.module.css";
import axios from "axios";

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async (options) => {
    setLoading(true);
    const APIKEY = process.env.REACT_APP_S_API_KEY;
    const mindQuery =
      options.mindOptions.length > 0
        ? `&${options.mindOptions.join("&")}`
        : null;
    const dietQuery =
      options.dietOptions.length > 0
        ? `&${options.dietOptions.join("&")}`
        : null;
    const searchQuery = options.query;
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeNutrition=true&addRecipeInformation=true&sort=healthiness${
      mindQuery ? mindQuery : ""
    }${dietQuery ? dietQuery : ""}&query=${searchQuery}&number=9&offet=1`;
    try {
      const res = await axios.get(URL);
      setResults(res.data.results);
      setLoading(false);
      setError(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className={style.searchSection}>
      <SearchBox confirmedOptions={fetchData} />
      {results.length === 0 ? (
        <div className={style.emptyContainer}> </div>
      ) : (
        <SearchResult isError={error} data={results} loading={loading} />
      )}
    </div>
  );
};

export default Search;
