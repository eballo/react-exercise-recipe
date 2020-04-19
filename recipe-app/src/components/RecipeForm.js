import React from 'react';
import { Redirect } from 'react-router-dom';
import useInputState from '../hooks/useInputState';

export default function RecipeForm(props){

    const[id, handleChangeId]                   = useInputState(props.id);
    const[name, handleChangeName]               = useInputState(props.recipe?.name);
    const[description, handleChangeDescription] = useInputState(props.recipe?.description);
    const[ingredient, handleChangeIngredient]   = useInputState(props.ingredient); 
    const[action, handleChangeAction]           = useInputState(props.action);    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {id, name, description, ingredient, action};
        props.submit_from(data);
    }

    if (props.redirect) {
        props.handleChangeRedirect(false);
        return (<Redirect to='/recipes/list/'/>);
    }  

    return(
        <div className="RecipeView-container">
            <div className="RecipeView-card u-clearfix">
                <div className="RecipeView-card-body">
                    <div className="form-group">

                        <form onSubmit={handleSubmit} >

                            <label htmlFor="nameImput">Recipe Name:</label>
                            <input className="form-control" 
                                name='name' 
                                type='text' 
                                value={name} 
                                onChange={handleChangeName} 
                                placeholder="recipe name" />
                            
                            <label htmlFor="descriptionImput">Description:</label>
                            <input className="form-control" 
                                name='description' 
                                type='text' 
                                value={description} 
                                onChange={handleChangeDescription} 
                                placeholder="short description" />
                            
                            <label htmlFor="ingredientsImput">Ingredients:</label>
                            <input className="form-control" 
                                name='ingredient' 
                                type='text' 
                                value={ingredient} 
                                onChange={handleChangeIngredient} 
                                placeholder="coma separated list of ingredients"  />

                            <br/>
                            <input type="submit" value="Submit" className="btn btn-primary"/>
                            
                        </form>

                    </div>                  
                </div>
            </div>
        </div>
    );
}
