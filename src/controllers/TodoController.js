const TodoService = require("../services/TodoService");

module.exports = {
    async store(request, response) {
        const { name } = request.body; 
        
        const todo = await TodoService.store(name);
        
        return response.status(201).json(todo);
    },

    async fetchAll(request, response) {     
        const todos = await TodoService.fetchAll();

        return response.status(200).json(todos);
    },

    async fetch(request, response) {       
        const { id } = request.params;  
        const intId = parseInt(id)

        const todo = await TodoService.fetch(intId);

        return response.status(200).json(todo);
    },
    
    async update(request, response) { 
        const {name, status} = request.body;
        const { id } = request.params;        
        const intId = parseInt(id)

        const result = await TodoService.update(name, intId, status);
        
        return response.status(result.statusCode).json(result.message);
    },

    async delete(request, response) {
        const { id } = request.params;
        const intId = parseInt(id)

        const result = await TodoService.delete(intId);

        return response.status(result.statusCode).json(result.message);
    }
}