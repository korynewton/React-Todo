import React from 'react'

const TodoForm = (props) => {
    return(
        <form>
            <input type="text" placeholder="do laundry, mow yard, etc" value={props.value} onChange={props.handleChange}/>
            <button>Add a Task</button>
            <button>Clear Completed</button>       
        </form>

    )
}

export default TodoForm 