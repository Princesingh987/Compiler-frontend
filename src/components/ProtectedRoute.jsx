// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("userRole");

  // Not logged in → send to /login (your actual login page)
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Role-based check (only if allowedRoles is provided)
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
