import React, {Component} from 'react';
import Input from '../components/Input';
import Todos from '../components/Todos';
import axios from '../axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            todos: [],
            todosSelectOptions: [
                {label: 'All', value: 'all'}, 
                {label: 'Completed', value: 'completed'},
                {label: 'Important', value: 'important'},
                {label: 'Not completed', value: 'not-completed'}
            ],
            filter: 'all'
        }
    }

    async componentDidMount() {
        const response = await axios.get('/todos');

        this.setState({
            todos: response.data.reverse(),
            isLoading: false
        });
    }


    getTodos = async () => {
        const response = await axios.get('/todos');

        this.setState({
            todos: response.data.reverse(),
        });
    }

    addTodo = async e => {
        e.preventDefault();
        let text = e.target[0].value;

        if (text.trim() !== '') {
            await axios.post('/todos', {text});
            this.getTodos();
            text = e.target[0].value = '';
        }
    }

    interactWithTodo = async (action, id) => {
        const todo = this.state.todos.filter(todo => todo.id === id)[0];
        await axios.put('/todos', {
            id,
            completed: action === 'setCompleted' ? !todo.completed : todo.completed,
            important: action === 'setImportant' ? !todo.important : todo.important
        });
        this.getTodos();
    }

    deleteTodo = async id => {
        await axios.delete(`/todos/${id}`);
        this.getTodos();
    }

    changeOption = e => {
        this.setState({
            filter: e.target.value
        })
    }

    filteredTodos = () => {
        const todos = [...this.state.todos];
        const filter = this.state.filter;

        if (filter === 'all') {
            return todos;
        }
        else if (filter === 'completed') {
            return todos.filter(todo => todo.completed);
        }
        else if (filter === 'important') {
            return todos.filter(todo => todo.important);
        }
        else if (filter === 'not-completed') {
            return todos.filter(todo => !todo.completed);
        }
    }

    render() {
        return (
            <div>
                <Input
                    addTodo={this.addTodo}
                    todosSelectOptions={this.state.todosSelectOptions}
                    changeOption={this.changeOption}
                    filter={this.state.filter}
                />
                { this.state.isLoading ? (
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status"/>
                    </div>
                ) : (
                    this.filteredTodos().length ? (
                        <Todos
                            deleteTodo={this.deleteTodo}
                            todos={this.filteredTodos()}
                            interactWithTodo={this.interactWithTodo}
                        />
                    ) : (
                        <h3 className="text-center mt-4">No todos yet</h3>
                    )
                ) }
            </div>
        )
    }
}

export default Home