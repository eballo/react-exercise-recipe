import React from 'react';

export default function RecipeSearch(props){

    return(
        <form className="form-inline my-2 my-lg-0" onSubmit={props.searchRecipes}>
            <input className="form-control mr-sm-2" name="querySearch" type="search" 
                   placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" >Search</button>
        </form>
    );

}