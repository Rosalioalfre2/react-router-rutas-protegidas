import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, isAllowed, redirectTo = "/landing" }) => {
    if (isAllowed) {
        return children ? children : <Outlet/>;
    }
    return <Navigate to={redirectTo} />;
};
