import React, { Component } from 'react';
import './RecipeView.css';
import Menu from './Menu.js'
import uuid from 'react-uuid'

class RecipeView extends Component{
    construct(props){
        this.super(props);
    }
    render(){
        return(
            <div>
                <Menu/>
                <div className="RecipeView-container">
                    <div className="RecipeView-card u-clearfix">
                        <div className="RecipeView-card-body">
                            
                            <h2 className="RecipeView-card-title">bla</h2>
                            <span className="RecipeView-card-description subtle">bla</span>
                            <div className="RecipeView-card-read"><a href="/recipes/edit/">edit</a></div>
                                     </div>
                    </div>
                    <div className="RecipeView-card-shadow"></div>
                </div>
            </div>
        );
    }
}

export default RecipeView;

