import React, { createContext, useReducer } from 'react';

const AuthContext = createContext()
const initialState = {
    isAuth: "false"
}

export const ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}
const authReducer = (state, action) => {
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
        default:
            return state;
    }

}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    console.log(state, dispatch);
    return (
        <AuthContext.Provider value={{ state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;