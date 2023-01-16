import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => {
                const isAuthenticated = localStorage.getItem("parabellum_access_token");
                return isAuthenticated ? children : <Redirect to="/user-signup" />
            }}
        />
    )

}
export default ProtectedRoute;