import React, { useState,useContext } from 'react';
import TodoContext,{ACTIONS} from '../TodoContext';
import { Input, Button, HStack, Center   } from "@chakra-ui/react";
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
    <Center>
      <HStack>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          size="md"
           // Adjust the width according to your preference
        />
        <Button colorScheme="teal" size="md" onClick={handleAddTask}>
          Add Task
        </Button>
      </HStack>
    </Center>
  );
};


export default AddTask;