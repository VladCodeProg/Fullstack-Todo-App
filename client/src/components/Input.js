import React from 'react';

const Input = props => {
    return ( 
        <header>
            <label
                htmlFor="todoInput"
                className="form-label text-center mt-3"
                style={{fontWeight: 'bold', fontSize: 24}}
            >Todo description</label>
            <form
                className="d-flex justify-content-between align-items-center"
                onSubmit={e => props.addTodo(e)}
                name="form"
            >
                <div style={{width: '85%'}}>
                    <input
                        type="text"
                        className="form-control"
                        id="todoInput"
                        placeholder="Todo description..."
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                >Add Todo</button>
            </form>
            <select
                onChange={e => props.changeOption(e)}
                value={props.filter}
                className="form-select mt-3"
                style={{fontWeight: 'bold'}}
            >
                { props.todosSelectOptions.map(option => (
                    <option
                        value={option.value}
                        style={{fontWeight: 'bold'}}
                        key={option.value}
                    >{option.label}</option>
                )) }
            </select>
        </header>
    )
}

export default Input