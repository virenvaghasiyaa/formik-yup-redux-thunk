import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouting = ({ isAllowed, redirectTo = "/home", children }) => {
  if (isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default PublicRouting;

PublicRouting.propTypes = {
  isAllowed: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.node,
};
