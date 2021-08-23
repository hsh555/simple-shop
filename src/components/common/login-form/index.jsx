import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formReadyToSubmit, setFormReadyToSubmit] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    username: null,
    password: null,
    form: null,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formValue = {
      username: userNameValue,
      password: passwordValue,
    };

    const checkValues = {
      username: false,
      password: false,
    };

    if (formValue.username.length > 2 && errorMessages.username.length === 0) {
      checkValues.username = true;
    }

    if (formValue.password.length > 2 && errorMessages.password.length === 0) {
      checkValues.password = true;
    }

    if (checkValues.username && checkValues.password) {
      setFormReadyToSubmit(true);
      setErrorMessages((prevState) => ({
        ...prevState,
        form: "",
      }));
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        form: "لطفا اطلاعات خود را تکمیل کنید",
      }));
    }
  };

  const ValidateUserName = ({ target }) => {
    const userNameReg =
      /^[a-zA-Z0-9]([_](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
    let { value } = target;
    if (userNameReg.exec(value)) {
      setUserNameValue(value);
      setErrorMessages((prevState) => ({
        ...prevState,
        username: "",
      }));
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        username:
          "نام کاربری فقط می تواند شامل حروف انگلیسی بزرگ و کوچک، اعداد و _ باشد.(بین 5 تا 18)",
      }));
    }
  };

  const ValidatePassword = ({ target }) => {
    const passwordReg = /^[a-zA-Z0-9]{6,12}$/;
    let { value } = target;
    if (passwordReg.exec(value)) {
      setPasswordValue(value);
      setErrorMessages((prevState) => ({
        ...prevState,
        password: "",
      }));
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        password:
          "رمز عبور فقط می تواند شامل اعداد و حروف کوچک و بزرگ لاتین باشد(بین 6 تا 12)",
      }));
    }
  };

  return (
    <div className="login-form">
      <h2 className="form-title">ورود به سایت</h2>
      <form action="" onSubmit={handleSubmitForm}>
        <div className="input-group">
          <label htmlFor="uNameInput">نام کاربری</label>
          <input
            type="text"
            name="username"
            id="uNameInput"
            onBlur={ValidateUserName}
          />
          {errorMessages.username === "" ? (
            <span className="check">
              <i class="fas fa-check"></i>
            </span>
          ) : null}
          <span className="error-message">{errorMessages.username}</span>
        </div>
        <div className="input-group">
          <label htmlFor="">رمز ورود</label>
          <input
            type="password"
            name="password"
            id="passInput"
            onBlur={ValidatePassword}
          />
          {errorMessages.password === "" ? (
            <span className="check">
              <i class="fas fa-check"></i>
            </span>
          ) : null}
          <span className="error-message">{errorMessages.password}</span>
        </div>
        <div className="button-group">
          <button type="submit" className="enabled">
            ورود
          </button>
          <Link to="/register">ثبت نام کنید</Link>
        </div>
        <span className="error-message">{errorMessages.form}</span>
      </form>
    </div>
  );
};

export default LoginForm;
