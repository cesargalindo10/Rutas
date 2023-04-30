import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models/routes";
const PrivateValidationFragment = <Outlet />;
const PublicValidationFRagment = <Navigate replace to={PrivateRoutes.PRIVATE} />;
export const AuthGuar = ({privateValidation}) => {
  const user = useSelector((store) => store.user);
  return user.name ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFRagment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};
export default AuthGuar;
