import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from '../assests/logo.png';
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful!");
    
  };

  return (
    <div className="login-container">

      <div className="d-flex justify-content-center gap-2">
            <img src={logo} alt="logo" className="logo" />
              <h3 className="text-center mt-2">Management System</h3>
            </div>

      <h2 className="text-center">Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          maxLength="10"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email ID:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p className="login-link text-center">
        Don't have an account?{" "}
        <span onClick={() => navigate("/")} className="login-text text-primary">
          Signup
        </span>
      </p>
    </div>
  );
}

export default Login;
