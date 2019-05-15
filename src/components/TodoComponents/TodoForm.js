import React from 'react';
import './Todo.css';








    function TodoForm (props) {
return( 
    <form name = "TodoAddForm" onSubmit= {props.addTodoHandler}>

    <input
    type= "text"
    value= "props.task"
    placeholder = "task"
    name ="task"
    onChange={props.changeHandler}
    />

<input
    type= "text"
    value= "props.completed"
    placeholder = "complete"
    name ="complete"
    onChange={props.changeHandler}
    />
<button onClick={props.addTodoHandler}>Add Todo item</button>
    </form>



);
        




}

export default TodoForm;