import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./context/context";

export function PrivateRouteLogin() {
  const [state] = useContext(UserContext);

  if (!state.isLogin) {
      return <Navigate to="/auth" />;
    }
    return <Outlet />;
}

export function PrivateRouteUser() {
  const [state] = useContext(UserContext);

  if (state.user.role_id === 1) {
    return <Navigate to="/admin" />;
  }
  return <Outlet />;
}

export function PrivateRouteAdmin() {
  const [state] = useContext(UserContext);

  if (state.user.role_id !== 1) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
