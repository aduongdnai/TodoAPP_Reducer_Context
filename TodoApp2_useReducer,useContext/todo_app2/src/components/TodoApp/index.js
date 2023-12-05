import React from 'react';
import AddTask from '../addTask'
import FilterTask from '../filterTask'
import TaskList from '../TaskList';
import { TodoProvider} from '../TodoContext';
import { Heading } from '@chakra-ui/react'
function TodoApp() {
    
    
    return (
        <div>
            <Heading>TODO APP</Heading>
            <br/>
            <TodoProvider>
                <FilterTask />
                <br/>
                <TaskList ></TaskList>
                <br/>
                <AddTask ></AddTask>
            </TodoProvider>
            
        </div>
    );
}

export default TodoApp;