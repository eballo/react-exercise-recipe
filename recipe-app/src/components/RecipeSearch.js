import React, { useState } from 'react';

export default function RecipeSearch(props){
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let path = 'recipes/?name='+event.target.value
        props.searchRecipes(path);
    }

    return(
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={props.querySearch} 
                onChange={props.handleQuerySearch}/>
        <button className="btn btn-outline-info my-2 my-sm-0" >Search</button>
        </form>
    );

}