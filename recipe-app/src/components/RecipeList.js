import React from 'react';
import '../styles/RecipeList.css';
import Recipe from './Recipe.js';

export default function RecipeList(props){
    return(
            <div className="RecipeList-container">  
                <ul>
                {props.recipes.map(j =>(
                        <li key={j.id}>
                            <Recipe key={j.id} 
                                    id={j.id} 
                                    name={j.name} 
                                    description={j.description} 
                                    ingredients={j.ingredients}
                                    handleRecipeChange={props.handleRecipeChange} 
                                    handleRecipeDelete={props.handleRecipeDelete}
                                    />
                        </li>
                    ))}
                </ul>
            </div>
        );
}