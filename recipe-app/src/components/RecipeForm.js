import React, { Component } from 'react';

class RecipeForm extends Component{
    render(){
        return(
            <div className="RecipeView-container">
                <div className="RecipeView-card u-clearfix">
                    <div className="RecipeView-card-body">
                    <form>
                        <h2 className="RecipeView-card-title">
                            <input name='name' type='text' label='Name'/><br/></h2>
                        <span className="RecipeView-card-description">
                            <input name='description' type='text' label='Description'/><br/>
                        </span>
                        <input name='ingredients' type='text' label='Ingredients (comma separated list)'/>
                    </form>                    
                    </div>
                </div>
            </div>
            );
    }
}

export default RecipeForm;