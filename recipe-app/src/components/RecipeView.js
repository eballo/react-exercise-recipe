import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './RecipeView.css';
import uuid from 'react-uuid'

class RecipeView extends Component{
    construct(props){
        this.super(props);
    }
    
    render(){
        let id = this.props.id -1;
        return(
                <div className="RecipeView-container">
                    <div className="RecipeView-card u-clearfix">
                        <div className="RecipeView-card-body">
                            <h2 className="RecipeView-card-title">{this.props.recipes[id].name}</h2>
                            <span className="RecipeView-card-description subtle">{this.props.recipes[id].description}</span><br/>
                            {this.props.recipes[id].ingredients.map((p) =>(
                                <span key={uuid()} className="subtle">{p.name} </span>
                            ))}
                            <div className="RecipeView-card-read">
                                <Link to={'/recipes/edit/'+this.props.id+'/'}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default RecipeView;

