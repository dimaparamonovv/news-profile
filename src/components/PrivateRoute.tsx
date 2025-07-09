import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import type { RootState } from "../app/store";

const PrivateRoute = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
