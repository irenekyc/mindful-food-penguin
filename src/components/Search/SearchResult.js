import React from 'react'
import style from './search.module.css'
import RecipeCard from './RecipeCard'



const searchResult = (props)=>{
    let searchResult 
    if (props.data.length > 0){
        searchResult = true
    } else  {
         searchResult = false
    }


return(
    <div className={style.resultContainer}>
    {searchResult? 
        props.data.map((result)=>{
        return <RecipeCard data={result}/>
     }) 
     : <p> Opps, no search result under the conditions, please try again with different conditions</p>
    }
    </div>   
)
}
export default searchResult