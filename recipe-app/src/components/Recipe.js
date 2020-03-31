import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RecipeAPI from './RecipeAPI.js'
import './Recipe.css';
import uuid from 'react-uuid'

class Recipe extends Component{
    constructor(props){
        super(props);

        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
    }

    async deleteRecipes(){
        let res = await RecipeAPI.deleteRecipe('recipes/'+this.props.id+'/');
        if(res?.status === 204){
          console.log('Successful delete');
          let new_recipes = this.props.recipes.filter(recipe => recipe.id !== parseInt(this.props.id));
          this.props.handleRecipeChange(new_recipes);
        }else{
          console.log('something went wrong while deleting');
        }    
    }

    handleRecipeDelete(event){
        event.preventDefault();
        this.deleteRecipes();
    }

    render(){
    return(
            <div className="Recipe-container">
                <div className="Recipe-card u-clearfix">
                    <div className="Recipe-card-body">
                        <h2 className="Recipe-card-title">{this.props.name}</h2>
                        <span className="Recipe-card-delete" onClick={this.handleRecipeDelete}><i className="fa fa-trash" aria-hidden="true"></i></span>
                        <span className="Recipe-card-description subtle">{this.props.description}</span>
                        <div className="Recipe-card-read">
                            <Link to={'/recipes/view/'+this.props.id} >Read</Link>
                        </div>
                            {this.props.ingredients.map((p) =>(
                                <span key={uuid()} className="subtle">{p.name} </span>
                            ))}
                    </div>
                </div>
                <div className="Recipe-card-shadow"></div>
            </div>
            );
    }
}

export default Recipe;