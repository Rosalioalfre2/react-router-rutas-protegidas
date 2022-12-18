import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, user, redirectTo="/landing" }) => {
    if (user) {
        return children;
    }
    return <Navigate to={redirectTo} />;
};
