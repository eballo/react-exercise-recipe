import React, { Component } from 'react';
import Menu from './components/Menu.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeView from './components/RecipeView.js';
import RecipeAPI from './components/RecipeAPI.js'
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom"


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = { recipes: [] };

    this.handleRecipeChange = this.handleRecipeChange.bind(this);
    this.refreshRecipes = this.refreshRecipes.bind(this);
  }

  handleRecipeChange(recipes) {
    this.setState({
      recipes: recipes
    });
  }

  async refreshRecipes(){
    let res = await RecipeAPI.getRecipes('recipes/');
    this.handleRecipeChange(res.data);
  }

  componentDidMount(){
    this.refreshRecipes();
  }

  render(){
    return (
      <div>
        <Menu handleRecipeChange={this.handleRecipeChange}/>
        <Switch>
          <Route exact path='/recipes/list'>
            <RecipeList handleRecipeChange={this.handleRecipeChange} recipes={this.state.recipes} />
          </Route>
          <Route exact path='/recipes/add'>
            <RecipeForm action="add" refreshRecipes={this.refreshRecipes} />
          </Route>
          <Route exact path='/recipes/edit/:id/' component={ props => 
                  <RecipeForm action="edit" 
                              refreshRecipes={this.refreshRecipes}
                              recipe={this.state.recipes.find(recipe => recipe.id === parseInt(props.match.params.id))} 
                              id={props.match.params.id} />} 
          />
          <Route exact path='/recipes/view/:id/' component={ props => 
                  <RecipeView recipe={this.state.recipes.find(r => r.id === parseInt(props.match.params.id))} />}
          />
          <Route exact path='/'><Redirect to="/recipes/list"/></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
