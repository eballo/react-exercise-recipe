import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './RecipeView.css';
import Menu from './Menu.js'
import uuid from 'react-uuid'

class RecipeView extends Component{
    construct(props){
        this.super(props);
    }
    render(){
        return(
                <div className="RecipeView-container">
                    <div className="RecipeView-card u-clearfix">
                        <div className="RecipeView-card-body">
                            
                            <h2 className="RecipeView-card-title">bla</h2>
                            <span className="RecipeView-card-description subtle">bla</span>
                            <div className="RecipeView-card-read"><Link to={`/recipes/edit/`}>Edit</Link></div>
                                     </div>
                    </div>
                    <div className="RecipeView-card-shadow"></div>
                </div>
        );
    }
}

export default RecipeView;

