import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

class NotAuthenticated extends React.Component {
    render() {
        return <p className="not-auth-note">برای ورود به این بخش باید ابتدا <Link to="/login">لاگین</Link> کنید</p>;
    }
}

export default NotAuthenticated;