import React, { Component } from 'react';
import Menu from './components/Menu.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeView from './components/RecipeView.js';
import RecipeAPI from './components/RecipeAPI'
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

  async componentDidMount(){
    let res = await RecipeAPI.getRecipes('recipes/');
    this.handleRecipeChange(res.data);
  }

  render(){
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path='/recipes/list'>
            <RecipeList recipes={this.state.recipes} />
          </Route>
          <Route exact path='/recipes/add'>
            <RecipeForm action="add"/>
          </Route>
          <Route exact path='/recipes/edit/:id/' component={ props => <RecipeForm action="edit" recipe={this.state.recipes[props.match.params.id-1]} id={props.match.params.id} />} />
          <Route exact path='/recipes/view/:id/' component={ props => <RecipeView recipes={this.state.recipes} id={props.match.params.id} />} />
          <Route exact path='/'><Redirect to="/recipes/list"/></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
