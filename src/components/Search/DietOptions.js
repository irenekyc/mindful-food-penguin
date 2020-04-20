import React from 'react'
import style from './search.module.css'

const dietOption = (props)=>{
    const dietOptions =[
        {
            option: "Vegetarian",
            searchvalue: "vegetarian",

         },
        {
            option: "Vegan",
            searchvalue: "vegan",
    
        },
        {
            option: "Gluten Free",
            searchvalue: "glutenfree",

        },
        {
            option: "Diary Free",
            searchvalue: "dairyfree",

        }
        ]
    return(
        <div className={style.searchOptionsDiet}>
        {dietOptions.map((option)=>{
            return <div className={style.option}> 
                        <input type="checkbox" id={option.searchvalue} name={option.option} onClick={props.dietOption} />
                        <label for={option.searchvalue}>{option.option}</label> 
                    </div>
        })}
    </div>
    )
}

export default dietOption