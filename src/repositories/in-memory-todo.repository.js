const TodoRepository = require('./todo.repository');
const Todo = require('../models/todo.model');

class InMemoryTodoRepository extends TodoRepository {
  constructor() {
    super();
    this.todos = [];
    this.nextId = 1;
  }

  async getAll() {
    return this.todos;
  }

  async create(todo) {
    const newTodo = new Todo(this.nextId++, todo.text, todo.style, todo.isCompleted);
    this.todos.push(newTodo);
    return newTodo;
  }

  async update(id, todo) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      return null;
    }
    this.todos[index].text = todo.text;
    this.todos[index].style = todo.style;
    this.todos[index].isCompleted = todo.isCompleted;
    return this.todos[index];
  }
}

module.exports = InMemoryTodoRepository;
