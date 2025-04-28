const express = require('express');
const TodoController = require('../controllers/todo.controller');

const router = express.Router();

module.exports = (todoService) => {
  const todoController = new TodoController(todoService);

  router.get('/', (req, res) => todoController.getAllTodos(req, res));
  router.post('/', (req, res) => todoController.createTodo(req, res));
  router.put('/:id', (req, res) => todoController.updateTodo(req, res));

  return router;
};
