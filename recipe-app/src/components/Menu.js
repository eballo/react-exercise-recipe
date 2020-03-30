import React, { Component } from 'react'
import { Link } from "react-router-dom";
import RecipeSearch from './RecipeSearch.js'
import './Menu.css'


class Menu extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand menu-recipe-title"><Link to="/recipes/list">My Favourite Dishes</Link></h1>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/recipes/add">Add a New Dish!</Link>
                            </li>
                        </ul>
                        <RecipeSearch handleRecipeChange={this.props.handleRecipeChange}/>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;