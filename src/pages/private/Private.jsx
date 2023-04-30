import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
//import Home from "./home/Home";
//import Dashboard from "./dashboard/Dashboard";
import { NotFoundPage } from "../../utilities/NotFoundPage";
import { lazy } from "react";
const Dashboard = lazy(()=>import('./dashboard/Dashboard'));
const Home = lazy(()=>import('./home/Home'))
function Private() {
  return (
    <NotFoundPage>
    <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>}/>
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </NotFoundPage>
  );
}
export default Private;
