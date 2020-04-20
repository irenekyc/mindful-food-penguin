import React from 'react'
import style from './search.module.css'
import SearchOptions from './SearchOptions'

const searchBox = (props)=> {
    return(
        <div className={style.searchBox}>
            <form>
                <input type="text" placeholder="Search by your favourite food" onChange={props.query}/>
               <SearchOptions dietOption={props.dietOption} mindOption={props.mindOption}/> 
               <input type="submit" value="Search" onClick={props.submit}/>
            </form>
            
           
        </div>
    )

    }

export default searchBox
