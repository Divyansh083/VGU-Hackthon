import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    useremail: "",
    userpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const url = "/user/login";
      const { user: res } = await axios.post(url, user).then((response) => {
        localStorage.setItem("Name", response.data.username);

        if (
          response.data.status === "active" &&
          response.data.usertype === "indi"
        ) {
          navigate("/farmer");
        } else if (
          response.data.status === "active" &&
          response.data.usertype === "org"
        ) {
          navigate("/buyerdashboard");
        }
        if (response.data.status === "pending") {
          //navigate("/somewhere"); when they have not been verified yet
        }
      });
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("Invalid Credentials");
      }
    }
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      const url = "/user/forgotpassword";
      const { user: res } = await axios.post(url, user).then((response) => {
        alert("Check your email!");
      });
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="form1">
            <span className="title">Login</span>
            <form method="POST" id="login-form">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="useremail"
                  value={user.useremail}
                  onChange={handleInputs}
                  id="login_email"
                  required
                />
                <i className="uil uil-at icon"></i>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  name="userpassword"
                  value={user.userpassword}
                  onChange={handleInputs}
                  id="login_password"
                  required
                />
                <i className="uil uil-padlock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">
                    Remember Me
                  </label>
                </div>
                <a href="# " className="text" onClick={forgotPassword}>
                  Forgot Password?
                </a>
              </div>
              <div className="input-field button" onClick={loginUser}>
                <div className="login_button">Login</div>
              </div>
            </form>
            <div className="login-signup">
              <span className="text">
                Not a member?
                <Link to="/signup" className="text signup-link">
                  Signup now.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
