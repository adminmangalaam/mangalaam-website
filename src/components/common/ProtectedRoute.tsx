import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    return window.localStorage.getItem("isAdmin") ? children : <Navigate to="/login" />;
}