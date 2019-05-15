import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';





const todos = [
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

  const defaultState = {
      TodoList: todos,
      task: '',
      id: 1528817077286,
      completed: false
  }








class Todo extends React.Component{

constructor (props){

super (props);
this.state = { defaultState};



}

changeHandler = event => {
    console.log(event.target.value);
    this.setState({ [event.target.task]: event.target.value });
  };

addTodoHandler = event => {
    event.preventDefault();
    let newTodo = {
        task: this.state.task,
        id: this.state.id,
        completed: this.state.completed

    };


    this.setState({
        todoList: [...this.state.todos, newTodo],
        task: "",
        id: "",
        completed: "",
      });



};

render(){
  
return (
        <div>
        <h1>ToDo List:</h1>

        <div className="Todo-list">
          {todos.map(todo => ( <TodoList todo ={todos}/> ))}
        </div>
        <TodoForm
          addTodoHandler={this.addTodoHandler}
          changeHandler={this.changeHandler}
          task={this.state.task}
         
          completed={this.state.completed}
        />
      </div>
     );


    }


}

export default Todo;