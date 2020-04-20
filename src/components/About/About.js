import React from 'react'
import style from './About.module.css'

const about =()=>{

    return(
        <section className={style.AboutSection} id="about-section">
            <div  className={style.half}>
                <h3 className={style.divTitle}> Mindfulness Eating</h3>
                <div className={style.quote}>
                    <i class="fas fa-quote-left"></i>
                    <span> You are what you eat </span>
                    <i class="fas fa-quote-right"></i>
                </div>
               
                <p> Mindfulness eating is about using mindfulness to reach a state of full attention to your experiences, cravings, and physical cues when eating</p>
            </div>
            <div className={style.half}>
                <h3 className={style.divTitle}> Me </h3>
                <p className={style.strong}> </p>
               <p> I care about my diet </p>
                <p> I believe by eating mindfully, my body will receive freedom.</p>
                <p> I design and code this mindfulness eating recipes search engine, hopeing to help you in the search of freedom.</p>
                <p className={style.contacts}> <a href="https://github.com/irenekyc" target="_blank"><i class="fab fa-github"></i></a> <a href="https://irenekyc.github.io/my-site/" target="_blank"><i class="fas fa-laptop"></i> </a> </p>
           </div>
           
        </section>
    )
}

export default about