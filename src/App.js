import "./App.css";
//import Login from "./pages/Login/Login";
import { Navigate, Route } from "react-router-dom";
import AuthGuar from "./guard/AuthGuard";
//import Private from "./pages/private/Private";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { NotFoundPage } from "./utilities/NotFoundPage";
import Logout from "./components/LogOut/Logout";
import RolGuard from "./guard/RolGuard";
import { Roles } from "./models/roles";
import Dashboard from "./pages/private/dashboard/Dashboard";
import { Suspense,lazy } from "react";
const Login = lazy(()=>import('./pages/Login/Login'))
const Private = lazy(()=> import('./pages/private/Private'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
      <NotFoundPage>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route element={<AuthGuar privateValidation={true} />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
        <Route element={<RolGuard rol={Roles.ADMIN} />}>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </Route>
      </NotFoundPage>
      <Logout />
      </Suspense>


    </div>
  );
}

export default App;
