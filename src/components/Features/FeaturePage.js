import React from 'react'
import style from './featurePage.module.css'
import { Link } from 'react-router-dom'


const featurePageCard = (props)=>{
    console.log(props.data)
    return(
        <div className={style.featurePageCard}>
            <img src={props.data.details.img} alt={props.data.features}/>
            <div className={style.featureInfo}>
                <h3 className={style.featureTitle} >{props.data.features}</h3>
                <p> Why you have to mind your {props.data.features}?</p>
                <p> {props.data.details.description}</p>
                <Link to={`/categories/${props.data.features}`}><button className={style.btn}> Get Recipes </button></Link>
            </div>
        </div>

    )
}

export default featurePageCard