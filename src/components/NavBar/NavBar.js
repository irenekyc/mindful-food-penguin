import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'


const navBar = ()=>{

    return(

        <nav>
            <div className={style.LOGO}> <Link to="/"><img src="/images/logo-100.png" alt="Mindful food penguin" /></Link></div>
            <ul>
                <li> 
                    <Link to="/categories">Mind your diet</Link> </li>
                   <a href="#about-section"> <li>  About </li></a>
                    <li><Link to="/search" >Search</Link></li>    
            </ul>
        </nav>

        
    )

}

export default navBar