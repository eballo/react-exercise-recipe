import React, { Component } from 'react';
import Menu from './Menu.js';

class RecipeForm extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <div >  
                <form>
                    <label for="lname">recipe name:</label>
                    <input name='name' type='text' label='Name'/><br/>
                    <label for="lname">description:</label>
                    <input name='description' type='text' label='Description'/><br/>
                    <label for="lname">Ingredients:</label>
                    <input name='ingredients' type='text' label='Ingredients (comma separated list)'/>
                </form>
                </div>
            </div>
        );
    }
}

export default RecipeForm;