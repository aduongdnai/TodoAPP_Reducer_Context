import React from 'react';
import AddTask from '../addTask'
import FilterTask from '../filterTask'
import TaskList from '../TaskList';
import { TodoProvider} from '../TodoContext';
function TodoApp() {
    
    
    return (
        <div>
            <h1>Todo App</h1>
            <TodoProvider>
                <FilterTask />
                <TaskList ></TaskList>
                <AddTask ></AddTask>
            </TodoProvider>
            
        </div>
    );
}

export default TodoApp;