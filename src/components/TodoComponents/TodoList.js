// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import Moment from 'react-moment';




const TodoList =()=> {
    const unixTimestamp = 198784740;
return(
<div>
<Moment unix>{unixTimestamp}</Moment>
    <Todo />
</div>

    );


}

export default TodoList;