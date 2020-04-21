import React from 'react'
import style from './search.module.css'
import RecipeCard from './RecipeCard'



const searchResult = (props)=>{
    let searchResult = false
    if (!props.isError){
        if (props.data.length > 0){
            searchResult = true
        } else  {
             searchResult = false
        }
    }
   
    


return(
    <div className={style.resultContainer}>
    {props.isError? 
        <p> Sorry. Recipes function is temporarily unavailable </p> 
    : searchResult?
        props.data.map((result)=>{
        return <RecipeCard key={result.id} data={result}/>
     }) 
     : <p> Opps, no search result under the conditions, please try again with different conditions</p>
    }
    </div>   
)
}
export default searchResult