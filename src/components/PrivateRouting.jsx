import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouting = ({ isAllowed, redirectTo = "/home", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRouting;

PrivateRouting.propTypes = {
  isAllowed: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.node,
};
