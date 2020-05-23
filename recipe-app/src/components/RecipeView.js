import React from 'react';
import { Link } from "react-router-dom";
import '../styles/RecipeView.css';
import uuid from 'react-uuid'

export default function RecipeView(props){   
    if(!props.recipe){
        return <div><i className="fa fa-spinner" aria-hidden="true">L O A D I N G . . . </i></div>;
    }
    return(            
        <div className="RecipeView-container">
            <div className="RecipeView-card u-clearfix">
                <div className="Recipe-card-header">
                    <div className="Recipe-card-header_overlay">
                        <div className="row">
                            <div className="col">
                                <h2 className="RecipeView-card-title">{props.recipe.name}</h2>
                                <div className="row">
                                    <div className="col Recipe-container-colums">
                                        <span className="price">{props.recipe.price} €</span>
                                        <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i> {props.time_minutes} min</span>
                                        <span className="Recipe-card-tag">{props.tags} </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <img className="Recipe-image" src={props.getImageLink(props.recipe.image)} alt={props.name}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RecipeView-card-body">
                    <div className="row">
                        <span className="RecipeView-card-description subtle">
                            <div>
                                {props.recipe.description.split("\n").map((i,key) => {
                                        return<div key={key}>{i}</div>;
                                })}
                            </div>
                        </span>
                    </div>
                    <span key={uuid()} className="subtle">{props.ingredient} </span>
                    <div className="RecipeView-card-read">
                        <Link to={'/recipes/edit/'+props.recipe.id+'/'}>Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

