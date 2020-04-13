import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Recipe.css';
import uuid from 'react-uuid'

export default function Recipe(props){
    return(
        <div className="Recipe-container">
            <div className="Recipe-card u-clearfix">
                <div className="Recipe-card-body">
                    <h2 className="Recipe-card-title">{props.name}</h2>
                    <span className="Recipe-card-delete" onClick={()=>props.handleRecipeDelete(props.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                    <span className="Recipe-card-description subtle">{props.description}</span>
                    <div className="Recipe-card-read">
                        <Link to={'/recipes/view/'+props.id} >Read</Link>
                    </div>
                        {props.ingredients.map((p) =>(
                            <span key={uuid()} className="subtle">{p.name} </span>
                        ))}
                </div>
            </div>
            <div className="Recipe-card-shadow"></div>
        </div>
        );
}