import React, { useState,useContext } from 'react';
import TodoContext,{ACTIONS} from '../TodoContext';
const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const {state,dispatch}=useContext(TodoContext)
  const addTask=(newTask)=>{
      dispatch({type: ACTIONS.ADD_TASK, payload:{ newTask}})
  }
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};


export default AddTask;