import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Recipe.css';
import Utils from '../utils/Utils.js'

export default function Recipe(props){

    const getImageLink = (imageLink) =>{
        if(!imageLink){
            console.log("No Image")
            imageLink = "http://localhost:8000/media/uploads/recipe/a79ca1e4-b069-47f3-aaf6-a781cc6dbe80.png";
        }
        return imageLink;
    }

    return(
        <div className="Recipe-container">
            <div className="Recipe-card u-clearfix">
                <div className="Recipe-card-header">
			        <div className="Recipe-card-header_overlay">
                        <span class="image">
                            <img className="Recipe-image" src={getImageLink(props.image)} alt={props.name}/>
                        </span>
                        <div className="row">
                            <div className="col Recipe-container-colums">
                                <span class="price">{props.price} €</span>
                                <span class="time">{props.time_minutes} min</span>
                                <span className="Recipe-card-tag">{props.tags} </span>
                            </div>
                        </div>
			      </div>
		        </div>
                <div className="Recipe-card-body">
                    <h2 className="Recipe-card-title">{props.name}</h2>
                    <span className="Recipe-card-delete" onClick={()=>props.handleRecipeDelete(props.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                    <span className="Recipe-card-description subtle">{Utils.limitText(props.description, 30)}</span>
                    <div className="Recipe-card-read">
                        <Link to={'/recipes/view/'+props.id} >View</Link>
                    </div>
                    <div className="row">
                        <div className="col Recipe-container-colums">
                            <span className="subtle">{Utils.limitText(props.ingredient)} </span>
                        </div>
                        <div className="col Recipe-container-colums">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="Recipe-card-shadow"></div>
        </div>
        );
}