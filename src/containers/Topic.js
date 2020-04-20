import React, {Component} from 'react'
import TopicHeader from '../components/Topic/TopicHeader'
import SearchResult from '../components/Search/SearchResult'
import Loading from '../components/Loading/Loading'

class Topic extends Component {
    constructor(props){
        super(props)
        this.state = {
            topic: this.props.match.params.topic,
            details: null,
            recipes: null,
            dataReady: false,
            recipeReady: false,
            filterQuery: "",
            options: {
                vegetarian: false,
                vegan: false,
                glutenfree: false,
                dairyfree:false
            }
        }

        this.fetchData =  async ()=>{

            const response = await fetch(`https://mindful-food-penguin.herokuapp.com/db/data?features=${this.state.topic}`)
            const data = await response.json()
            const featureDetails = data[0].details

            this.setState(prevState=>{
                return{...prevState,
                topic: this.props.match.params.topic,
                details: featureDetails,
                dataReady:true,
            }})


           
           
        }

        this.fetchRecipe = async () =>{

            let orginalMindQuery = ["&minVitaminC=0", "&minFiber=0", "&minCarbs=0", "&minProtein=0", "&minCalories=0", "&minSugar=0"]
            orginalMindQuery[this.state.details.id]=this.state.details.searchQuery
            const mindQuery=orginalMindQuery.join("")
           
            const APIKEY=process.env.REACT_APP_S_API_KEY
            const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeNutrition=true&addRecipeInformation=true&sort=healthiness&sort=random${mindQuery}${this.state.filterQuery}&number=9&offet=1`
            console.log(URL)
            const response = await fetch(URL)
            const data = await response.json()
            const recipes = data.results
            console.log(recipes)

            this.setState(prevState=>{
                return { ... prevState, 
                    recipes: recipes,
                    recipeReady: true
                }
            })
        }
 
        this.filterHandler = (e)=>{
            //apply filter
            const option = e.target.id
            const oldStateOptions = this.state.options
            Object.keys(oldStateOptions).map((key)=>{
                if (key===option){
                    oldStateOptions[key]? oldStateOptions[key]=false : oldStateOptions[key]=true
                }
            })
    
            //apply filterquery
            const curFilter = this.state.options
            let dietQuery  = []
            Object.keys(curFilter).map((option)=>{
               return curFilter[option]? dietQuery.push(option) : null
            })
            dietQuery = dietQuery.join(",")
            
            this.setState(prevState=>{
                return{...prevState, 
                    recipeReady: false,
                    filterQuery: `&diet=${dietQuery}`
                }
            })
        }

    }


    componentDidMount(){
        if (!this.state.dataReady){
            this.fetchData()
        } 
    }

    componentDidUpdate(){
        if(!this.state.recipeReady){
            this.fetchRecipe()
        }
    }

  

    render(){

        return( 
        <div>
            {this.state.dataReady? 
                <TopicHeader topic={this.state.topic} details={this.state.details} 
                filterHandler={this.filterHandler} filterClass={this.state.options}/> :null}
            {this.state.recipeReady? <SearchResult data={this.state.recipes}/> : 
            <Loading />}
        </div>
           )
       
    }
}
     

export default Topic