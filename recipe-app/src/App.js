import React, { useState, useEffect } from 'react';
import Menu from './components/Menu.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeView from './components/RecipeView.js';
import RecipeAPI from './utils/RecipeAPI.js'
import useToggleState from './hooks/useToggleState';
import './styles/App.css';
import {Route, Switch, Redirect} from "react-router-dom"

export default function App() {
  
  const[recipes, handleRecipeChange] = useState([]);
  const[redirect, handleChangeRedirect] = useToggleState(false);  

  useEffect(()=>{
    getRecipes();
  },[]);

  const searchRecipes = async (event) =>{
    event.preventDefault();
    let query = event.target.elements.querySearch.value;
    let path = 'recipes/details/?name='+query;
    let res = await RecipeAPI.get(path);
    handleRecipeChange(res.data);
  }

  const getRecipes = async () => {
    let res = await RecipeAPI.get('recipes/details/');
    handleRecipeChange(res.data);
  }

  const deleteRecipes = async (id) => {
    let res = await RecipeAPI.delete('recipes/'+id+'/');
    if(res?.status === 204){
      console.log('Successful delete');
      getRecipes();
    }else{
      console.log('something went wrong while deleting');
    }    
  }

  const addRecipe = async (data) =>{
    let res = await RecipeAPI.create('recipes/', getPayload(data));
    if(res?.status === 201){
        getRecipes();
        handleChangeRedirect(true);
    }else{
        console.log('Something went wrong!')
    }
  }

  const updateRecipe = async (data) => {
    let res = await RecipeAPI.update('recipes/'+(data.id)+'/', getPayload(data));
    console.log(res);
    if(res?.status === 200){
        getRecipes();
        handleChangeRedirect(true);
    }else{
        console.log('something went wrong!')
    }
  }

  const getPayload = (data) =>{
    var ingredient = data.ingredient.split(",");
    var ingredients = ingredient.map( name => ({name}) );
    let payload = {
        name: data.name,
        description: data.description,
        ingredients: ingredients,
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

  const getIngredient = (recipe) => {
    var one_line = recipe?.ingredients?.map((p) =>( p.name )).join(", ");
    return one_line;
  }

  const getTags = (recipe) => {
    var one_line = recipe?.tags?.map((p) =>( p.name )).join(", ");
    return one_line;
  }

  const handleRecipeDelete = (id) => {
      deleteRecipes(id);
  }

  const findRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === parseInt(id))
  }

  const getImageLink = (imageLink) =>{
    if(!imageLink){
        console.log("No Image")
        imageLink = "http://localhost:8000/media/uploads/recipe/a79ca1e4-b069-47f3-aaf6-a781cc6dbe80.png";
    }
    return imageLink;
}

  return (
    <div>
      <Menu searchRecipes={searchRecipes} />
      <Switch>
        <Route exact path='/recipes/list'>
          <RecipeList handleRecipeChange={handleRecipeChange} 
                      handleRecipeDelete={handleRecipeDelete}
                      getIngredient={getIngredient}
                      getTags={getTags}
                      findRecipeById={findRecipeById} 
                      getImageLink={getImageLink}
                      recipes={recipes} />
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
                            recipe={findRecipeById(props.match.params.id)} 
                            tags={getTags(findRecipeById(props.match.params.id))}
                            ingredient={getIngredient(findRecipeById(props.match.params.id))}
                            id={props.match.params.id} />
                } 
        />
        <Route exact path='/recipes/view/:id/' component={ props => 
                <RecipeView recipe={findRecipeById(props.match.params.id)} 
                            tags={getTags(findRecipeById(props.match.params.id))}
                            getImageLink={getImageLink}
                            ingredient={getIngredient(findRecipeById(props.match.params.id))} />
              }
        />
        <Route exact path='/'><Redirect to="/recipes/list"/></Route>
        <Route exact path='/recipes/'><Redirect to="/recipes/list"/></Route>
      </Switch>
    </div>
  );

}
