import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './RecipeView.css';
import uuid from 'react-uuid'

class RecipeView extends Component{
    
    render(){
        
        if(!this.props.recipe){
            return <div><i className="fa fa-spinner" aria-hidden="true">L O A D I N G . . . </i></div>;
        }

        return(            
            <div className="RecipeView-container">
                <div className="RecipeView-card u-clearfix">
                    <div className="RecipeView-card-body">
                        <h2 className="RecipeView-card-title">{this.props.recipe.name}</h2>
                        <span className="RecipeView-card-description subtle">{this.props.recipe.description}</span><br/>
                        {this.props.recipe.ingredients?.map((p) =>(
                            <span key={uuid()} className="subtle">{p.name} </span>
                        ))}
                        <div className="RecipeView-card-read">
                            <Link to={'/recipes/edit/'+this.props.recipe.id+'/'}>Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeView;

