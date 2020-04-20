import React from 'react'
import style from './hero.module.css'
import {Link} from 'react-router-dom'

const hero = ()=>{

    return(
        <section className={style.HEROBG}>
            <div className={style.HEROcontent}>
                <h1> Let's us take care of your diet</h1>
                <Link to="/categories"><span className={style.discoverBtn}> Discover </span></Link>
            </div>
        </section>
    )
}

export default hero