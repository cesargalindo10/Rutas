import { useDispatch } from "react-redux";
import { getMorty } from "../../services/api.services";
import { UserKey, createUser, resetUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { Roles } from "../../models/roles";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities/LocalStorage";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {
    try {
      const response = await getMorty();
      dispatch(createUser({...response,rol:Roles.USER}));
      navigate(`/${PrivateRoutes.PRIVATE}`,{replace:true})
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   // clearLocalStorage(UserKey)
    //dispatch(resetUser())
   // navigate(`/${PublicRoutes.LOGIN}`,{replace:true})
  }, []);
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
export default Login;
