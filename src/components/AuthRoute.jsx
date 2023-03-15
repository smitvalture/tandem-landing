import { useAuth } from "../context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();
  // console.log(user);

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  }


};

export default AuthRoute;




// return user && user.user_metadata.name ? (
//   <Outlet />
// ) : (
//   <Navigate to={"/login"} replace state={{ path: location.pathname }} />
// );