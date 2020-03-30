import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RecipeSearch extends Component{
    constructor(props){
        super(props)
        this.state = { query: "" }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({ query : event.target.value });
    }
    render(){
        return(
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" 
                   type="search" 
                   placeholder="Search" 
                   aria-label="Search" 
                   value={this.state.query} 
                   onChange={this.handleChange}/>
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}

export default RecipeSearch;