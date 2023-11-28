import React from "react";
const TaskList = ({ tasks, toggleTask }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li
            className="TaskItem"
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' , cursor:"pointer"}}
            onClick={() => toggleTask(task.id)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    );
  };
  export default TaskList;