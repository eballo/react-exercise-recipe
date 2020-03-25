import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component{
    static defaultProps = {
        id: 1,
        title: "Pizza Motzarella",
        description: "From Italy with love this is an awesome pizza that no one should miss",
        ingredients: ["eggs", "oil", "salt"]
    }
    contructor(props){
        this.super(props);
    }

    render(){
    return(
            <div className="Recipe-container">
                <div className="Recipe-card u-clearfix">
                    <div className="Recipe-card-body">
                        
                        <h2 className="Recipe-card-title">{this.props.title}</h2>
                        <span className="Recipe-card-description subtle">{this.props.description}</span>
                        <div className="Recipe-card-read">Read</div>
                            {this.props.ingredients.map((p) =>(
                                <span className="subtle">{p} </span>
                            ))}
                    </div>
                </div>
                <div className="Recipe-card-shadow"></div>
            </div>
            );
    }
}

export default Recipe;