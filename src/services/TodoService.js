const TodoRepository = require("../repositories/TodoRepository");

module.exports = {
    
    async store(name) {
        const todo = await TodoRepository.store(name);

        return todo;
    },

    async fetchAll() {        
        const todos = await TodoRepository.fetchAll();
        
        return todos;
    },

    async fetch(id) {    
        const todo = await TodoRepository.fetch(id);
        
        return todo;
    },

    async update(name, id, status) {
        const response = {}; 
        response.statusCode = 200;

        if (!id) {
            response.statusCode = 400
            response.message = "id is mandatory";
            
            return response;
        }
    
       const todoAlreadyExist = await TodoRepository.fetch(id);
    
        if (!todoAlreadyExist) {
            response.statusCode = 404
            response.message = "todo not exist";
        
            return response;
        }    

        response.message = await TodoRepository.update(name, id, status);
        
        return response;
    },  

    async delete(id) {
        const response = {}; 
        response.statusCode = 200;

        if (!id) {
            response.statusCode = 400
            response.message = "id is mandatory";
            
            return response;
        }
    
       const todoAlreadyExist = await TodoRepository.fetch(id);
    
        if (!todoAlreadyExist) {
            response.statusCode = 404
            response.message = "todo not exist";
        
            return response;
        }    

        response.message = await TodoRepository.delete(id);
        
        return response;
    },  
}