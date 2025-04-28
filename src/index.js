const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo.routes');
const InMemoryTodoRepository = require('./repositories/in-memory-todo.repository');
const TodoService = require('./services/todo.service');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Dependency Injection
const todoRepository = new InMemoryTodoRepository();
const todoService = new TodoService(todoRepository);

// Routes
app.use('/todos', todoRoutes(todoService));

// Start server
app.listen(port, () => {
  console.log(`Todo API listening at http://localhost:${port}`);
});
