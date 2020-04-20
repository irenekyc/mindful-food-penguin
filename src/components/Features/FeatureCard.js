import React from 'react'
import style from './feature.module.css'
import {Link } from 'react-router-dom'

const featureCard =(props)=>{

    return(
        <div className={style.featureCard}> 
            <div className={style.featuredCardBG}>
                <img src={props.topic.details.img} alt={props.topic.features}/>
            </div>
            <div className={style.featureCardContent}>
                <p className={style.topictitle}> <Link to={`/categories/${props.topic.features}`}>{props.topic.features} </Link></p>

            </div>
        </div>
    )
}

export default featureCard