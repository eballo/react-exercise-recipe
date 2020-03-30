import axios from 'axios';

// REF: https://github.com/axios/axios

class RecipeAPI {
    constructor(){
        let client = axios.create({
            baseURL: 'http://localhost:8000/api/',
            timeout: 1000,
            headers: {'Content-Type': 'application/json'}
            });
        this.client = client;
    }

    handleSuccess(response) {
        return response;
    }

    createRecipes(payload){
        console.log('A new Recipe was created!');
        console.log(payload);

    }

    updateRecipe(id, payload){
        console.log('The given recipe was updated!');
        console.log(id);
        console.log(payload);

    }

    getRecipes(path){
        console.log('Getting Recipes..')
        return this.client.get(path)
               .then(response => this.handleSuccess(response))
               .catch(error => console.log(error));
    }

    deleteRecipe(id){

    }
    
  }

  export default new RecipeAPI;