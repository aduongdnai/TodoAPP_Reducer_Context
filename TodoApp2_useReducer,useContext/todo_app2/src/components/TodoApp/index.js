import React, {useEffect, useContext} from 'react';
import AddTask from '../addTask'
import FilterTask from '../filterTask'
import TaskList from '../TaskList';
import { TodoProvider} from '../TodoContext';
import { Heading } from '@chakra-ui/react'
import { getAllTodo } from '../../apis/todosApi';
import TodoContext, {ACTIONS} from '../TodoContext';
import AuthContext from '../AuthContext';
function TodoApp() {
    const { state: todoState, dispatch: todoDispatch } = useContext(TodoContext);
    const { state: authState, dispatch: authDispatch } = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const tasks = await getAllTodo(authState.user_id);
            console.log(tasks);
            todoDispatch({ type: ACTIONS.SET_TASKS, payload: { tasks: tasks.data } });
          } catch (error) {
            // Handle error, you may want to set an error state in the context
            console.error('Error fetching tasks:', error);
          }
        };
    
        fetchData();
      }, []);
    
    return (
        <div>
            <Heading>TODO APP</Heading>
            <br/>
            
                <FilterTask />
                <br/>
                <TaskList ></TaskList>
                <br/>
                <AddTask ></AddTask>

            
        </div>
    );
}

export default TodoApp;