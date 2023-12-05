import React, { createContext, useReducer } from 'react';

const TodoContext = createContext()
const initialState = {
    tasks: [
        { id: 1, title: 'Read Book', completed: false },
        { id: 2, title: 'Do Exercise', completed: false },
        { id: 3, title: 'Do Homework', completed: false }],
    filter: '',
    isAuth: "false"
}

export const ACTIONS = {
    ADD_TASK: "ADD_TASK",
    TOGGLE_TASK: "TOGGLE_TASK",
    FILTER_TASK: "FILTER_TASK",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}
const todoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isAuth: true,
            }

        case ACTIONS.LOGOUT:
            return {
                ...state,
                isAuth: false,
            }
        case ACTIONS.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { id: state.tasks.length + 1, title: payload.newTask, completed: false }]
            }
        case ACTIONS.TOGGLE_TASK:

            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.id === payload.id ? { ...task, completed: !task.completed } : task
                })
            }
        case ACTIONS.FILTER_TASK:
            return {
                ...state,
                filter: payload.filter
            }
        default:
            return state;
    }

}

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state, dispatch);
    return (
        <TodoContext.Provider value={{ state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;