const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async store(name) {
        const todo = await prisma.todo.create({
            data: {
                name,
            }
        });

        return todo;
    },

    async fetchAll() {
        const todos = await prisma.todo.findMany()

        return todos;
    },

    async fetch(id) {
        const todo = await prisma.todo.findUnique({
            where: {id} 
        });

        return todo;
    },

    async update(name, id, status) {
        const todo = await prisma.todo.update({
            where: {
                id,
            },
            
            data: {
                name,
                status
            },
        });

        return todo;
    },    

    async delete(id) {
        const todo = await prisma.todo.delete({
            where: {
                id,
            },
            
        });

        return todo;
    },  
}