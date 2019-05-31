// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
// import Todo from './Todo';

// import Moment from 'react-moment';








class TodoList extends React.Component {
    // const unixTimestamp = 198784740;

render (){


    
return(

<div className="todo-list">
          {this.props.tasks.map(task => ( <Todo {...task} key={task.id } toggleTask={this.props.toggleTask}/> ))}
        </div>

    );

}
}

export default TodoList;
