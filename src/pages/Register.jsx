import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  //declaration of state or logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //logic section

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "full name is required.";
    } else if (formData.name.length <= 3) {
      newErrors.name = "minimum 3 character required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "phonr number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "phone must be in 10 digit.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "minimum 6 character required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    //e.target.name = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("authData", JSON.stringify(formData));
      navigate("/Login");
      alert("Regisration succesfully");
    }
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  //design

  return (
    <>
      <div className="form-container">
        {/* page title*/}

        <h1 className="form-title">REGISTER</h1>
        <form onSubmit={handleSubmit}>
          {/* name field*/}
          <div className="form-group">
            <label htmlFor="name">Full name </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="enter your full name"
              onChange={handleInputChange}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>
          {/*email field */}
          <div className="form-group">
            <label htmlFor="email">email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="enter your email"
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* phone number field */}
          <div className="form-group">
            <label htmlFor="phone">phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="enter your phone number"
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/*password field  */}
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="create a password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>

          {/*submit button  */}

          <button type="submit" className="btn-primary">
            Register
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
