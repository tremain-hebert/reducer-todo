import React from 'react';

const Todo = props => {
    return (
        <div>
            <p
                className={`task${props.task.completed ? 'completed' : ''}`}
                onClick={ () => 
                    props.toggleCompleted(props.task.id)}
            >
                    {props.task.item}
            </p>
        </div>
    )
};
export default Todo;