import React, { Component } from 'react';
import RecipeAPI from './RecipeAPI.js'

class RecipeSearch extends Component{
    constructor(props){
        super(props)
        this.state = { query: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ query : event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        let path = 'recipes/?name='+this.state.query
        this.props.searchRecipes(path);
    }

    render(){
        return(
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <input className="form-control mr-sm-2" 
                   type="search" 
                   placeholder="Search" 
                   aria-label="Search" 
                   value={this.state.query} 
                   onChange={this.handleChange}/>
            <button className="btn btn-outline-info my-2 my-sm-0" >Search</button>
            </form>
        );
    }
}

export default RecipeSearch;