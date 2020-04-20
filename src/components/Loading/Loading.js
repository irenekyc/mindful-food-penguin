import React from 'react'
import style from './loading.module.css'

const loading = ()=>{

    return(
        <section className={style.emptyContainer}>
            <div className={style.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>)

    
}

export default loading