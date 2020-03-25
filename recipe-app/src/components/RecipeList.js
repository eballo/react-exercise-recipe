import React, { Component } from 'react'
import './RecipeList.css'
import Recipe from './Recipe.js'

class RecipeList extends Component{
    render(){
        return(
            <div>
                <div className="RecipeList-container">  
                    <ul>
                        <li><Recipe/></li>
                        <li><Recipe/></li>
                        <li><Recipe/></li>
                    </ul>
                </div>
            </div>
            );
    }
}

export default RecipeList;