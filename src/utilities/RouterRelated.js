import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import LoadingPage from "../components/Loading/Loading";
import useAuth from "../StateManager/useAuth";

export const LoadedRoute = () => {
    const {loading} = useAuth();
    return loading ? <LoadingPage /> : <Outlet />;
};
export const ProtectedRoutes = () => {
    const {loading, member} = useAuth();

    return loading ? (
        <LoadingPage />
    ) : member?.email ? (
        <Outlet />
    ) : (
        <Navigate replace to={"/"} />
    );
};
