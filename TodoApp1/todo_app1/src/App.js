import logo from './logo.svg';
import './App.css';
import AddTask from './components/addTask';
import TaskList from './components/TaskList';
import FilterTask from './components/filterTask';
import { useState } from 'react';

function App() {
  const [tasks,setTasks]=useState([
    { id:1, title: 'Read Book', completed: false},
    { id:2, title: 'Do Exercise', completed: false},
    { id:3, title: 'Do Homework', completed: false},
  ])
  const [filter,setFilter]=useState('');
  const filterTask=tasks.filter((task)=>
    task.title.toLowerCase().includes(filter.toLowerCase())
  )
  const addTask=(newtask)=>{
    setTasks([...tasks,{id:tasks.length+1,title:newtask,completed:false}])
  }
  const toggleTask= (taskId)=>{
    setTasks(tasks.map((task)=>
       task.id === taskId ? {...task, completed: !task.completed} : task
    ))
  }
  return (
    <div className="App">
      
      <FilterTask filter={filter} setFilter={setFilter}/>
      <TaskList tasks={filterTask} toggleTask={toggleTask}></TaskList>
      <AddTask addTask={addTask}></AddTask>
    </div>
  );
}

export default App;
