import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.task)
    return (
        <div className='todo-list'>
            {props.task.map (task => (
                <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
            ))}
        </div>
    )
};

export default TodoList;