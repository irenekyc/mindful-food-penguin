import React, {Component} from 'react'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'
import style from './search.module.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: " ",
            dietOption: " ",
            mindOption: " ",
            dataReady: false,
            searchResults: [],
            url:null,
            vegetarian: false,
            vegan:false,
            searchError: false
        };
        let queryString = []
        const mindOption = 
            [
                {
                    title: "lowcalories",
                    checked: false,
                    uncheckvalue: "&maxCalories=600",
                    checkedvalue: "&maxCalories=400"
                },
                {
                    title: "lowsugar",
                    checked: false,
                    uncheckvalue: "&minSugar=0",
                    checkedvalue: "&maxSugar=1"
                },
                {
                    title: "lowcarb",
                    checked:false,
                    uncheckvalue: "&minCarbs=0",
                    checkedvalue:"&maxCarbs=10"
                },
                {
                    title: "highfiber",
                    checked:false,
                    uncheckvalue: "&minFiber=0",
                    checkedvalue: "&minFiber=20"
                },
                {
                    titie: "highprotein",
                    checked: false,
                    uncheckvalue: "&minProtein=0",
                    checkedvalue: "&minProtein=30"
                },
                {
                    title: "highvitaminc",
                    checked: false,
                    uncheckvalue: "&minVitaminC=0",
                    checkedvalue: "&minVitaminC=50"
                }
            ]

        let mindOptions
        
        let dietOption = {
            vegetarian: false,
            vegan: false,
            dairyfree: false,
            glutenfree: false
            }
        this.searchQueryHandler = (e)=>{
            const query = e.target.value.toString()
            queryString.push(query)
        }

        this.dietOptionHandler = (e)=>{
            const option= e.target.id
            Object.keys(dietOption).map((key)=>{
                if(key === option){
                    if(!dietOption[key]){
                        return dietOption[key] = true
                    } else {
                        return dietOption[key] = false
                    }
                }  
            })
        
    }
        this.mindOptionHandler = (e)=>{
            const i = e.target.id
            mindOption[i].checked? mindOption[i].checked=false : mindOption[i].checked =true
    
        }

        this.submitHandler = (e)=>{
            e.preventDefault()
      
    
            if (queryString.length>0){
                let dietQuery = ""
                let query
                
                let finalMindOption =[]

                mindOption.map((option)=>{
               
                    if (option.checked){
                        return finalMindOption.push(option.checkedvalue)
                    }  else {
                        return finalMindOption.push(option.uncheckvalue)
                    }
                })
                const mindQuery = finalMindOption.join("")
            
            
            
                const finalDietOptions =  Object.keys(dietOption).filter((key)=>{
                    return dietOption[key]
                  })
                if (finalDietOptions.length>0){
                    dietQuery="&diet="
                    if (finalDietOptions.length>1){
                        query = finalDietOptions.join(',')
                    } else {
                         query= finalDietOptions[0]
                    }
                    dietQuery= dietQuery.concat(query)
                }
        
         
                    const APIKEY=process.env.REACT_APP_S_API_KEY
                    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeNutrition=true&addRecipeInformation=true&sort=healthiness${mindQuery}${dietQuery}&query=${queryString[queryString.length-1]}&number=9&offet=1`
         
                this.setState({
                    searchString: queryString[queryString.length-1],
                    dietOption: dietQuery,
                    mindOption: mindQuery,
                    searchResults: null,
                    dataReady: false,
                    url: URL
                 })     
            }           
    }
            this.getData =  async()=>{
               
                const response = await fetch(this.state.url)
                const data = await response.json()
  
                if(data.status === "failure"){
                    return this.setState(prevState=>{
                       return {...prevState, searchError:true, dataReady:true, url:null}

                })} 
        
                const results = data.results
                    this.setState({
                        dataReady: true, 
                        url: null, 
                        searchResults:results,
                        searchString: " ",
                        dietOption:" ",
                        mindOption: " ",
                    })
                
                }
                
                
    }

    
    componentDidUpdate(){
        if (this.state.url !== null) {
            this.getData()
        }
      }
    render(
       
    ){
        return(
            <div className={style.searchSection}>
                <SearchBox query={this.searchQueryHandler} 
                submit={this.submitHandler}
                dietOption={this.dietOptionHandler}
                mindOption={this.mindOptionHandler}/>
                {this.state.dataReady? <SearchResult isError={this.state.searchError} data={this.state.searchResults}/> : 
                <div className={style.emptyContainer}> </div>}
                
            </div>
                
        )
    }
   
} 

export default Search