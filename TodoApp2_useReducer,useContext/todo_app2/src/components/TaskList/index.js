import React, { useContext } from "react";
import TodoContext,{ACTIONS} from "../TodoContext";
import { Input, Button, List, ListItem } from "@chakra-ui/react";
const TaskList = () => {
    const {state, dispatch}=useContext(TodoContext)
    const filteredTasks = state.tasks.filter( (task) => task.title.toLowerCase().includes(state.filter.toLowerCase()));
    
    const toggleTask=(id)=>{
      dispatch({type:ACTIONS.TOGGLE_TASK, payload:{ id}})
    }
    return (
      <List>
      {filteredTasks.map((task) => (
        <ListItem
          key={task.id}
          textDecoration={task.completed ? 'line-through' : 'none'}
          cursor="pointer"
          onClick={() => toggleTask(task.id)}
        >
          {task.title}
        </ListItem>
      ))}
    </List>
    );
  };
  export default TaskList;