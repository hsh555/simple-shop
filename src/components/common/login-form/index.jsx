import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  handleSubmitForm = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="login-form">
        <h2 className="form-title">ورود به سایت</h2>
        <form action="" onSubmit={this.handleSubmitForm}>
          <div className="input-group">
            <label htmlFor="uNameInput">نام کاربری</label>
            <input type="text" name="username" id="uNameInput" />
          </div>
          <div className="input-group">
            <label htmlFor="">رمز ورود</label>
            <input type="password" name="password" id="passInput" />
          </div>
          <div className="button-group">
            <button type="submit">ورود</button>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
