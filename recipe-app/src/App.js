import React, { Component } from 'react';
import Menu from './components/Menu.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeView from './components/RecipeView.js';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = { recipes: [] };

    this.handleRecipeChange = this.handleRecipeChange.bind(this);
  }

  handleRecipeChange(recipes) {
    this.setState({
      recipes: recipes
    });
  }

  render(){
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path='/recipes/list'>
            <RecipeList handleRecipeChange={this.handleRecipeChange} 
                        recipes={this.state.recipes} />
          </Route>
          <Route exact path='/recipes/add' component={RecipeForm}/>
          <Route exact path='/recipes/edit' component={RecipeForm}/>
          <Route exact path='/recipes/view/' component={RecipeView}/>
          <Route exact path='/'><Redirect to="/recipes/list"/></Route>
          // Add 404 redirect
        </Switch>
      </div>
    );
  }

}

export default App;
