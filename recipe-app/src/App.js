import React from 'react';
import Menu from './components/Menu.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeView from './components/RecipeView.js';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"

function App() {
  return (
    <div>
      <Menu/>
      <Switch>
        <Route exact path='/recipes/list' component={RecipeList}/>
        <Route exact path='/recipes/add' component={RecipeForm}/>
        <Route exact path='/recipes/edit' component={RecipeForm}/>
        <Route exact path='/recipes/view/' component={RecipeView}/>
        <Route exact path='/'><Redirect to="/recipes/list"/></Route>
        // Add 404 redirect
      </Switch>
    </div>
  );
}

export default App;
