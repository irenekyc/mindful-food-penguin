import React from 'react'
import style from './topic.module.css'
import {Link} from 'react-router-dom'

const topicHeader = (props)=>{

    return(
        <div className={style.topicHeader}>
          <h1> {props.topic}</h1>
          <p className={style.alignLeft}><Link to="/categories"> <i class="fas fa-chevron-left"></i> Back</Link> </p>
          <p> {props.details.excerpt}</p>
          <p> Suggested Daily Intake: {props.details.dailyIntake}</p>
          <div className={style.filterContainer}> 
          <span>Filter :</span>
          {Object.keys(props.filterClass).map((key)=>{
           return <span className={props.filterClass[key]? style.checkedFilter : style.filter} id={key} key={key} onClick={props.filterHandler}> 
                {key.toLocaleUpperCase()} </span> 
          })}
         
          </div>
    
        </div>
        
    )
}

export default topicHeader
