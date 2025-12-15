import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User, Stethoscope, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

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
            <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <div className="input-group">
            <input
                            type={showPassword1 ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter your password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => setShowPassword1(!showPassword1)}
                          >
                            {showPassword1 ? <EyeOff size={18} /> : <Eye size={18} />}
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
        <button type="button" className="btn btn-link p-0" onClick={()=>navigate('/login')}>
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
