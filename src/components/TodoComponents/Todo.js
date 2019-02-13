import React from 'react';

const Todo = (props) => {
    console.log(props)
    return (
        <h6>{props.item['task']}</h6>
    )
}

export default Todo