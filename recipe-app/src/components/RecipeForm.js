import React from 'react';
import { Redirect } from 'react-router-dom';
import RecipeAPI from './RecipeAPI'
import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';

export default function RecipeForm (props){

    const[name, handleChangeName] = useInputState(props.recipe?.name);
    const[description, handleChangeDescription] = useInputState(props.recipe?.description);
    const[ingredient, handleChangeIngredient] = useInputState("");
    const[redirect, handleChangeRedirect] = useToggleState(false);

    const getPayload = () =>{
        let payload = {
            name: name,
            description: description,
            ingredients: []  //FIXME: fix the ingredients 
          }
        return payload;
    }

    const submit_from = async() =>{
        let res;
        if(props.action === 'add'   ){
            res = await RecipeAPI.createRecipes('recipes/', getPayload());
            if(res?.status === 201){
                props.refreshRecipes();
                handleChangeRedirect(true);
            }else{
                console.log('Something went wrong!')
            }
        }else if(props.action === 'edit'){
            res = await RecipeAPI.updateRecipe('recipes/'+(props.id)+'/', getPayload());
            console.log(res);
            if(res?.status === 200){
                props.refreshRecipes();
                handleChangeRedirect(true);
            }else{
                console.log('something went wrong!')
            }
        }else{
            console.log("WARNING: unknown action!")
        }
        return res;
    }        

    const handleSubmit = (event) =>{
        event.preventDefault();
        submit_from();
    }

    const getIngredients = () =>{
        return props.recipe?.ingredients.map((p) =>( p.name +" " ))
    }

    if (redirect) {
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