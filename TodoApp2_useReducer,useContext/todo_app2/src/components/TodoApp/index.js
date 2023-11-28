import React from 'react';
import { useContext } from 'react';
import AddTask from '../addTask'
import FilterTask from '../filterTask'
import TaskList from '../TaskList';
import TodoContext,{ACTIONS} from '../TodoContext';
function TodoApp() {
    const {state, dispatch}=useContext(TodoContext);
    const filteredTasks = state.tasks.filter( (task) => task.title.toLowerCase().includes(state.filter.toLowerCase()));
    const addTask=(newTask)=>{
        dispatch({type: ACTIONS.ADD_TASK, payload:{ newTask}})
    }
    const toggleTask=(id)=>{
        dispatch({type: ACTIONS.TOGGLE_TASK, payload:{ id}})
    }
    const setFilter=(filter)=>{
        dispatch({type: ACTIONS.FILTER_TASK, payload:{ filter}})
    }
    return (
        <div>
            <h1>Todo App</h1>
            <FilterTask filter={state.filter} setFilter={setFilter}/>
            <TaskList tasks={filteredTasks} toggleTask={toggleTask}></TaskList>
            <AddTask addTask={addTask}></AddTask>
        </div>
    );
}

export default TodoApp;