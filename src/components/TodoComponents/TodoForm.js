import React from 'react';
import './Todo.css';









    class TodoForm extends React.Component {
        constructor(props){
            super(props);
            this.onChangeHandler=props.onChangeHandler
            this.addTaskHandler=props.addTaskHandler
            
        }

       

render (){


    return (

      <div>
    <form onSubmit= {this.addTaskHandler}>

    <input
    type= "text"
    value= {this.task}
    placeholder = "task"
    name ="task"
    onChange={this.onChangeHandler}
    
    />
    <div className="buttons">
<button className="submit-btn" >Submit</button>
<button className="clear-btn" onClick={this.props.clearCompleted}>
        Clear Completed
      </button>
      </div>
</form>


</div>
    );

}
        




}

export default TodoForm;