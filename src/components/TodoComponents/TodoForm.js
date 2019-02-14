import React from 'react'

const TodoForm = (props) => {
    return(
        <form className={'form'}>
            <input type="text" placeholder="do laundry, mow yard, etc" value={props.value} onChange={props.handleChange}/>
            <button onClick={props.handleAdd}>Add Task</button>
            <button onClick={(e) => props.clearCompleted(e)}>Clear Completed</button>       
        </form>

    )
}

export default TodoForm 