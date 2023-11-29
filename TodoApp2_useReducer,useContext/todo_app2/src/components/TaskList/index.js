import React, { useContext } from "react";
import TodoContext,{ACTIONS} from "../TodoContext";
const TaskList = () => {
    const {state, dispatch}=useContext(TodoContext)
    const filteredTasks = state.tasks.filter( (task) => task.title.toLowerCase().includes(state.filter.toLowerCase()));
    
    const toggleTask=(id)=>{
      dispatch({type:ACTIONS.TOGGLE_TASK, payload:{ id}})
    }
    return (
      <ul>
        {filteredTasks.map((task) => (
          <li
            className="TaskItem"
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' , cursor:"pointer"}}
            onClick={() => toggleTask(task.id)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    );
  };
  export default TaskList;