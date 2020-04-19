import React from 'react';
import '../styles/RecipeList.css';
import Recipe from './Recipe.js';

export default function RecipeList(props){

    return(
            <div className="RecipeList-container">  
                <ul>
                { props.recipes.map((recipe) => { 
                    return (    
                            <li key={recipe.id}>
                                <Recipe key={recipe.id} 
                                        id={recipe.id} 
                                        name={recipe.name} 
                                        description={recipe.description} 
                                        ingredient={props.getIngredient(props.findRecipeById(recipe.id))}
                                        handleRecipeChange={props.handleRecipeChange} 
                                        handleRecipeDelete={props.handleRecipeDelete}
                                        />
                            </li>
                            );
                    })
                }
                </ul>
            </div>
        );
}