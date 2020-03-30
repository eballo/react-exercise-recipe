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

    createRecipes(path, payload){
        console.log('A new Recipe was created!');
        return this.client.post(path, payload)
                .then(response => this.handleSuccess(response))
                .catch(error => console.log(error));
    }

    updateRecipe(path, payload){
        console.log('The given recipe was updated!');
        return this.client.patch(path, payload)
                .then(response => this.handleSuccess(response))
                .catch(error => console.log(error));
    }

    getRecipes(path){
        console.log('Getting Recipes..')
        return this.client.get(path)
               .then(response => this.handleSuccess(response))
               .catch(error => console.log(error));
    }

    deleteRecipe(path){
        console.log('Deleting Recipe')
        return this.client.delete(path)
               .then(response => this.handleSuccess(response))
               .catch(error => console.log(error));
    }
    
  }

  export default new RecipeAPI();