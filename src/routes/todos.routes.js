const express = require("express");

const todoRoutes = express.Router();

const TodoController = require("../controllers/TodoController");

//fetchAll
todoRoutes.get("/todos", TodoController.fetchAll);

//fetch
todoRoutes.get("/todo/:id", TodoController.fetch);

//create
todoRoutes.post("/todo", TodoController.store);

//update
todoRoutes.put("/todo/:id", TodoController.update);

//Delete
todoRoutes.delete("/todo/:id", TodoController.delete);

module.exports = todoRoutes;