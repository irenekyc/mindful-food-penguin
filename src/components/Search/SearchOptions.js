import React from 'react'
import style from './search.module.css'
import DietOptions from './DietOptions'

const searchOptions = (props)=>{
  
    const mindDietOptions = [
        {
            id:0,
            value: "lowcalories",
            option: "Low Calories",
            searchvalue: "&maxCalories=400"
        },
        {
            id:1,
            option: "Low Sugar",
            value: "lowsugar",
            searchvalue: "&maxSugar=1"
        },
        {
            id:2,
            option: "Low Carb",
            value: "lowcarb",
            searchvalue: "&maxCarbs=10"
        },
        {
            id:3,
            option: "High Fiber",
            value: "highfiber",
            searchvalue: "&minFiber=20"
        },
        {
            id:4,
            option: "High Protein",
            value: "highprotein",
            searchvalue: "&minProtein=30"
        },
        {
            id:5,
            option: "High Vitamin C",
            value: "highvitaminc",
            searchvalue: "&minVitaminC=50"
        }
    ]

    return(
            <div className={style.searchOptions}>
                <DietOptions dietOption={props.dietOption}/>
                        <div className={style.searchOptionMind}>
                            {mindDietOptions.map((option)=>{
                                return <div className={style.option}> 
                                            <input type="checkbox" id={option.id} value={option.searchvalue} name={option.value} onClick={props.mindOption} />
                                            <label for={option.id}>{option.option}</label> 
                                        </div>
                            })}
                        </div>
            
            </div> 
    )

}

export default searchOptions