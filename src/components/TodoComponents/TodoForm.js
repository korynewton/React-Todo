import React from 'react'

const TodoForm = (props) => {
    return(
        <form>
            <input type="text" placeholder="do laundry, mow yard, etc" value={props.value} onChange={props.handleChange}/>
            <button onClick={props.handleAdd}>Add a Task</button>
            <button onClick={(e) => props.clearCompleted(e)}>Clear Completed</button>       
        </form>

    )
}

export default TodoForm 