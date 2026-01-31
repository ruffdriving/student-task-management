import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
    <div className="form-container">
      {/*page title */}
      <h1 className="form-title">welcom back</h1>
      {/*login form */}
      <form>
        {/*email field */}
        <div className="form-group">
          <label htmlFor="email">email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
          />
        </div>

        {/*password field */}
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter ypur password"
          />
        </div>

        {/*submit button */}
        <button className="btn-primary">login</button>
      </form>
      {/*link to register page */}
      <p className="link-text">
        Don't have an account? <Link to="/Register">Register here</Link>
      </p>
    </div>
    </>
  );
};

export default Login;
