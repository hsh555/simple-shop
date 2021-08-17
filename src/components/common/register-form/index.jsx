import React from "react";
import "./style.css";

class RegisterForm extends React.Component {
  handleSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="register-form">
        <h2 className="form-title">ثبت نام در سایت</h2>
        <form action="" onSubmit={this.handleSubmitForm}>
          <div className="input-group">
            <label htmlFor="fNameInput">نام و نام خانوادگی</label>
            <input type="text" name="fullName" id="fNameInput" />
          </div>
          <div className="input-group">
            <label htmlFor="uNameInput">نام کاربری</label>
            <input type="text" name="username" id="uNameInput" />
          </div>
          <div className="input-group">
            <label htmlFor="emailInput">ایمیل</label>
            <input type="text" name="email" id="emailInput" />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumberInput">شماره تلفن</label>
            <input type="text" name="phoneNumber" id="phoneNumberInput" />
          </div>
          <div className="input-group">
            <label htmlFor="passInput">رمز ورود</label>
            <input type="password" name="password" id="passInput" />
          </div>
          <div className="button-group">
            <button type="submit">ثبت نام</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
