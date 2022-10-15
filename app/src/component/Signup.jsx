import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    useremail: "",
    usertype: "",
    userpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const url = "/user/signup";
      const { user: res } = await axios.post(url, user);
      alert("Check your email for confirmation please!");
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
      <div className="signupPage">
        <div className="container">
          <div className="form signup">
            <span className="title">Registration</span>
            <form method="POST" id="reg-form">
              <div className="input-field">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  id="reg_name"
                  value={user.username}
                  onChange={handleInputs}
                  required
                />
                <i className="uil uil-user"></i>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  name="useremail"
                  placeholder="Enter your email"
                  id="reg_email"
                  value={user.useremail}
                  onChange={handleInputs}
                  required
                />
                <i className="uil uil-at icon"></i>
              </div>

              <div className="input-field select_role">
                <div className="select">
                  <select
                    className="fs-6"
                    style={{ color: "#827B75" }}
                    name="usertype"
                    id="select_role"
                    value={user.usertype}
                    onChange={handleInputs}
                  >
                    <option value="1">Select your role</option>
                    <option value="2">SHG (Already/ Want To Become)</option>
                    <option value="3">Distributor / Bulk Order Buyer</option>
                  </select>
                </div>
              </div>

              <div className="input-field">
                <input
                  type="password"
                  name="userpassword"
                  className="password"
                  id="reg_password"
                  placeholder="Create a password"
                  value={user.userpassword}
                  onChange={handleInputs}
                  required
                />
                <PasswordStrengthBar password={user.userpassword} />{" "}
                {/* password strength meter */}
                <i className="uil uil-padlock icon"></i>
              </div>

              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="signCheck" />
                  <label htmlFor="signCheck" className="text">
                    Remember Me
                  </label>
                </div>
              </div>
              <div
                className="input-field button"
                value="register"
                onClick={PostData}
              >
                <div className="signup_button">Sign up</div>
              </div>
            </form>
            <div className="login-signup">
              <span className="text">
                Already a member?
                <Link to="/login" className="text login-link">
                  Login now.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
