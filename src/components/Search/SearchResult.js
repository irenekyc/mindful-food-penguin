import React from "react";
import style from "./search.module.css";
import RecipeCard from "./RecipeCard";

const searchResult = ({ data, isError, loading }) => {
  let searchResult = false;
  if (!isError) {
    if (data.length > 0) {
      searchResult = true;
    } else {
      searchResult = false;
    }
  }

  return (
    <div className={style.resultContainer}>
      {loading && <h2>Loading...</h2>}
      {isError ? (
        <p> Sorry. Recipes function is temporarily unavailable </p>
      ) : searchResult ? (
        data.map((result) => {
          return <RecipeCard key={result.id} data={result} />;
        })
      ) : (
        <p>
          {" "}
          Opps, no search result under the conditions, please try again with
          different conditions
        </p>
      )}
    </div>
  );
};
export default searchResult;
