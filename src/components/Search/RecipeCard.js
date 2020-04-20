import React from 'react'
import style from './search.module.css'

const recipeCard =(props)=>{
return (
    <div className={style.resultCard}>
        <img src={props.data.image} alt={props.data.title}></img>
        <div className={style.resultCardCover}>
            <div className={style.flexOne}>
                <p className={style.Bold}>{props.data.title} </p>
            </div>
            <div className={style.details}>
                <p> Ready in <span className={style.strong}>{props.data.readyInMinutes}</span>  Mins</p>
                <p> Go to  <a href={props.data.sourceUrl} target="_blank">this recipe</a> </p>
            </div>
             
             <div className={style.recipeLabels}>
                {props.data.vegetarian? <span> Vegatarian</span>: null}
                {props.data.vegan? <span> Vegan</span>: null}
                {props.data.glutenFree? <span> Gluten Free</span>: null}
                {props.data.dairyFree? <span> Dairy Free</span>: null}
                {props.data.sustainable? <span> Sustainable</span>: null}
             </div>
     
        </div>
        
    
        <div className={style.resultCardHide}>
             <p className={style.HideTitle}>Nutrition Fact</p>
             <div className={style.table}>
              
                 <table>
                 {props.data.nutrition.map((n)=>
                {
                return  <tr className={style.nutritionRow}>
                        <td className={style.rowTitle}> {n.title}  </td>
                        <td className={style.rowRight}>{n.amount.toFixed(2)}  {n.unit}</td> </tr>            
                })}
                 </table>
           
    
             </div>
          
      
      </div>
        
    </div>
)

}

export default recipeCard