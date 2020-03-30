import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RecipeAPI from './RecipeAPI'

class RecipeForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            name: props.recipe?.name,
            description: props.recipe?.description,
            ingredients: props.recipe?.ingredients,
            ingredient: this.getIngredients()?.toString(),
            redirect: false
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
            ingredients: this.state.ingredient?.split(',').map(ingredient => {
              return { name: ingredient.trim() }
            })
          }
        return payload;
    }

    async submit_from(){
        let res;
        if(this.props.action === 'add'){
           res = await RecipeAPI.createRecipes('recipes/', this.getPayload());
           if(res?.status === 201){
               this.setState({ redirect : true });
           }else{
               console.log('Something went wrong!')
           }
        }else if(this.props.action === 'edit'){
           res = await RecipeAPI.updateRecipe('recipes/'+(this.props.id)+'/', this.getPayload());
           console.log(res);
           if(res?.status === 200){
                this.setState({ redirect : true });
           }else{
               console.log('something went wrong!')
           }
        }else{
            console.log("WARNING: unknown action!")
        }
        return res;
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
            ingredient: event.target.value,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.submit_from();
    }

    getIngredients(){
        return this.props.recipe?.ingredients.map((p) =>( p.name +" " ))
    }

    render(){

        if (this.state.redirect) {
            return (<Redirect to='/recipes/list/'/>);
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
                                <input className="form-control" name='ingredient' type='text' value={this.state.ingredient} onChange={this.handleChangeIng} placeholder="coma separated list of ingredients"  />
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