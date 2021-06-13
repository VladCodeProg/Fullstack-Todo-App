const db = require('../db');

class TodoServices {
    async getTodos() {
        const todos = await db.query('SELECT * FROM todo');
        return todos.rows;
    }
    async createTodo(body) {
        const {text} = body;
        const todo = await db.query('INSERT INTO todo (text, completed, important) values ($1, $2, $3) RETURNING *', [text, false, false]);
        return todo.rows[0];
    }
    async updateTodo(body) {
        const {id, completed=false, important=false} = body;
        const todo = await db.query('UPDATE todo set completed = $1, important = $2 WHERE id = $3 RETURNING *', [completed, important, id]);
        return todo.rows[0];
    }
    async deleteTodo(params) {
        const {id} = params;
        const todo = await db.query('DELETE FROM todo WHERE id = $1', [id]);
        return todo.rows;
    }
}

module.exports = new TodoServices();