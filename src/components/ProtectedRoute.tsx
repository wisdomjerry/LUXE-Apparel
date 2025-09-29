import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) {
    // redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}

export interface AuthContextType {
  user: any | null; // Replace 'any' with your actual user type if available
  // other context properties
}
