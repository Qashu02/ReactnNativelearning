import { useContext } from "react"
import AuthContext from "./context"
import AuthStorage from "./storage"
import { jwtDecode } from "jwt-decode"
export default  useAuth=()=>{
const {user,setUser} = useContext(AuthContext);
const login=(authToken)=>{
    const user =jwtDecode(authToken)
   setUser(user)
    AuthStorage.storeToken(authToken)
    
}
const logout=()=>{
        setUser(null);
        AuthStorage.removeToken()
}
return{ user, setUser, logout,login};
}
