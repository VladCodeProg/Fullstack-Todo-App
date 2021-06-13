const todoServices = require('../services/todoServices');

class TodoController {
    async getTodos(req, res) {
        try {
            const todos = await todoServices.getTodos();
            res.json(todos);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    async createTodo(req, res) {
        try {
            const todo = await todoServices.createTodo(req.body);
            res.json(todo);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    async updateTodo(req, res) {
        try {
            const todo = await todoServices.updateTodo(req.body)
            res.json(todo);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    async deleteTodo(req, res) {
        try {
            const todo = await todoServices.deleteTodo(req.params)
            res.json(todo);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new TodoController();