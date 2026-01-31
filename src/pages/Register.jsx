import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="form-container">
        {/* page title*/}

        <h1 className="form-title">REGISTER</h1>
        <form>
          {/* name field*/}
          <div className="form-group">
            <label htmlFor="name">Full name </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your full name"
            />
          </div>
          {/*email field */}
          <div className="form-group">
            <label htmlFor="email">email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
            />
          </div>

          {/* phone number field */}
          <div className="form-group">
            <label htmlFor="phone" phone number></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="enter your phone number"
            />
          </div>

          {/*password field  */}
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placehzolder="create a password"
            />
          </div>

          {/*submit button  */}

          <button type="submit" className="btn-primary">
            register
          </button>
        </form>

        {/*link to login page */}
        <p className="link-text">
          Already have an account?
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
