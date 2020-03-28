import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe.js';
import RecipeAPI from './RecipeAPI'

class RecipeList extends Component{

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        let res = await RecipeAPI.getRecipes('recipes/');
        this.props.handleRecipeChange(res.data);
    }

    render(){
        return(
                <div className="RecipeList-container">  
                    <ul>
                    {this.props.recipes.map(j =>(
                            <li key={j.id}>
                                <Recipe key={j.id} 
                                        id={j.id} 
                                        name={j.name} 
                                        description={j.description} 
                                        ingredients={j.ingredients}/>
                            </li>
                        ))}
                    </ul>
                </div>
            );
    }
}

export default RecipeList;