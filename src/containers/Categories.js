import React, {Component} from 'react'
import FeaturePage from '../components/Features/FeaturePage'
import style from './categories.module.css'
import Loading from '../components/Loading/Loading'


class categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            features: null,
            onLoad: true,
            dataReady: false
        }

        this.fetchData = async ()=>{
            const response = await fetch('%PUBLIC_URL%/assets/db')
            const data = await response.json()
            this.setState({
                features: data.data,
                dataReady:true
            })

        }
    }

    componentDidMount(){
        if(this.state.onLoad){
            this.fetchData()
        }
    }

    componentDidUpdate(){
        if(this.dataReady){
            this.setState(prevState=>{
                return{...prevState, onLoad:false}
            })
        }
    }



    render(){
        return (
            <section>
                {this.state.dataReady?
                   <div className={style.categoriesPageHead}>
                    {this.state.features.map((feature)=>{
                        return  <FeaturePage data={feature}/> 
                    })}
                </div> : <Loading />}
        
            </section>
        )
    }



       
    

    
}


    // const topics = [ 
    //     {
    //         topic:"Vitamin",
    //         searchQuery: "&minVitaminC=50",
    //         img: "/images/topicPic/vitamin.jpg",
    //         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //         topic:"Fiber ",
    //         searchQuery: "&minFiber=20",
    //         img: "images/topicPic/fiber.jpg",
    //         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //         topic: "Carb",
    //         searchQuery: "&maxCarbs=10",
    //         img: "images/topicPic/carb.jpg ",
    //         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //         topic: "Protein",
    //         searchQuery: "&minProtein=30",
    //         img: "images/topicPic/protein.jpg",
    //         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //         topic: "Calories",
    //         searchQuery: "&maxCalories=400",
    //         img: "images/topicPic/calories.jpg",
    //         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     },
    //     {
    //         topic: "Sugar",
    //         searchQuery: "&maxSugar=1",
    //         img: "images/topicPic/sugar.jpg",
    //         description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     }]
  


export default categories