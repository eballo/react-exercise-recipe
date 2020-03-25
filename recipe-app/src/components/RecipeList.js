import React, { Component } from 'react'
import Recipe from './Recipe.js'

class RecipeList extends Component{
    render(){
        return(
                <div>
                    <h1>List Of Recipes</h1>
                    <Recipe/>
                    <Recipe/>
                    <Recipe/>
                </div>
            );
    }
}

export default RecipeList;