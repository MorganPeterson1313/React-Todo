import React from 'react';
import './Todo.css';









 








const Todo = props=>{



// changeHandler = event => {
//     console.log(event.target.value);
//     this.setState({ [event.target.task]: event.target.value });
    
//   };

// addTodoHandler = event => {
    
//     // let newTodo = {
//     //     task: this.state.task,
//     //     id: this.state.id,
//     //     completed: this.state.completed
//     event.preventDefault();
//     this.setState({ todo: "" });
//     this.props.addItem(this.state.todo);

//     };

return (
      
       <div
      className={`tasks${this.completed ? " completed" : ""}`} //ternary operation
      onClick={() => props.toggleTask(props.task.id)}
    >
      <p>{props.task}</p>
    </div>
      
     );



}
export default Todo;