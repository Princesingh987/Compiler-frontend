// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("userRole");

  if (!isLoggedIn) {
    // Not logged in → send to /auth (sign in/up page)
    return <Navigate to="/auth" replace />;
  }

  // If allowedRoles is provided, check if user's role is included
  if (allowedRoles && Array.isArray(allowedRoles) && !allowedRoles.includes(role)) {
    // Unauthorized role → send to home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
