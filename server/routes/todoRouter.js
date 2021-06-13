const Router = require('express');
const router = new Router();
const todoController = require('../controllers/todoController');

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.put('/todos', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;