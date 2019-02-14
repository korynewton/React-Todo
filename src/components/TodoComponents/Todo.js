import React from 'react';

const Todo = (props) => {
    // console.log(props)
    return (
        <h3 className={`todoItem ${props.item.completed ? 'purchased' : ''}`} onClick={() => props.toggleItem(props.item.id)}>&bull;{props.item.task}</h3>
    )
}

export default Todo