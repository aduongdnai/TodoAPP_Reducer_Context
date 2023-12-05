import { Navigate } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../AuthContext";

export const ProtectedRoute = ({ children }) => {
    const { state, dispatch } = useContext(AuthContext);
    if (state.isAuth == false) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};