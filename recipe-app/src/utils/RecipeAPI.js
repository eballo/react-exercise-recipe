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

    create(path, payload){
        console.log('Creating..');
        return this.client.post(path, payload)
                .then(response => this.handleSuccess(response))
                .catch(error => console.log(error));
    }

    update(path, payload){
        console.log('Updating data..');
        return this.client.patch(path, payload)
                .then(response => this.handleSuccess(response))
                .catch(error => console.log(error));
    }

    get(path){
        console.log('Getting data..')
        return this.client.get(path)
               .then(response => this.handleSuccess(response))
               .catch(error => console.log(error));
    }

    delete(path){
        console.log('Deleting data..')
        return this.client.delete(path)
               .then(response => this.handleSuccess(response))
               .catch(error => console.log(error));
    }
    
  }

  export default new RecipeAPI();