import React from 'react'
import style from './footer.module.css'

const footer = ()=>{

    return(
        <div className={style.footerContainer}>
            <div className={style.socialmedia}> 
                <h3>Follow us on </h3>
                <span><i class="fab fa-instagram"></i> </span> <span> <i class="fab fa-facebook-f"></i></span>
            </div>
            <div className={style.credits}>
                 <p>Recipes sources are empowered by <a href="https://spoonacular.com/">spoonacular</a></p>
                <p> <i class="fas fa-laptop-code"></i> Developed with React and json-server by Irene K. April 2020</p>
            </div>

        </div>
    )

}

export default footer