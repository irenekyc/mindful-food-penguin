import React, { useState } from "react";
import style from "./search.module.css";
import mindOptions from "./mindoptions";
import dietOptions from "./dietoptions";

const SearchBox = ({ confirmedOptions }) => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [diets, setDiets] = useState([]);

  const onSubmitHandler = () => {
    confirmedOptions({
      query,
      mindOptions: options,
      dietOptions: diets,
    });
  };

  const onClickDietOptionHandler = (e) => {
    if (e.target.checked) {
      if (!diets.includes(e.target.id)) {
        setDiets([...diets, e.target.id]);
      }
    } else {
      setDiets(diets.filter((option) => option !== e.target.id));
    }
  };

  const onClickOptionHandler = (e) => {
    if (e.target.checked) {
      if (!options.includes(e.target.id)) {
        setOptions([...options, e.target.id]);
      }
    } else {
      setOptions(options.filter((option) => option !== e.target.id));
    }
  };

  return (
    <div className={style.searchBox}>
      <form>
        <input
          type="text"
          placeholder="Search by your favourite food"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <div className={style.searchOptionsDiet}>
          {dietOptions.map((option) => {
            return (
              <div className={style.option} key={option.searchvalue}>
                <input
                  type="checkbox"
                  id={option.searchvalue}
                  name={option.option}
                  onClick={onClickDietOptionHandler}
                />
                <label htmlFor={option.searchvalue}>{option.option}</label>
              </div>
            );
          })}
        </div>

        <div className={style.searchOptionMind}>
          {mindOptions.map((option) => {
            return (
              <div className={style.option} key={option.searchvalue}>
                <input
                  type="checkbox"
                  id={option.searchvalue}
                  value={option.searchvalue}
                  name={option.value}
                  onClick={onClickOptionHandler}
                />
                <label htmlFor={option.searchvalue}>{option.option}</label>
              </div>
            );
          })}
        </div>
        <input
          type="submit"
          value="Search"
          onClick={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        />
      </form>
    </div>
  );
};

export default SearchBox;
