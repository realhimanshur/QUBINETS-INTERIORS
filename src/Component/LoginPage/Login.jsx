import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="lcontainer">
      <div className="left-side">
        <div className="text-section">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem
            sunt officiis amet, quibusdam repellat velit ad rerum nobis? Tenetur
            sapiente voluptatem ab suscipit magnam quisquam. Eaque quibusdam nam
            ratione.
          </p>
        </div>
        <img src="image/image1.jpg" alt="Background" />
      </div>
      <div className="right-side">
        <h1 className="brand">Brand</h1>
        <div className="login-section">
          <div className="title-section">
            <h3>Login</h3>
            <p>Welcome Back Please enter your details</p>
          </div>
          <div className="input-section">
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="checkbox-section">
            <input type="checkbox" />
            <div className="forget">
              <p className="checkbox-label">Remember Me</p>
              <p className="forgot-password">Forgot Password</p>
            </div>
          </div>
          <div className="buttons">
            <button className="login-btn">Login</button>
            <Link className="signup-btn" to="/sign">
              Sign Up
            </Link>
          </div>
          <div className="or-divider">
            <div className="divider-line"></div>
            <p className="or-text">or</p>
          </div>
          <div className="social-signin">
            <img src="image/R.png" alt="Google" />
            Sign In With Google
          </div>
        </div>
        <div className="signup-prompt">
          <p>
            Don't have an account?{" "}
            <span className="signup-link">
              <Link to="/sign">Sign up for free</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
