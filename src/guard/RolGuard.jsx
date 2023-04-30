import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../models/routes";

function RolGuard({rol}) {
    const user = useSelector((store) => store.user);
  return user.rol === rol ? <Outlet/>: <Navigate replace to={PrivateRoutes.PRIVATE}/>
}
export default RolGuard