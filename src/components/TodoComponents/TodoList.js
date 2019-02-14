import React from 'react';
import Todo from './Todo'


const TodoList = (props) => {
    // console.log(props.todoArray[0]['task'])
    // console.log(props.todoArray)
    // const mapped = props.todoArray.map( (item) => item )
    // console.log(mapped)
        
    return (
        <div>
            {props.todoArray.map(item => (
                <Todo item={item} key={item.id} toggleItem={props.toggleItem}/>
            ))}
        </div>
    )
     
}


export default TodoList;



