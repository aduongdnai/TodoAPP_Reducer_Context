import React, { useContext, useState } from "react";
import TodoContext,{ACTIONS} from "../TodoContext";
import { Input, Button, List, ListItem } from "@chakra-ui/react";
import { updateTodo } from "../../apis/todosApi";
import LoadingModal from "../LoadingModal";
const TaskList = () => {
    const {state, dispatch}=useContext(TodoContext)
    const filteredTasks = state.tasks.filter( (task) => task.title.toLowerCase().includes(state.filter.toLowerCase()));
    const [isLoading, setIsLoading] = useState(false);
    const toggleTask=async (id,iscompleted)=>{
      try {
      setIsLoading(true);
      dispatch({type:ACTIONS.TOGGLE_TASK, payload:{ id}})
      let result 
      if (iscompleted === 0)
      result = await updateTodo(id,{iscompleted:1});
      if (iscompleted === 1)
      result = await updateTodo(id,{iscompleted:0});
    } catch (error) {
      console.error("Error adding task:", error);
      // You might want to handle errors and provide user feedback
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 700))
      setIsLoading(false);
    }}
    return (
      <List>
      {filteredTasks.map((task) => (
        <ListItem
          key={task.todo_id}
          textDecoration={task.iscompleted ? 'line-through' : 'none'}
          cursor="pointer"
        
          onClick={() => toggleTask(task.todo_id, task.iscompleted)}
        >
          {task.title}
        </ListItem>
        
      ))}
      <LoadingModal isLoading={isLoading} setIsLoading={setIsLoading} />
    </List>
    
    );
  };
  export default TaskList;