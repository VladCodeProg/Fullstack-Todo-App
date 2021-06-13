import React from 'react';

const Todos = props => {
    return (
        <div className="mt-4">
            { props.todos.map(todo => (
                <div
                    className="card mt-3"
                    key={todo.id}
                    style={{backgroundColor: todo.important && '#F8D8D1'}}
                >
                    <div className="card-body d-flex justify-content-between">
                        <h5
                            className="card-title"
                            style={{
                                margin: 0, 
                                textDecoration: todo.completed && 'line-through',
                            }}
                        >{todo.text}</h5>
                        <div
                            className="d-flex justify-content-between align-items-center"
                            style={{width: 100}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                fill="currentColor"
                                className="bi bi-check-lg"
                                viewBox="0 0 16 16"
                                style={{cursor: 'pointer', color: '#006400'}}
                                onClick={() => props.interactWithTodo('setCompleted', todo.id)}
                            >
                                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                fill="currentColor"
                                className="bi bi-bookmark-star"
                                viewBox="0 0 16 16"
                                style={{cursor: 'pointer', color: '#FF8C00'}}
                                onClick={() => props.interactWithTodo('setImportant', todo.id)}
                            >
                                <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                fill="currentColor"
                                className="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                                style={{cursor: 'pointer', color: '#B22222'}}
                                onClick={() => props.deleteTodo(todo.id)}
                            >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Todos