import React, { createContext, useReducer } from 'react';

const AuthContext = createContext()
const initialState = {
    isAuth: false,
    user_id:null
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
                user_id: payload.data.user_id
            }

        case ACTIONS.LOGOUT:
            return {
                ...state,
                isAuth: false,
                user_id: null
            }
        default:
            return state;
    }

}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;