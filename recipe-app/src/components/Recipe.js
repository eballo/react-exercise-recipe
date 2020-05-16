import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Recipe.css';

export default function Recipe(props){
    return(
        <div className="Recipe-container">
            <div className="Recipe-card u-clearfix">
                <div className="Recipe-card-header">
			        <div className="Recipe-card-header_overlay">
                        <div className="row">
                        <div className="col Recipe-container-colums">
                            <span class="price">{props.price} €</span>
                            <span class="time">{props.time_minutes} min</span>
                        </div>
                        </div>
                        <span class="image"></span>
			      </div>
		        </div>
                <div className="Recipe-card-body">
                    <h2 className="Recipe-card-title">{props.name}</h2>
                    <span className="Recipe-card-delete" onClick={()=>props.handleRecipeDelete(props.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                    <span className="Recipe-card-description subtle">{props.description}</span>
                    <div className="Recipe-card-read">
                        <Link to={'/recipes/view/'+props.id} >View</Link>
                    </div>
                    <span className="subtle">{props.ingredient} </span>
                    <span className="subtle">{props.tags} </span>
                </div>
            </div>
            <div className="Recipe-card-shadow"></div>
        </div>
        );
}