import React, { createContext, useReducer, useEffect } from 'react';

const AuthContext = createContext()
const initialState = {
    isAuth: false,
    user_id: null
}

export const AUTH_ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}
const authReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case AUTH_ACTIONS.LOGIN:
            localStorage.setItem("userID", JSON.stringify(payload.data.user_id));
            return {
                ...state,
                isAuth: true,
                user_id: payload.data.user_id

            }

        case AUTH_ACTIONS.LOGOUT:
            localStorage.clear();
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

    const [state, dispatch] = useReducer(authReducer, initialState);


    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;