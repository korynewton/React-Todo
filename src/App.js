import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


const todoData = [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
     todoData: todoData,
     currentValue: '',
    };
  }

addTodo = (event) => {
  event.preventDefault();
  const toAdd = {
    task: this.state.currentValue,
    id: Date.now() ,
    completed: false
  }

  this.setState({
    todoData : [...this.state.todoData, toAdd],
    currentValue: ''
  })
  // console.log(this.state.currentValue)
}

updateValue = (event) => {
  // console.log(event.target.value)
  this.setState({
    currentValue: event.target.value
  })
}

toggleItem = itemId=> {
  this.setState({
    todoData: this.state.todoData.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};



  render() {
    // console.log(this.state.todoData)
    return (
      <div>
        <TodoList todoArray = {this.state.todoData} toggleItem={this.toggleItem} />
        <TodoForm
        value = {this.state.currentValue}
        handleChange = {this.updateValue}
        handleAdd = {this.addTodo}
        />
      </div>
    );
  }
}

export default App;
