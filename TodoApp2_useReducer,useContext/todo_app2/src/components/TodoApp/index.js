import React, { useEffect, useContext, useState } from 'react';
import AddTask from '../addTask'
import FilterTask from '../filterTask'
import TaskList from '../TaskList';
import { Button, Heading, Flex, Spacer, Center, Box } from '@chakra-ui/react'
import { getAllTodo } from '../../apis/todosApi';
import TodoContext, { ACTIONS } from '../TodoContext';
import AuthContext, { AUTH_ACTIONS } from '../AuthContext';
import LoadingModal from '../LoadingModal';
import { useNavigate } from 'react-router-dom';
function TodoApp() {
  const { state: todoState, dispatch: todoDispatch } = useContext(TodoContext);
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const userId = JSON.parse(localStorage.getItem('userID'))
        console.log(userId);
        const tasks = await getAllTodo(userId);
        console.log(tasks);
        todoDispatch({ type: ACTIONS.SET_TASKS, payload: { tasks: tasks.data } });
      } catch (error) {
        // Handle error, you may want to set an error state in the context
        console.error('Error fetching tasks:', error);
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleLogOut = () => {
    authDispatch({ type: AUTH_ACTIONS.LOGOUT })

    navigate("/login")
  }
  return (
    <div>
      <Flex  >
        <Box></Box>
        <Spacer></Spacer>
        <Heading ml="5">TODO APP</Heading>

        <Spacer />
        <Button mr="5" colorScheme='teal' size="sm" onClick={handleLogOut}>Log out</Button>
      </Flex>

      <br />

      <FilterTask />
      <br />
      <TaskList ></TaskList>
      <br />
      <AddTask ></AddTask>

      <LoadingModal isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default TodoApp;