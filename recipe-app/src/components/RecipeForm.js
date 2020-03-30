import React, { Component } from 'react';
import RecipeAPI from './RecipeAPI'

class RecipeForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            name: props.recipe?.name,
            description: props.recipe?.description,
            ingredients: props.recipe?.ingredients
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getPayload(){
        let payload = {
            name: this.state.name,
            description: this.state.description,
            ingredients: this.state.ingredients.split(',').map(ingredient => {
              return { name: ingredient.trim() }
            })
          }
        return payload;
    }

    submit_from(){
        if(this.props.action == 'add'){
            RecipeAPI.createRecipes(this.getPayload());
        }else if(this.props.action == 'edit'){
            RecipeAPI.updateRecipe(this.props.id, this.getPayload());
        }else{
            console.log("WARNING: unknown action!")
            return;
        }
    }

    fill_form(){
        let id = this.props.id -1;
        this.setState({
            name: this.props.recipes[id].name,
            description: this.props.recipes[id].description,
            ingredients: this.props.recipes[id].ingredients
          });
    }

    handleChangeName(event){
        this.setState({
            name: event.target.value,
        });
    }

    handleChangeDesc(event){
        this.setState({
            description: event.target.value,
        });
    }

    handleChangeIng(event){
        this.setState({
            ingredients: event.target.value,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.submit_from();
    }

    getIngredients(){
        return this.props.recipe.ingredients.map((p) =>( p.name ))
    }

    render(){
        if(this.props.action == 'edit'){
            //this.fill_form();
        }
        return(
            <div className="RecipeView-container">
                <div className="RecipeView-card u-clearfix">
                    <div className="RecipeView-card-body">
                        <div className="form-group">
                            <form onSubmit={this.handleSubmit} >
                                <label htmlFor="nameImput">Recipe Name:</label>
                                <input className="form-control" name='name' type='text' value={this.state.name} onChange={this.handleChangeName} placeholder="recipe name" />
                                
                                <label htmlFor="descriptionImput">Description:</label>
                                <input className="form-control" name='description' type='text' value={this.state.description} onChange={this.handleChangeDesc} placeholder="short description" />
                                
                                <label htmlFor="ingredientsImput">Ingredients:</label>
                                <input className="form-control" name='ingredients' type='text' value={this.getIngredients()} onChange={this.handleChangeIng} placeholder="coma separated list of ingredients"  />
                                <br/>
                                <input type="submit" value="Submit" className="btn btn-primary"/>
                            </form>
                        </div>                  
                    </div>
                </div>
            </div>
            );
    }
}

export default RecipeForm;