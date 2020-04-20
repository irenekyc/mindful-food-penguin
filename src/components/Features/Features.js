import React, {Component } from 'react'
import style from './feature.module.css'
import FeatureCard from './FeatureCard.js'

class features extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataReady: false,
            details: null
        }
    this.fetchDetails = async ()=>{
        const response = await fetch ('https://mindful-food-penguin.herokuapp.com/db')
        const data = await response.json()
        this.setState({
            dataReady:true,
            details: data.data
        })
    }

    }

    componentDidMount(){
        if (!this.state.dataReady){
            this.fetchDetails()
        }
    }

    render(){
        return(
            <section className={style.FeatureSection}>
                <h1 className={style.SectionTitle}> Mind your...</h1>
                <div className={style.FeatureDiv}>
                    {this.state.dataReady? 
                        this.state.details.map((feature)=>{ 
                        return <FeatureCard topic={feature}/> }) :null}
             
                </div>
            </section>
        )
    }
}


export default features