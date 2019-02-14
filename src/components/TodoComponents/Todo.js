import React from 'react';

const Todo = (props) => {
    // console.log(props)
    return (
        <h3 onClick={() => props.toggleItem(props.item.id)}>{props.item.task}</h3>
    )
}

export default Todo