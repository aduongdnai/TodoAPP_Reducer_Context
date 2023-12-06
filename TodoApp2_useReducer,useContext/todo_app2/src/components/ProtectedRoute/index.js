import { Navigate } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../AuthContext";

export const ProtectedRoute = ({ children }) => {
    const { state, dispatch } = useContext(AuthContext);
    const storedUserID = localStorage.getItem("userID");
    if (state.isAuth === false && !storedUserID) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};