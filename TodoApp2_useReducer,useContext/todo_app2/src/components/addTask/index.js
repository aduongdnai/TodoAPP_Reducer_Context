import React, { useState,useContext } from 'react';
import TodoContext,{ACTIONS} from '../TodoContext';
import { Input, Button, HStack, Center } from "@chakra-ui/react";
import { addTodo } from '../../apis/todosApi';
import LoadingModal from '../LoadingModal';
import AuthContext from '../AuthContext';
const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { state: todoState, dispatch: todoDispatch } = useContext(TodoContext);
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);
  
  const addTask=(newTask)=>{
    todoDispatch({type: ACTIONS.ADD_TASK, payload:{ newTask}})
  }
  const handleAddTask = async () => {
    try {
      setIsLoading(true);
      if (newTask.trim() !== '') {
        addTask(newTask);
        console.log(authState);
        const result = await addTodo({ title: newTask, iscompleted: 0, user_id: authState.user_id });
        setNewTask('');
      }
    } catch (error) {
      console.error("Error adding task:", error);
      // You might want to handle errors and provide user feedback
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 700))
      setIsLoading(false);
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

        <LoadingModal isLoading={isLoading} setIsLoading={setIsLoading} />
      </HStack>
    </Center>
  );
};


export default AddTask;