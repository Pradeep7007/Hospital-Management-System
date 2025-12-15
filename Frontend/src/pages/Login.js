import React, { useState } from "react";
import { Shield, User, Stethoscope, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    { id: "admin", label: "Admin", icon: Shield },
    { id: "patient", label: "Patient", icon: User },
    { id: "doctor", label: "Doctor", icon: Stethoscope },
  ];

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "80vh" }}
    >
      <div className="card shadow" style={{ maxWidth: "450px", width: "100%" }}>
        
        {/* Header */}
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-1">Login to HealthCare Portal</h4>
          <small>Access your account</small>
        </div>

        {/* Body */}
        <div className="card-body">

          {/* Role Selector */}
          <div className="btn-group w-100 mb-4">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                className={`btn ${
                  selectedRole === role.id
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <role.icon size={16} className="me-1" />
                {role.label}
              </button>
            ))}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
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
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-100">
            Login as {roles.find((r) => r.id === selectedRole)?.label}
          </button>
        </div>

        {/* Footer */}
        <div className="card-footer text-center bg-light">
          <small>
            Don’t have an account?{" "}
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </small>
        </div>

      </div>
    </div>
  );
};

export default Login;
