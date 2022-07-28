import React from "react";
import style from "./search.module.css";

const RecipeCard = ({ data, ...props }) => {
  return (
    <div className={style.resultCard} {...props}>
      <img src={data.image} alt={data.title}></img>
      <div className={style.resultCardCover}>
        <div className={style.flexOne}>
          <p className={style.Bold}>{data.title} </p>
        </div>
        <div className={style.details}>
          <p>
            {" "}
            Ready in <span className={style.strong}>
              {data.readyInMinutes}
            </span>{" "}
            Mins
          </p>
          <p>
            {" "}
            Go to{" "}
            <a href={data.sourceUrl} target="_blank" rel="noopener noreferrer">
              this recipe
            </a>{" "}
          </p>
        </div>

        <div className={style.recipeLabels}>
          {data.vegetarian ? <span> Vegatarian</span> : null}
          {data.vegan ? <span> Vegan</span> : null}
          {data.glutenFree ? <span> Gluten Free</span> : null}
          {data.dairyFree ? <span> Dairy Free</span> : null}
          {data.sustainable ? <span> Sustainable</span> : null}
        </div>
      </div>

      <div className={style.resultCardHide}>
        <p className={style.HideTitle}>Nutrition Fact</p>
        <div className={style.table}>
          <table>
            <tbody>
              {data.nutrition.nutrients.map((n) => {
                return (
                  <tr className={style.nutritionRow} key={n.name}>
                    <td className={style.rowTitle}> {n.name} </td>
                    <td className={style.rowRight}>
                      {n.amount.toFixed(2)} {n.unit}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
