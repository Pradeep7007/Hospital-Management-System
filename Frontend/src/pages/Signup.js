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

  

  return (
    <div>
     <div className="container-fluid d-flex align-items-center justify-content-center bg-light" style={{ minHeight: "80vh" }}>
  <div className="card shadow" style={{ maxWidth: "450px", width: "100%" }}>

    {/* Header */}
    <div className="card-header bg-primary text-white text-center">
      <h2 className="h4 mb-1">Sign Up as a Patient</h2>
      <p className="mb-0 small">Create your account to access health services</p>
    </div>

    {/* Body */}
    <div className="card-body">
      <form>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="First Name" />
          </div>

          <div className="col">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input type="password" className="form-control" placeholder="Password" />
            <button type="button" className="btn btn-outline-secondary">
              Show
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <div className="input-group">
            <input type="password" className="form-control" placeholder="Confirm Password" />
            <button type="button" className="btn btn-outline-secondary">
              Show
            </button>
          </div>
        </div>

        <button type="button" className="btn btn-primary w-100">
          Create Account
        </button>
      </form>
    </div>

    {/* Footer */}
    <div className="card-footer text-center bg-light">
      <small>
        Already have an account?{" "}
        <button type="button" className="btn btn-link p-0">
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
