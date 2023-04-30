import { useDispatch } from "react-redux"
import { UserKey, resetUser } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities/LocalStorage"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout=()=>{
        clearLocalStorage(UserKey)
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`,{replace:true})
    }
  return (
    <div><button onClick={logout}>Log Out</button></div>
  )
}
export default Logout