import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const location = useLocation();
  const admin = useSelector((state) => state.auth.user);

  if (admin && admin?.user_id) {
    return children;
  }
  return (
    <Navigate to="/admin-login" state={{ from: location }} replace></Navigate>
  );
};

export default AdminRoute;
