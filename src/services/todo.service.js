class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos() {
    console.log(`Getting all todos`);
    return this.todoRepository.getAll();
  }

  async createTodo(todoData) {
    console.log(`Creating: ${JSON.stringify(todoData)}`);
    return this.todoRepository.create(todoData);
  }

  async updateTodo(id, todoData) {
    console.log(`Updating ${id}: ${JSON.stringify(todoData)}`);
    return this.todoRepository.update(id, todoData);
  }
}

module.exports = TodoService;
