import React, { useState } from 'react';

function RecipeSearch(props){
    
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        let path = 'recipes/?name='+query
        props.searchRecipes(path);
    }

    return(
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={query} 
                onChange={handleChange}/>
        <button className="btn btn-outline-info my-2 my-sm-0" >Search</button>
        </form>
    );

}

export default RecipeSearch;