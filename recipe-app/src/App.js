import React, { useState, useEffect } from 'react';
import Menu from './components/Menu.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeView from './components/RecipeView.js';
import RecipeAPI from './components/RecipeAPI.js'
import useToggleState from './hooks/useToggleState';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"

export default function App() {
  
  const[recipes, handleRecipeChange] = useState([]);
  const[querySearch, handleQuerySearch] = useState('');
  const[redirect, handleChangeRedirect] = useToggleState(false);  

  const componentDidMount = () =>{
    this.refreshRecipes();
  }

  const searchRecipes = async(data) =>{
    let res = await RecipeAPI.getRecipes(data);
    handleRecipeChange(res.data);
  }

  const refreshRecipes = async () => {
    let res = await RecipeAPI.getRecipes('recipes/');
    handleRecipeChange(res.data);
  }

  const deleteRecipes = async (id) => {
    let res = await RecipeAPI.deleteRecipe('recipes/'+id+'/');
    if(res?.status === 204){
      console.log('Successful delete');
      this.refreshRecipes();
    }else{
      console.log('something went wrong while deleting');
    }    
  }

  const addRecipe = async (data) =>{
    let res = await RecipeAPI.createRecipes('recipes/', getPayload(data));
    if(res?.status === 201){
        refreshRecipes();
        handleChangeRedirect(true);
    }else{
        console.log('Something went wrong!')
    }
  }

  const updateRecipe = async (data) => {
    let res = await RecipeAPI.updateRecipe('recipes/'+(data.id)+'/', getPayload(data));
    console.log(res);
    if(res?.status === 200){
        refreshRecipes();
        handleChangeRedirect(true);
    }else{
        console.log('something went wrong!')
    }
  }

  const getPayload = (data) =>{
    let payload = {
        name: data.name,
        description: data.description,
        ingredients: []  //FIXME: fix the ingredients 
      }
    return payload;
  }

  const submit_from = async(data) =>{
      if(data.action === 'add'   ){
          addRecipe(data);
      }else if(data.action === 'edit'){
          updateRecipe(data);
      }else{
          console.log("WARNING: unknown action!")
      }
  }  

  const getIngredients = () => {
    return recipes?.ingredients?.map((p) =>( p.name +" " ))
  }

  const handleRecipeDelete = (id) => {
      console.log(id);
      deleteRecipes(id);
  }

  return (
    <div>
      <Menu searchRecipes={searchRecipes} handleQuerySearch={handleQuerySearch} querySearch={querySearch}/>
      <Switch>
        <Route exact path='/recipes/list'>
          <RecipeList handleRecipeChange={handleRecipeChange} handleRecipeDelete={handleRecipeDelete} recipes={recipes} />
        </Route>
        <Route exact path='/recipes/add'>
          <RecipeForm action="add" 
                      submit_from={submit_from}
                      redirect={redirect}
                      handleChangeRedirect={handleChangeRedirect}
                      />
        </Route>
        <Route exact path='/recipes/edit/:id/' component={ props => 
                <RecipeForm action="edit" 
                            submit_from={submit_from}
                            redirect={redirect}
                            handleChangeRedirect={handleChangeRedirect}
                            recipe={recipes.find(recipe => recipe.id === parseInt(props.match.params.id))} 
                            ingredient={getIngredients()}
                            id={props.match.params.id} />} 
        />
        <Route exact path='/recipes/view/:id/' component={ props => 
                <RecipeView recipe={recipes.find(r => r.id === parseInt(props.match.params.id))} />}
        />
        <Route exact path='/'><Redirect to="/recipes/list"/></Route>
      </Switch>
    </div>
  );

}
