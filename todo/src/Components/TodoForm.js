import React, { useState, useReducer } from "react";
import TodoList from './TodoList';
import {
    todoReducer,
    initialState,
    ADD_TASK,
    TOGGLE_COMPLETED,
    CLEAR_COMPLETED,

} from '../reducers/todoReducer';

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setNewTodo('');
    }
    const toggleCompleted = id => {
        return (state.map( item => {
            if(id === item.id) {
               return dispatch({type: TOGGLE_COMPLETED, payload: item.id})
            }
            return item;
        }))
    }

    return (
        <div className="todo-form">
            <h1>To Do List:</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        className="todo-input"
                        type="text"
                        name="newTodo"
                        value={newTodo}
                        onChange={handleChange}
                    />
                    <button onClick={() => {dispatch({type: ADD_TASK, payload: newTodo })}}>
                        Add New Task
                    </button>
                    <button onClick={() => dispatch({type: CLEAR_COMPLETED})}>
                        Clear Completed
                    </button>
                </form>
            </div>
            <div>
            <TodoList task={state}  toggleCompleted={toggleCompleted}/>
            </div>
        </div>
    )
};

export default TodoForm;