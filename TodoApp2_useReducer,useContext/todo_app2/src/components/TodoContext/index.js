import React, { createContext, useReducer, useEffect } from 'react';
import { getAllTodo } from '../../apis/todosApi';
const TodoContext = createContext()
const initialState = {
    tasks: [],
    filter: '',
}

export const ACTIONS = {
    ADD_TASK: "ADD_TASK",
    TOGGLE_TASK: "TOGGLE_TASK",
    FILTER_TASK: "FILTER_TASK",
}
const todoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONS.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { todo_id: state.tasks.length + 1, title: payload.newTask, iscompleted: false }]
            }
        case ACTIONS.TOGGLE_TASK:

            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.todo_id === payload.id ? { ...task, iscompleted: !task.iscompleted } : task
                })
            }
        case ACTIONS.FILTER_TASK:
            return {
                ...state,
                filter: payload.filter
            }
        case ACTIONS.SET_TASKS: // New case for setting tasks from the server
            return {
                ...state,
                tasks: payload.tasks,
            }
        default:
            return state;
    }

}

export const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;