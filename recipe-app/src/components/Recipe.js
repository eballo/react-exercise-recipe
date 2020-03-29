import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Recipe.css';
import uuid from 'react-uuid'

class Recipe extends Component{
    contructor(props){
        this.super(props);
    }

    render(){
    return(
            <div className="Recipe-container">
                <div className="Recipe-card u-clearfix">
                    <div className="Recipe-card-body">
                        
                        <h2 className="Recipe-card-title">{this.props.name}</h2>
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