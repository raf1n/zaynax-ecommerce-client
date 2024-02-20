// useAuth.js
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../feature/auth/authSlice";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn;
};

export default useAuth;
