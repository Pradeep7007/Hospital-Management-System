import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Signup.css';
import logo from '../assests/logo.png';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    dob: "",
    bloodGroup: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // toggle password visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="signup-container">
      
      <div className="d-flex justify-content-center gap-2">
      <img src={logo} alt="logo" className="logo" />
        <h3 className="text-center mt-2">Management System</h3>
      </div>
      
      <h2 className="text-center">Signup Form</h2>
      <form onSubmit={handleSubmit} className="signup-form">

        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Father Name:</label>
        <input
          type="text"
          name="fatherName"
          placeholder="Enter father's name"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />

        <label>Mother Name:</label>
        <input
          type="text"
          name="motherName"
          placeholder="Enter mother's name"
          value={formData.motherName}
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

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Blood Group:</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        {/* Password Section with Show/Hide */}
        <label>Password:</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
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

        <button type="submit" className="signup-btn">Signup</button>
      </form>

      <p className="login-link text-center">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} className="login-text text-primary">
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
