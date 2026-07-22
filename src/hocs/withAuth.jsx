import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function withAuth(Component, options = {}) {
  const { redirectTo = "/login", fallback } = options;

  function WithAuth(props) {
    const { user, loading } = useAuth();

    if (loading) return null;
    if (!user) {
      return fallback !== undefined ? fallback : <Navigate to={redirectTo} replace />;
    }

    return <Component {...props} />;
  }

  WithAuth.displayName = `s(${Component.displayName || Component.name || "Component"})`;
  return WithAuth;
}
