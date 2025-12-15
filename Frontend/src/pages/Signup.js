import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            role: 'patient',
          }),
        });
        if (response.ok) {
          navigate('/login');
        } else {
          const errorData = await response.json();
          console.log('Error data:', errorData); // Add this line to log the error data
          setErrors({ ...errors, submit: errorData.error });
        }
      } catch (error) {
        setErrors({ ...errors, submit: 'An error occurred. Please try again.' });
      }
    }
  };

  return (
    <div>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
  <div className="card shadow" style={{ maxWidth: "450px", width: "100%" }}>
    
    {/* Header */}
    <div className="card-header bg-primary text-white text-center">
      <h2 className="h4 mb-1">Sign Up as a Patient</h2>
      <p className="mb-0 small">Create your account to access health services</p>
    </div>

    {/* Body */}
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && (
              <div className="text-danger small">{errors.firstName}</div>
            )}
          </div>

          <div className="col">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && (
              <div className="text-danger small">{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="text-danger small">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <div className="text-danger small">{errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="text-danger small">{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Account
        </button>
      </form>
    </div>

    {/* Footer */}
    <div className="card-footer text-center bg-light">
      <small>
        Already have an account?{" "}
        <button
          type="button"
          className="btn btn-link p-0"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      </small>
    </div>

  </div>
</div>

    </div>
  )
}

export default Signup;
