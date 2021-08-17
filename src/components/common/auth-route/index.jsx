import React from "react";
import NotAuthenticated from "../not-authenticated";

class AuthRoute extends React.Component {
    render() {
        const {isAuthenticated, children} = this.props;
        if(isAuthenticated) {
            return children;
        }
        return <NotAuthenticated />;
    }
}

export default AuthRoute;