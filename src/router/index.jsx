import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import HomePage from "../pages/homePage";

class RouteHandler extends React.Component {
    render() {
        return (
            <Router>
                <HomePage />
            </Router>
        );
    }
}

export default RouteHandler;