import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe.js';
import axios from "axios";

class RecipeList extends Component{
    constructor(props){
        super(props);
        this.state = { recipes: [] };
    }
    async componentDidMount(){
        //Load recipes
        let res = await axios.get("http://localhost:8000/api/recipes/", {
            headers:{ Accept: "application/json"}
        });
        
        this.setState({ recipes: res.data})
    }
    render(){
        return(
            <div>
                <div className="RecipeList-container">  
                    <ul>
                        {this.state.recipes.map(j =>(
                            <li key={j.id}>
                                <Recipe id={j.id} 
                                        name={j.name} 
                                        description={j.description} 
                                        ingredients={j.ingredients}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            );
    }
}

export default RecipeList;