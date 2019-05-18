import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'





 
    


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
        super(props);
        this.state = {
            value:"",

          tasks: [
            {
              task: 'Organize Garage',
              id: 123,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 234,
              completed: false
            }
          ]
        }
      }

  addTask = e => { 
    e.preventDefault();

    const newTask = {
      task: this.state.value,
      id: Date.now(),
      completed: false
    };
  this.setState({
      tasks: [...this.state.tasks, newTask]
       });
    };


    toggleTask = taskId => {
      this.setState({
        value: this.state.tasks.map(task => {
          if (taskId === task.id) {
            return {
              ...task,
              completed: !task.completed
            };
          }
          return task;
        })
      });
    };

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.filter(task => !task.completed)
      });
    };


  changeHandler =(e) => {
      console.log(e.target.value);
      this.setState({ value: e.target.value });
      
    };
  
  // addTaskHandler = event => {

   


  //     event.preventDefault();
  //     this.setState({ tasks: "" });
  //     this.state.addTask(this.props.tasks);
  
  //     };

  
  
  
  // addTaskHandler = { this.addTask }
  
  render() {
    return (
      <div className="app">
        <h1 className="main-header">To Do List</h1>
        <div>{this.addTask}</div>
        <TodoList 
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}
        />
        <TodoForm 
        clearCompleted={this.clearCompleted}
         value={this.state.value} 
         addTaskHandler={this.addTask} 
         onChangeHandler={this.changeHandler}
         
         />
        
      </div>
    );
  }
}

export default App;
