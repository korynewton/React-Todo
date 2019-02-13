import React from 'react';
import Todo from './Todo'


const TodoList = (props) => {
    // console.log(props.todoArray[0]['task'])
    console.log(props.todoArray)
    // const mapped = props.todoArray.map( (item) => item )
    // console.log(mapped)
        
    return (
        <div>
            {props.todoArray.map(item => (
                <Todo task={item} />
            ))}
        </div>
    )
     
}


export default TodoList;



// {props.todoArray.map( (item) =>  {
//     return (
//         <Todo task={item}  />
//     )
// }
// )