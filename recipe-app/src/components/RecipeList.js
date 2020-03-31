import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe.js';


class RecipeList extends Component{

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
                                        ingredients={j.ingredients}
                                        handleRecipeChange={this.props.handleRecipeChange} 
                                        recipes={this.props.recipes} 
                                        />
                            </li>
                        ))}
                    </ul>
                </div>
            );
    }
}

export default RecipeList;