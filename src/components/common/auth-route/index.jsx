import React from "react";
import NotAuthenticated from "../not-authenticated";

const AuthRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <NotAuthenticated />;
};

export default AuthRoute;
