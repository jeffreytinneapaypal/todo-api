class TodoController {
  constructor(todoService) {
    this.todoService = todoService;
  }

  async getAllTodos(req, res) {
    try {
      const todos = await this.todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTodo(req, res) {
    try {
      const todoData = req.body;
      const newTodo = await this.todoService.createTodo(todoData);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTodo(req, res) {
    try {
      const id = parseInt(req.params.id);
      const todoData = req.body;
      const updatedTodo = await this.todoService.updateTodo(id, todoData);
      if (!updatedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TodoController;
