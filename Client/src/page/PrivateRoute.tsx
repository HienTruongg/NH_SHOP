import { useLocalStorage } from "@/hooks/useStorage";
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
interface IPrivateRoute {
  children: ReactElement;
}
const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
  const [user] = useLocalStorage("user", {});
  const role = user?.user?.role;
  return role === "admin" ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
