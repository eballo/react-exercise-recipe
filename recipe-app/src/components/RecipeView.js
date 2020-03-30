import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './RecipeView.css';
import uuid from 'react-uuid'

class RecipeView extends Component{
    construct(props){
        this.super(props);
    }
    
    render(){
        let recipe = this.props.recipes.find(r => r.id === this.props.id);
        return(
                <div className="RecipeView-container">
                    <div className="RecipeView-card u-clearfix">
                        <div className="RecipeView-card-body">
                            <h2 className="RecipeView-card-title">{recipe.name}</h2>
                            <span className="RecipeView-card-description subtle">{recipe.description}</span><br/>
                            {recipe.ingredients.map((p) =>(
                                <span key={uuid()} className="subtle">{p.name} </span>
                            ))}
                            <div className="RecipeView-card-read">
                                <Link to={'/recipes/edit/'+recipe.id+'/'}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default RecipeView;

